import axios from 'axios';

const LANGUAGES_URL = "https://ddragon.leagueoflegends.com/cdn/languages.json";

export const getLanguages = async (): Promise<language[]> => {
    const result = await axios.get(LANGUAGES_URL);
    const languages: language[] = result.data;
    return languages;
}

export type language = string;