import { useEffect, useRef, useState } from "react";
export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const KEY = "a93b9d4e";

  useEffect(
    function () {
      // callBack?.();
      const controller = new AbortController();
      async function fetchMovies() {
        // if there is no movie , set not found true and throw new error
        try {
          setIsLoading(true);
          setNotFound(false);
          const res = await fetch(
            `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok)
            throw new Error("Something went wrong with fetching the movies");

          const data = await res.json();
          if (data.Response === "False") {
            throw new Error("Movie Not Found !!");
          }

          setMovies(data.Search);
          setNotFound(false);
        } catch (e) {
          if (e.name === "AbortError") {
            return;
          }

          setNotFound(true);
          console.error(e.name);
        } finally {
          setIsLoading(false);
        }
        // stop the function execution here if an error occurs
      }

      if (query.length < 3) {
        setMovies([]);
        setNotFound(false);
        return;
      }
      // handleCloseMovie();

      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, isLoading, notFound };
}
