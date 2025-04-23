import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/PostsPage";
import DefaultLayout from "./layouts/DefaultLayout";
import BlogDetail from "./pages/BlogDetail";
import NotFound from "./components/NotFound";
import GlobalContext from "./context/GlobalContext";

function App() {

  return (
    <GlobalContext>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<BlogDetail />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App;
