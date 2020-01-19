import axios from 'axios';

const VERSIONS_URL = "https://ddragon.leagueoflegends.com/api/versions.json";

export const getVersions = async (): Promise<version[]> => {
    const result = await axios.get(VERSIONS_URL);
    const versions: version[] = result.data;
    return versions;
}

export type version = string