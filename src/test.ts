import { getChampions } from "./DataDragon/champion";

const v: string = "3.9.5";
getChampions(v).then(c => {
   console.log(c);
});