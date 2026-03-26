import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

// Import Home page for route navigation for pages that don't have their own route
import Home from "./pages/Home";

// MainLayout is used to cover all of the routes
import MainLayout from "./layouts/MainLayout";

// Import ALL your components
// new update for lazy loading of components

const Accordion = React.lazy(() => import("./components/accordion"));
const ModalTest = React.lazy(
  () => import("./components/custom-modal-popup/modal-test"),
);
const TabTest = React.lazy(() => import("./components/custom-tabs/tab-test"));
const FeatureFlags = React.lazy(() => import("./components/feature-flag"));
const GithubProfileFinder = React.lazy(
  () => import("./components/github-profile-finder"),
);
const ImageSlider = React.lazy(() => import("./components/image-slider"));
const LightDarkMode = React.lazy(() => import("./components/light-dark-mode"));
const LoadMoreData = React.lazy(() => import("./components/load-more-data"));
const QRCodeGenerator = React.lazy(
  () => import("./components/qr-code-generator"),
);
const RandomColor = React.lazy(() => import("./components/random-color"));
const ScrollIndicator = React.lazy(
  () => import("./components/scroll-indicator"),
);
const ScrollToTopAndBottom = React.lazy(
  () => import("./components/scroll-to-top-and-bottom"),
);
const SearchAutocomplete = React.lazy(
  () => import("./components/search-autocomplete-with-api"),
);
const StarRating = React.lazy(() => import("./components/star-rating"));
const TicTacToe = React.lazy(() => import("./components/tic-tac-toe"));
const TreeView = React.lazy(() => import("./components/tree-view"));
const UseFetchHookTest = React.lazy(
  () => import("./components/use-fetch/test"),
);
const UseOnclickOutsideTest = React.lazy(
  () => import("./components/use-outside-click/test"),
);
const UseWindowResizeTest = React.lazy(
  () => import("./components/use-window-resize/test"),
);

function App() {
  return (
    <Router>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </MainLayout>
    </Router>
  );
}

export default App;
