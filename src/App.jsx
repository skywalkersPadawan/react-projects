import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import ALL your components
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tab-test";
import FeatureFlags from "./components/feature-flag";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

// Import Home page for route navigation for pages that don't have their own route
import Home from "./pages/Home";

// MainLayout is used to cover all of the routes
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/accordion"
            element={<Accordion />}
          />
          <Route
            path="/modal"
            element={<ModalTest />}
          />
          <Route
            path="/tabs"
            element={<TabTest />}
          />
          <Route
            path="/feature-flags"
            element={<FeatureFlags />}
          />
          <Route
            path="/github"
            element={<GithubProfileFinder />}
          />
          <Route
            path="/slider"
            element={<ImageSlider />}
          />
          <Route
            path="/theme"
            element={<LightDarkMode />}
          />
          <Route
            path="/load-more"
            element={<LoadMoreData />}
          />
          <Route
            path="/qr"
            element={<QRCodeGenerator />}
          />
          <Route
            path="/color"
            element={<RandomColor />}
          />
          <Route
            path="/scroll-indicator"
            element={<ScrollIndicator />}
          />
          <Route
            path="/scroll"
            element={<ScrollToTopAndBottom />}
          />
          <Route
            path="/search"
            element={<SearchAutocomplete />}
          />
          <Route
            path="/rating"
            element={<StarRating />}
          />
          <Route
            path="/tic-tac-toe"
            element={<TicTacToe />}
          />
          <Route
            path="/tree"
            element={<TreeView />}
          />
          <Route
            path="/use-fetch"
            element={<UseFetchHookTest />}
          />
          <Route
            path="/use-click"
            element={<UseOnclickOutsideTest />}
          />
          <Route
            path="/use-resize"
            element={<UseWindowResizeTest />}
          />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
