import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

/* Pages */

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Collection from "../pages/Collection";
import Projects from "../pages/Projects";
import TileDetails from "../pages/TileDetails";
import NotFound from "../pages/NotFound";

/* Layout Components */

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/collection"
          element={<Collection />}
        />

        <Route
          path="/projects"
          element={<Projects />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/tile/:slug"
          element={<TileDetails />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;