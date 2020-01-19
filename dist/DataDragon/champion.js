"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const VRESION_REPLACE = "####";
const DATA_DRAGON_CHAMPION_URL = "http://ddragon.leagueoflegends.com/cdn/" + VRESION_REPLACE + "/data/en_US/champion.json";
const DATA_DRAGON_CHAMPION_IMAGE_URL = "http://ddragon.leagueoflegends.com/cdn/" + VRESION_REPLACE + "/img/champion/";
exports.getChampions = async (version) => {
    const url = createChampionsUrl(version);
    const result = await axios_1.default.get(url);
    const champions = result.data;
    return champions;
};
const createChampionsUrl = (version) => {
    return DATA_DRAGON_CHAMPION_URL.replace(VRESION_REPLACE, version);
};
exports.createChampionImageUrl = (champion, version) => {
    return DATA_DRAGON_CHAMPION_IMAGE_URL.replace(VRESION_REPLACE, version);
};
//# sourceMappingURL=champion.js.map