import { apis } from "service";

const COMMON_URL = `https://sha2a-olx.herokuapp.com/user/register/`;

const API_URLS = { POST: `${COMMON_URL}` };

export const post = (payload) => apis.post(API_URLS.POST, payload);
