import React from "react";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";


const GptSearch = () => {
  return (
    <>
      <div className="absolute -z-10 bg-slate-900">
         <img className="fixed h-full w-full object-cover" src={BG_URL} alt ="logo"/>
        </div>
        <div className="">
        <GptSearchBar />
      <GptMovieSuggestions />
       </div>
    </>
  );
};

export default GptSearch;
