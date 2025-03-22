import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from "./components/Header/Header";

const Home = lazy(() => import('./pages/Home'))
const Country = lazy(() => import('./pages/Country'))
const SearchCountry = lazy(() => import('./pages/SearchCountry'))

export const App = () => {
  return <>
    <Header />
    
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/country' element={<SearchCountry />} />
        <Route path='/country/:countryId' element={<Country />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  </>
};
