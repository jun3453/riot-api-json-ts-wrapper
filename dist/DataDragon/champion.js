"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const VERSION_REPLACE = "####";
const LANGUAGE_REPLACE = "$$$$";
const CHAMPIOIN_REPLACE = "~~~~";
const DATA_DRAGON_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/";
const DATA_DRAGON_CHAMPION_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/data/" + LANGUAGE_REPLACE + "/champion.json";
const DATA_DRAGON_CHAMPION_IMAGE_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/img/champion/";
const DATA_DRAGON_CHAMPION_DETAIL_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/data/" + LANGUAGE_REPLACE + "/champion/" + CHAMPIOIN_REPLACE + ".json";
exports.getChampions = async (version, language) => {
    const url = createChampionsUrl(version, language);
    const result = await axios_1.default.get(url);
    const champions = result.data;
    return champions;
};
exports.getChampionDetail = async (champion, version, language) => {
    const url = createChampionDetailUrl(champion, version, language);
    const result = await axios_1.default.get(url);
    const detail = result.data;
    return detail;
};
const createChampionsUrl = (version, language) => {
    return DATA_DRAGON_CHAMPION_URL.replace(VERSION_REPLACE, version).replace(LANGUAGE_REPLACE, language);
};
const createChampionDetailUrl = (champion, version, language) => {
    return DATA_DRAGON_CHAMPION_DETAIL_URL.replace(VERSION_REPLACE, version).replace(LANGUAGE_REPLACE, language).replace(CHAMPIOIN_REPLACE, champion.name);
};
exports.createChampionImageUrl = (champion, version) => {
    return DATA_DRAGON_CHAMPION_IMAGE_URL.replace(VERSION_REPLACE, version) + champion.image.full;
};
//# sourceMappingURL=champion.js.map