"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const championUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json";
const itemUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/item.json";
axios_1.default.get(championUrl)
    .then((response) => {
    const data = response.data;
    const result = data;
    const garen = result.data["Garen"];
    console.log(garen.title);
});
axios_1.default.get(itemUrl)
    .then((response) => {
    const data = response.data;
    const result = data;
    const boots = result.data["1001"];
    console.log(boots.gold);
});
//# sourceMappingURL=test.js.map