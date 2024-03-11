import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesList from "./pages/ArticlesList";
import ReadArticle from "./pages/ReadArticle";

function Loading() {
  return <h2 className="text-red-500 text-2xl">🌀 Loading...</h2>;
}

function App() {
  return (
    <div className="App bg-black h-full min-h-dvh px-40 py-10">
      <Suspense fallback={<Loading />}>
        <Router>
          <Routes>
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<ReadArticle />} />
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
