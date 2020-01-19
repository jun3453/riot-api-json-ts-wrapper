import { image } from "./global";
export declare const getChampions: (version: string, language: string) => Promise<champions>;
export declare const getChampionDetail: (champion: champion, version: string, language: string) => Promise<championDetail>;
export declare const createChampionImageUrl: (champion: champion, version: string) => string;
export declare const createChampionSplashArtUrls: (detail: championDetail) => string[];
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
export declare type championDetail = {
    type: string;
    format: string;
    version: string;
    data: {
        [name: string]: championDetailData;
    };
};
export declare type championDetailData = {
    id: string;
    key: number;
    name: string;
    title: string;
    image: image;
    skins: skin[];
    lore: string;
    blurb: string;
    allytips: string[];
    enemytips: string[];
    tags: string[];
    parttype: string;
    info: info;
    stats: stats;
    spells: spell[];
    passive: passive;
};
declare type skin = {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
};
declare type spell = {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: leveltip;
    maxrank: number;
    cooldown: number;
    cooldownBurn: string;
    cost: number[];
    costBurn: string;
    datavalues: any;
    effect: any;
    effectBurn: any;
    vars: any;
    costType: string;
    maxammo: string;
    range: number[];
    rangeBurn: string;
    image: image;
    resource: string;
    recommended: recommended[];
};
declare type leveltip = {
    label: string[];
    effect: string[];
};
declare type passive = {
    name: string;
    description: string;
    image: image;
};
declare type recommended = {
    champion: string;
    title: string;
    map: string;
    mode: string;
    type: string;
    customTag: string;
    sortrank: number;
    extensionPage: boolean;
    useObviosCheckmark: boolean;
    customPanel: any;
    blocks: block[];
};
declare type block = {
    type: string;
    recMath: boolean;
    recSteps: boolean;
    minSummonerLevel: number;
    maxSummonerLevel: number;
    showIfSummonerSpell: string;
    hideIfSummonerSpell: string;
    appendAfterSection: string;
    visibleWithAllOf: string[];
    hiddenWithAnyOf: string[];
    items: blockItem[];
};
declare type blockItem = {
    id: string;
    count: number;
    hideCount: boolean;
};
export {};
