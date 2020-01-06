import { image } from "./global";

export type champions = {
    type: string;
    format: string;
    version: string;
    data: {[name: string]: champion}[];
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