import axios from "axios";
import {BBCURL} from "../config";

async function getLatestBBCNews() {
    const response = await axios.get(BBCURL);
    console.log(response);
}

export default getLatestBBCNews;
