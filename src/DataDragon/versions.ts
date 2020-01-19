import axios from 'axios';

const VERSION_URL = "https://ddragon.leagueoflegends.com/api/versions.json";

export const getVersions = async (): Promise<string[]> => {
    const result = await axios.get(VERSION_URL);
    const versions: string[] = result.data;
    return versions;
}