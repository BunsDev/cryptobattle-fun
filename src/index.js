import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Loading from "./components/Loading";
import Donation from "./components/Donation";
import Donations from "./components/Donations";
import Governance from "./components/Governance";
import Governances from "./components/Governances";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const Results = React.lazy(() => import("./components/Results"));
const Home = React.lazy(() => import("./components/Home"));
const Battle = React.lazy(() => import("./components/Battle"));
const NoMatch = React.lazy(() => import("./components/NoMatch"));

const queryClient = new QueryClient();

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="flex-col justify-between">
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/battle" element={<Battle />} />
              <Route path="/results" element={<Results />} />
              <Route path="/donations" element={<Donations />}>
                <Route path=":donationId" element={<Donation />} />
              </Route>
              <Route path="/governances" element={<Governances />}>
                <Route path=":governanceId" element={<Governance />} />
              </Route>
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </React.Suspense>
          <Footer />
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
