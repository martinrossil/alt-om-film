import * as admin from 'firebase-admin';
export default class FireStore {
    private db: FirebaseFirestore.Firestore;
    private real: admin.database.Database;
    public constructor(admin: admin.app.App) {
        this.db = admin.firestore();
        this.real = admin.database();
    }

    public create(): Promise<FirebaseFirestore.WriteResult> {
        return this.db.collection('entries').doc().create({ name: 'Martin', ran: Math.random() });
    }

    public createReal(): Promise<any> {
        return this.real.ref('user').set({ name: 'Martin', ran: Math.random() });
    }

    public async getReal(): Promise<admin.database.DataSnapshot> {
        return this.real.ref('user').once('value');
    }
}