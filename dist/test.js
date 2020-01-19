"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const champion_1 = require("./DataDragon/champion");
const v = "3.9.5";
const l = "ja_JP";
champion_1.getChampions(v, l).then(c => {
    champion_1.getChampionDetail(c.data["Garen"], v, l).then(detail => {
        console.log(detail);
    });
});
//# sourceMappingURL=test.js.map