"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const champion_1 = require("./DataDragon/champion");
const v = "3.9.5";
champion_1.getChampions(v).then(c => {
    console.log(c);
});
//# sourceMappingURL=test.js.map