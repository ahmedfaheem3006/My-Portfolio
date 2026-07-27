import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Up from "./Components/Up";

const AllPro = lazy(() => import("./pages/AllPro"));

function App() {
  return (
    <div>
      <Navbar />
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen bg-transparent">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-orange-500 border-t-transparent"></div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allprojects" element={<AllPro />} />
        </Routes>
      </Suspense>
      <Up />
      <Footer />
    </div>
  );
}

export default App;
