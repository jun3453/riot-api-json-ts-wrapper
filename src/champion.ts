import { image } from "./global";
import axios from 'axios';

const DATA_DRAGON_CHAMPION_URL = "http://ddragon.leagueoflegends.com/cdn/9.24.2/data/en_US/champion.json";
const DATA_DRAGON_CHAMPION_IMAGE_URL = "http://ddragon.leagueoflegends.com/cdn/9.24.2/img/champion/";

export const getChampions = async (): Promise<champions> => {
    const result = await axios.get(DATA_DRAGON_CHAMPION_URL);
    const champions: champions = result.data;
    return champions;
}

export const createChampionImageUrl = (champion: champion): string => {
    return DATA_DRAGON_CHAMPION_IMAGE_URL + champion.image.full;
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
