import NotFoundPage from "../components/pages/NotFoundPage";
import HomePage from "../components/pages/HomePage";
import MovieDetailPage from "../components/pages/MovieDetailPage";

export default {
  // notFound: {
  //   title:  'Page was not found',
  //   path:   null,
  //   C:      NotFoundPage,
  // },
  home: {
    title:  'Home Page',
    path:   '/',
    C:      HomePage,
  },
  movieDetail: {
    title:  'Movie Detail Page',
    path:   '/',
    C:      MovieDetailPage,
  }
}