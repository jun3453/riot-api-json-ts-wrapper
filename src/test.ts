import { getChampions } from "./DataDragon/champion";
import { version } from "./DataDragon/version"
import { language } from "./DataDragon/language";

const v: version = "3.9.5";
const l: language = "ja_JP";
getChampions(v, l).then(c => {
   console.log(c);
});