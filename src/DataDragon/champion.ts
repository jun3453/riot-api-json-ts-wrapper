import { image } from "./global";
import axios from 'axios';
import { version } from "./version";
import { language } from "./language";

const VERSION_REPLACE = "####";
const LANGUAGE_REPLACE = "$$$$";
const CHAMPIOIN_REPLACE = "~~~~";
const NUMBER_REPLACE = "----";

const DATA_DRAGON_BASE_URL = "http://ddragon.leagueoflegends.com/cdn/";
const DATA_DRAGON_CHAMPION_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/data/" + LANGUAGE_REPLACE + "/champion.json";
const DATA_DRAGON_CHAMPION_IMAGE_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/img/champion/" + CHAMPIOIN_REPLACE;
const DATA_DRAGON_CHAMPION_DETAIL_URL = DATA_DRAGON_BASE_URL + VERSION_REPLACE + "/data/" + LANGUAGE_REPLACE + "/champion/" + CHAMPIOIN_REPLACE + ".json";
const DATA_DRAGON_CHAMPION_SPLASH_ART_URL = DATA_DRAGON_BASE_URL + "/img/champion/splash/" + CHAMPIOIN_REPLACE + "_" + NUMBER_REPLACE + ".jpg"

export const getChampions = async (version: version, language: language): Promise<champions> => {
    const url = createChampionsUrl(version, language);
    const result = await axios.get(url);
    const champions: champions = result.data;
    return champions;
}

export const getChampionDetail = async (champion: champion, version: version, language: language): Promise<championDetail> => {
    const url = createChampionDetailUrl(champion, version, language);
    const result = await axios.get(url);
    const detail: championDetail = result.data;
    return detail;
}

const createChampionsUrl = (version: version, language: language): string => {
    return DATA_DRAGON_CHAMPION_URL.replace(VERSION_REPLACE, version).replace(LANGUAGE_REPLACE, language);
}

const createChampionDetailUrl = (champion: champion, version: version, language: language): string => {
    return DATA_DRAGON_CHAMPION_DETAIL_URL.replace(VERSION_REPLACE, version).replace(LANGUAGE_REPLACE, language).replace(CHAMPIOIN_REPLACE, champion.id);
}

export const createChampionImageUrl = (champion: champion, version: version): string => {
    return DATA_DRAGON_CHAMPION_IMAGE_URL.replace(VERSION_REPLACE, version).replace(CHAMPIOIN_REPLACE, champion.image.full);
}

export const createChampionSplashArtUrls = (detail: championDetail): string[] => {
    const data: championDetailData = Object.keys(detail.data).map((key: string) => {
        const id: string = detail.data[key].id;
        return detail.data[id];
    })[0];
    return data.skins.map((s: skin) => {
        return DATA_DRAGON_CHAMPION_SPLASH_ART_URL.replace(CHAMPIOIN_REPLACE, data.id).replace(NUMBER_REPLACE, s.num.toString());
    })
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

export type championDetail = {
    type: string;
    format: string;
    version: string;
    data: { [name: string]: championDetailData };
}

export type championDetailData = {
    id: string,
    key: number,
    name: string,
    title: string,
    image: image,
    skins: skin[],
    lore: string,
    blurb: string,
    allytips: string[],
    enemytips: string[],
    tags: string[],
    parttype: string,
    info: info,
    stats: stats,
    spells: spell[],
    passive: passive,

}

type skin = {
    id: string,
    num: number,
    name: string,
    chromas: boolean,
}

type spell = {
    id: string,
    name: string,
    description: string,
    tooltip: string,
    leveltip: leveltip,
    maxrank: number,
    cooldown: number,
    cooldownBurn: string,
    cost: number[],
    costBurn: string,
    datavalues: any, // TODO type
    effect: any, // TODO type
    effectBurn: any, // TODO type
    vars: any, // TODO type
    costType: string,
    maxammo: string,
    range: number[],
    rangeBurn: string,
    image: image,
    resource: string,
    recommended: recommended[],

}

type leveltip = {
    label: string[],
    effect: string[],
}

type passive = {
    name: string,
    description: string,
    image: image
}

type recommended = {
    champion: string,
    title: string,
    map: string,
    mode: string,
    type: string,
    customTag: string,
    sortrank: number,
    extensionPage: boolean,
    useObviosCheckmark: boolean,
    customPanel: any, // TODO type
    blocks: block[],
}

type block = {
    type: string,
    recMath: boolean,
    recSteps: boolean,
    minSummonerLevel: number,
    maxSummonerLevel: number,
    showIfSummonerSpell: string,
    hideIfSummonerSpell: string,
    appendAfterSection: string,
    visibleWithAllOf: string[],
    hiddenWithAnyOf: string[],
    items: blockItem[],
}

type blockItem = {
    id: string,
    count: number,
    hideCount: boolean,
}