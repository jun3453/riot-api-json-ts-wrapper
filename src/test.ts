import { getChampions, getChampionDetail } from "./DataDragon/champion";
import { version } from "./DataDragon/version"
import { language } from "./DataDragon/language";

const v: version = "3.13.6";
const l: language = "ja_JP";
getChampions(v, l).then(c => {
   getChampionDetail(c.data["Garen"], v, l).then(detail => {
      console.log(detail.data["Garen"].skins);
   })
});