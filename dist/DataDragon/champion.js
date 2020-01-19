"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const VERSION_REPLACE = "####";
const LANGUAGE_REPLACE = "$$$$";
const CHAMPIOIN_REPLACE = "~~~~";
const NUMBER_REPLACE = "----";
const DATA_DRAGON_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/";
const DATA_DRAGON_CHAMPION_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/data/" + LANGUAGE_REPLACE + "/champion.json";
const DATA_DRAGON_CHAMPION_IMAGE_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/img/champion/" + CHAMPIOIN_REPLACE;
const DATA_DRAGON_CHAMPION_DETAIL_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/data/" + LANGUAGE_REPLACE + "/champion/" + CHAMPIOIN_REPLACE + ".json";
const DATA_DRAGON_CHAMPION_SPLASH_ART_URL = DATA_DRAGON_BASE_URL + "/img/champion/splash/" + CHAMPIOIN_REPLACE + "_" + NUMBER_REPLACE + ".jpg";
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
    return DATA_DRAGON_CHAMPION_DETAIL_URL.replace(VERSION_REPLACE, version).replace(LANGUAGE_REPLACE, language).replace(CHAMPIOIN_REPLACE, champion.id);
};
exports.createChampionImageUrl = (champion, version) => {
    return DATA_DRAGON_CHAMPION_IMAGE_URL.replace(VERSION_REPLACE, version).replace(CHAMPIOIN_REPLACE, champion.image.full);
};
exports.createChampionSplashArtUrls = (detail) => {
    const data = Object.keys(detail.data).map((key) => {
        const id = detail.data[key].id;
        return detail.data[id];
    })[0];
    return data.skins.map((s) => {
        return DATA_DRAGON_CHAMPION_SPLASH_ART_URL.replace(CHAMPIOIN_REPLACE, data.id).replace(NUMBER_REPLACE, s.num.toString());
    });
};
//# sourceMappingURL=champion.js.map