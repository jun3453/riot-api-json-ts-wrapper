"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const LANGUAGES_URL = "https://ddragon.leagueoflegends.com/cdn/languages.json";
exports.getLanguages = async () => {
    const result = await axios_1.default.get(LANGUAGES_URL);
    const languages = result.data;
    return languages;
};
//# sourceMappingURL=language.js.map