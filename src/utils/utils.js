import { SHORTS } from "./constants";

//фильтр по длительности
export function filterDurationTime(movies) {
  return movies.filter((movie) => movie.duration < SHORTS);
}

//фильтр по запросу
export function filterMoviesFilms(movies, query) {
  const moviesQuery = movies.filter((movie) => {
    const movieRu = String(movie.nameRU).toLowerCase().trim();
    const movieEn = String(movie.nameEN).toLowerCase().trim();
    const userQuery = query.toLowerCase().trim();
    return (
      movieRu.indexOf(userQuery) !== -1 || movieEn.indexOf(userQuery) !== -1
    );
  });
  return moviesQuery;
}

//конвертер длительности фильмов
export function durationConverterTime(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return `${hours}ч${minutes}м`;
}

