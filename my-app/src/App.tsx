import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlesList from "./pages/ArticlesList";
import ReadArticle from "./pages/ReadArticle";
import Layout from "./layout/Layout";
import FallbackUI from "./components/FallbackUI";

function App() {
  return (
    <Layout>
      <Suspense fallback={<FallbackUI />}>
        <Router>
          <Routes>
            <Route path="/" element={<ArticlesList />} />
            <Route path="/articles" element={<ArticlesList />} />
            <Route path="/articles/:id" element={<ReadArticle />} />
          </Routes>
        </Router>
      </Suspense>
    </Layout>
  );
}

export default App;
