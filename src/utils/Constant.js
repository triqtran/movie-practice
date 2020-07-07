import config from "../_env/dev.json";

export const API_HOST = config.API_HOST;

export const  API_VERSION = config.API_VERSION;

export const API_KEY = config.API_KEY;

export const SIZE_BANNER = config.SIZE_BANNER;

export const Image = path => `${config.IMAGE_URL}${path}`;