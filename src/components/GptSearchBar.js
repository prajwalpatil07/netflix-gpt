import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResult} from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langkey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult&page=1",
      API_OPTIONS
    );
    const json = await data.json()

    return json.results;
  };

  const handleGptSearchClick = async () => {

    const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + 
    searchText.current.value + 
    ". only gives me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, GOlmaal, Koi Mil Gaya";

   const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if(!gptResults.choices){
      // TODO: write Error Handling
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults})
      );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form className="w-full md:w-1/2 bg-black grid grid-cols-12" 
      onSubmit={(e) => e.preventDefault()}
      >
        <input 
        ref={searchText}
        type="text" 
        className="p-4 m-4 col-span-9" 
        placeholder={lang[langkey].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
        onClick={handleGptSearchClick}>
          {lang[langkey].search}
          </button>
      </form>
    </div>
  );
};

export default GptSearchBar;