import { image } from "./global";

export type items = {
    type: string;
    format: string;
    version: string;
    data: {[name: string]: item};
    groups: groups[]; 
    tree: tree[];
}

export type item = {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string[];
    image: image;
    gold: gold;
    tags: string[];
    maps: {key: string, value: boolean}; 
    stats: {key: string, value: boolean};
    depth?: number;
}

type gold = {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
}

type groups = {
    id: string,
    MaxGroupOwnable: string,
}

type tree = {
    header: string,
    tags: string[],
}
