"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var championUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json";
var itemUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/item.json";
axios_1["default"].get(championUrl)
    .then(function (response) {
    var data = response.data;
    var result = data;
    console.log(result.data);
    var garen = result.data["Garen"];
    console.log(garen.title);
});
axios_1["default"].get(itemUrl)
    .then(function (response) {
    var data = response.data;
    var result = data;
    var boots = result.data["1001"];
    console.log(boots.gold);
});
