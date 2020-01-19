"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const champion_1 = require("./DataDragon/champion");
const v = "3.9.5";
const l = "ja_JP";
champion_1.getChampions(v, l).then(c => {
    console.log(c);
});
//# sourceMappingURL=test.js.map