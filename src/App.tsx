import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutPhoto from "./pages/AboutPhoto";
import NotFound from "./pages/NotFound";
import { routes } from "./constants";
import "./App.css";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={routes.home} element={<Home />} />
                <Route path={routes.photo} element={<AboutPhoto />}>
                    <Route path={routes.photoId} element={<AboutPhoto />} />
                </Route>
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
