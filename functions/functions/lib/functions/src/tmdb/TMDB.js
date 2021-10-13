"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = require("node-fetch");
const SchemaConverter_1 = require("../converters/SchemaConverter");
const URLBuilder_1 = require("../utils/URLBuilder");
class TMDB {
    async getMoviesPage(request) {
        try {
            const url = URLBuilder_1.getURLFromRequest(request);
            const result = await node_fetch_1.default(url);
            const json = await result.json();
            if (json.success === false) {
                return [null, new Error(json.status_message)];
            }
            const schema = json;
            return [SchemaConverter_1.default.PageSchemaToIPage(schema), null];
        }
        catch (error) {
            if (error instanceof node_fetch_1.FetchError) {
                return [null, new Error('TMDB fetch error')];
            }
            return [null, error];
        }
    }
}
exports.default = TMDB;
