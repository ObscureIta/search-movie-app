// // src/components/MovieCard.tsx
// import { observer } from 'mobx-react-lite';
// import { Movie } from '@/models/Movie';
//
// interface MovieCardProps {
//   movie: Movie;
// }
//
// export const MovieCard = observer(({ movie }: MovieCardProps) => {
//   const { id, title, year, rating, posterUrl, mainGenre } = movie.cardData;
//
//   return (
//     <div className="movie-card">
//       <img
//         src={posterUrl}
//         alt={`Постер фильма "${title}"`}
//         className="movie-poster"
//       />
//       <div className="movie-info">
//         <h3 className="movie-title">{title}</h3>
//         <div className="movie-meta">
//           <span className="movie-year">{year}</span>
//           <span className="movie-rating">★ {rating}</span>
//         </div>
//         <div className="movie-genre">{mainGenre}</div>
//       </div>
//     </div>
//   );
// });
//
