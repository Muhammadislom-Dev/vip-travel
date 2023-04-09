import "./App.css";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./pages/Product/Product";
import Footer from "./components/Footer/Footer";
import Question from "./components/Question/Question";
import Navbar from "./components/Navbar/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/direction",
    element: <Product />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
      <Question />
      <Footer />
    </>
  );
}

export default App;
