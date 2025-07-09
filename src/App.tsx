import './App.css';
import {Route, Routes} from "react-router-dom";
import Layout from "@/layout/Layout.tsx";
import {HomePage} from "@/pages/HomePage/HomePage.tsx";
import {MoviePage} from "@/pages/MoviePage/MoviePage.tsx";
import {FavoritesPage} from "@/pages/FavoritesPage/FavoritesPage.tsx";

function App() {

  return (
    <>
      <Routes>
         <Route element={<Layout />}>
           <Route path="/" element={<HomePage />} />
           <Route path="/movie/:id" element={<MoviePage />} />
           <Route path="/favorites" element={<FavoritesPage />} />
         </Route>
      </Routes>
    </>
  );
}

export default App;
