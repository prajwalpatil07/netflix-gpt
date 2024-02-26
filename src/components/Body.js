import { createBrowserRouter } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
import MoviePage from "./MoviePage";

const Body = () => {
  
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/browse/:id",
      element: <MoviePage />,
    },
  ]);

  


  return (
  <div>
    <RouterProvider router={appRouter} />
  </div>
  );
};
export default Body;