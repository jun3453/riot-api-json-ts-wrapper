import { image } from "./global";
export declare const getChampions: (version: string) => Promise<champions>;
export declare const createChampionImageUrl: (champion: champion, version: string) => string;
export declare type champions = {
    type: string;
    format: string;
    version: string;
    data: {
        [name: string]: champion;
    };
};
export declare type champion = {
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
};
declare type info = {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
};
declare type stats = {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeed: number;
    attackspeedperlevel: number;
};
export {};
