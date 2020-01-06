import { champions, champion } from "./champion";
import axios from "axios";
import { items, item } from "./item";

const championUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json";
const itemUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/item.json";

axios.get(championUrl)
    .then((response) => {
       const data = response.data;
       const result: champions = data;
       const garen: champion = result.data["Garen"]
       console.log(garen.title);
    });

axios.get(itemUrl)
    .then((response) => {
       const data = response.data;
       const result: items = data;
       const boots: item = result.data["1001"];
       console.log(boots.gold);
    });