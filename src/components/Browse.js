import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import Secondarycontainer from "./SecondaryContainer";

const Browse = () => {
 
  useNowPlayingMovies();
 
  return (
   <div>
    <Header />
    <MainContainer />
    <Secondarycontainer />
  </div>
  );
};
export default Browse;