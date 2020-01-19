import { image } from "./global";
import axios from 'axios';

const VRESION_REPLACE = "####";
const DATA_DRAGON_CHAMPION_URL = "http://ddragon.leagueoflegends.com/cdn/" + VRESION_REPLACE + "/data/en_US/champion.json";
const DATA_DRAGON_CHAMPION_IMAGE_URL = "http://ddragon.leagueoflegends.com/cdn/" + VRESION_REPLACE + "/img/champion/";

export const getChampions = async (version: string): Promise<champions> => {
    const url = createChampionsUrl(version);
    const result = await axios.get(url);
    const champions: champions = result.data;
    return champions;
}

const createChampionsUrl = (version: string): string => {
    return DATA_DRAGON_CHAMPION_URL.replace(VRESION_REPLACE, version)
}

export const createChampionImageUrl = (champion: champion, version: string): string => {
    return DATA_DRAGON_CHAMPION_IMAGE_URL.replace(VRESION_REPLACE, version)
}

export type champions = {
    type: string;
    format: string;
    version: string;
    data: { [name: string]: champion };
}

export type champion = {
    version: string;
    id: string;
    key: number;
    name: string;
    title: string;
    info: info;
    image: image;
    tags: string[];
    partype: string;
    stats: stats;
}

type info = {
    attack: number,
    defense: number,
    magic: number,
    difficulty: number,
}

type stats = {
    hp: number,
    hpperlevel: number,
    mp: number,
    mpperlevel: number,
    movespeed: number,
    armor: number,
    armorperlevel: number,
    spellblock: number,
    spellblockperlevel: number,
    attackrange: number,
    hpregen: number,
    hpregenperlevel: number,
    mpregen: number,
    mpregenperlevel: number,
    crit: number,
    critperlevel: number,
    attackdamage: number,
    attackdamageperlevel: number,
    attackspeed: number,
    attackspeedperlevel: number,
}
