"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const DATA_DRAGON_CHAMPION_URL = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json";
const DATA_DRAGON_CHAMPION_IMAGE_URL = "http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/";
exports.getChampions = async () => {
    const result = await axios_1.default.get(DATA_DRAGON_CHAMPION_URL);
    const champions = result.data;
    return champions;
};
exports.createChampionImageUrl = (champion) => {
    return DATA_DRAGON_CHAMPION_IMAGE_URL + champion.image.full;
};
//# sourceMappingURL=champion.js.map