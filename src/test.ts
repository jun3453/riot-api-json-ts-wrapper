import * as DataDragon from "./DataDragon/dataDragon"
import axios from "axios";

const championUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json";
const itemUrl = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/item.json";

axios.get(championUrl)
   .then((response) => {
      const data = response.data;
      const result: DataDragon.Champion.champions = data;
      const garen: DataDragon.Champion.champion = result.data["Garen"]
      console.log(garen.title);
   });

axios.get(itemUrl)
   .then((response) => {
      const data = response.data;
      const result: DataDragon.Item.items = data;
      const boots: DataDragon.Item.item = result.data["1001"];
      console.log(boots.gold);
   });