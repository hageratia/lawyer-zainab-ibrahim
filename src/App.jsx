import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import HomePage from "./Components/HomePage/HomePage";
import BlogOne from "./Components/BlogOne/BlogOne";
import BlogTwo from "./Components/BlogTwo/BlogTwo";
import BlogThree from "./Components/BlogThree/BlogThree";
import BlogFour from "./Components/BlogFour/BlogFour";
import BlogFive from "./Components/BlogFive/BlogFive";
import BlogSix from "./Components/BlogSix/BlogSix";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/commercial-issues",
      element: <BlogOne />,
    },
    {
      path: "/astronomical-property",
      element: <BlogTwo />,
    },
    {
      path: "/astronomical-property",
      element: <BlogTwo />,
    },
    {
      path: "/division-of-estates",
      element: <BlogThree />,
    },
    {
      path: "/real-estate-lawsuits",
      element: <BlogFour />,
    },
    {
      path: "/commercial-ontracts",
      element: <BlogFive />,
    },
    {
      path: "/information-issues",
      element: <BlogSix />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
