import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./login";
import Attended from "./Attended";
import SignUp from "./signup";
import FrontPage from "./frontpage";
import Update from "./update";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/attended":
        title = "";
        metaDescription = "";
        break;
      case "/front-page":
      title = "";
       metaDescription = "";
        break;
      case "/sign-up":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/attended" element={<Attended />} />
      <Route path="/update" element={<Update />} />
      <Route path="/front-page" element={<FrontPage />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  );
}
export default App;
