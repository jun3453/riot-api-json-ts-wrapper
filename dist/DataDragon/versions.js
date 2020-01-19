"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const VERSION_URL = "https://ddragon.leagueoflegends.com/api/versions.json";
exports.getVersions = async () => {
    const result = await axios_1.default.get(VERSION_URL);
    const versions = result.data;
    return versions;
};
//# sourceMappingURL=versions.js.map