import config from "../_env/dev.json";

export const API_HOST = config.API_HOST;

export const  API_VERSION = config.API_VERSION;

export const API_KEY = config.API_KEY;

export const SIZE_BANNER = config.SIZE_BANNER;

export const Image = path => `${config.IMAGE_URL + path}`;

export const LOADING_ICON = `${process.env.PUBLIC_URL}/images/icons/loading.gif`;

export const ViewType = {
  GRID: 'grid',
  LIST: 'list',
}

export const CategoryType = {
  POPULAR: 'populars',
  TOPRATED: 'toprateds',
  UPCOMING: 'upcomings',
  GENRE: 'genres',
  list: [
    { name: 'Popular', value: "populars", sublist: [] }, 
    { name: 'Top Rated', value: "toprateds", sublist: [] }, 
    { name: 'Upcoming', value: "upcomings", sublist: [] },
    { name: 'Genres', value: "genres", sublist: [] },
  ]
}