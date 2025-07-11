import { observer } from 'mobx-react-lite';
import { moviesStore } from '@/main.tsx';
import { useEffect } from 'react';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export const MovieList = observer(() => {

  // Используем хук бесконечного скролла
  useInfiniteScroll(() => {
    if (moviesStore.hasMore && !moviesStore.isLoading) moviesStore.loadMovies();
  });

  useEffect(() => {
    // Загружаем первую страницу при монтировании
    if (moviesStore.movies.length === 0) moviesStore.loadMovies();
  }, []);

  return (
    <div>
      {moviesStore.isLoading && moviesStore.movies.length === 0 ? (
        <div>Загрузка...</div>
      ) : (
        <div>
          {moviesStore.movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <h3>{movie.name}</h3>
              <p>Год: {movie.year}</p>
              {movie.poster?.url && (
                <img
                  src={movie.poster.url}
                  alt={movie.name}
                  width={200}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
});