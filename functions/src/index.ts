import * as functions from 'firebase-functions';
import * as express from 'express';
import * as admin from 'firebase-admin';
import Config from './Config';
import FireStore from './FireStore';

const adminApp: admin.app.App = admin.initializeApp({
    credential: admin.credential.cert({
      privateKey: Config.private_key.replace(/\\n/g, '\n'),
      projectId: Config.project_id,
      clientEmail: Config.client_email
    }),
    databaseURL: 'https://alt-om-film-default-rtdb.europe-west1.firebasedatabase.app'
})
const fireStore: FireStore = new FireStore(adminApp);
const auth: admin.auth.Auth = admin.auth();

const app = express();
app.all('*', async (req, res) => {
    if (req.path.startsWith('/api/getreal/')) {
        try {
            const snapshot: admin.database.DataSnapshot = await fireStore.getReal();
            res.status(200).send({ code: 200, message: snapshot.val() });
        }
        catch (error) {
            res.status(200).send({ code: 500, message: error.message });
        }
    }
    if (req.path.startsWith('/api/real/')) {
        try {
            const writeResult: any = await fireStore.createReal();
            res.status(200).send({ code: 200, message: JSON.stringify(writeResult) });
        }
        catch (error) {
            res.status(200).send({ code: 500, message: JSON.stringify(error) });
        }
    }
    if (req.path.startsWith('/api/db/')) {
        try {
            const writeResult: FirebaseFirestore.WriteResult = await fireStore.create();
            res.status(200).send({ code: 200, message: JSON.stringify(writeResult.writeTime) });
        }
        catch (error) {
            res.status(200).send({ code: 500, message: JSON.stringify(error) });
        }
    }
    if (req.path.startsWith('/api/performance/')) {
        res.status(200).send('Performance' + req.path + ' method ' + req.method + ' query ' + JSON.stringify(req.query));
    }
    if (req.path.startsWith('/api/auth/')) { // uHliMMJimEFCXyWHA50XPElClQLu
        // res.status(200).send({ code: 200, message: 'ok' });
        try {
            const token: string = await auth.createCustomToken('5NJxIszu0MX6t1aSIfuSDvwKdhv2');
            res.status(200).send(token);
            // auth.verifyIdToken
            /* try {
                const decoded: admin.auth.DecodedIdToken = await auth.verifyIdToken(token);
                res.status(200).send(decoded);
            }
            catch (error) {
                res.status(200).send({ code: 500, message: JSON.stringify(error) });
            } */
        }
        catch (error) {
            res.status(200).send({ code: 500, message: JSON.stringify(error) });
        }
        /* try {
            const user: admin.auth.UserRecord = await auth.createUser({});
            res.status(200).send(user);
        }
        catch (error) {
            res.status(200).send({ code: 500, message: JSON.stringify(error) });
        } */
        auth.getUser('abcd')
            .then((user: admin.auth.UserRecord) => {
                res.status(200).send(user);
            })
            .catch((error) => {
                res.status(200).send({ code: 500, message: JSON.stringify(error) });
            })
            .finally(() => {
                res.status(200).send({ code: 300, message: 'finally' });
            });
        auth.createUser({})
            .then((user: admin.auth.UserRecord) => {
                res.status(200).send(user);
            })
            .catch((error) => {
                res.status(200).send({ code: 500, message: JSON.stringify(error) });
            });
        
    }
    res.status(404).send({ code: 404, message: 'Endpoint ' + req.path + ' does not exist.' });
});

export const api = functions.https.onRequest(app);
