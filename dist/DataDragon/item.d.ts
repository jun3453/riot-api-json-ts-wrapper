import { image } from "./global";
export declare type items = {
    type: string;
    format: string;
    version: string;
    data: {
        [name: string]: item;
    };
    groups: groups[];
    tree: tree[];
};
export declare type item = {
    name: string;
    description: string;
    colloq: string;
    plaintext: string;
    into: string[];
    image: image;
    gold: gold;
    tags: string[];
    maps: {
        key: string;
        value: boolean;
    };
    stats: {
        key: string;
        value: boolean;
    };
    depth?: number;
};
declare type gold = {
    base: number;
    purchasable: boolean;
    total: number;
    sell: number;
};
declare type groups = {
    id: string;
    MaxGroupOwnable: string;
};
declare type tree = {
    header: string;
    tags: string[];
};
export {};
