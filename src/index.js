import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Loading from "./components/Loading";

const Results = React.lazy(() => import("./components/Results"));
const Home = React.lazy(() => import("./components/Home"));
const Battle = React.lazy(() => import("./components/Battle"));
const NoMatch = React.lazy(() => import("./components/NoMatch"));

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex-col justify-between">
        <Nav />
        <React.Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/battle" element={<Battle />} />
            <Route path="/results" element={<Results />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
