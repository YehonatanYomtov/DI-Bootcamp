import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uniqueId } from "uuid";

import Footer from "../components/Footer";
import SearchInput from "../components/SearchInput";
import fetchWithPexelsClient from "../utils/fetchWithPexelsClient";
import LoadingSpinner from "../components/LoadingSpinner";

function Layout() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [error, setError] = useState("");
  const location = useLocation();

  useEffect(() => {
    async function fetchImages() {
      setError("");
      fetchWithPexelsClient("curated", "", setImages, setError, setIsLoading);
    }

    fetchImages();
  }, []);

  return (
    <>
      {error && <div className="error-message">{error}</div>}

      {isLoading && <LoadingSpinner />}

      {!error && (
        <div className="app">
          <SearchInput />

          <main>
            {location.pathname === "/" && (
              <div className="image-gallery">
                {images.map((img) => (
                  <img key={uniqueId()} src={img.src.medium} alt={img.alt} />
                ))}
              </div>
            )}
            {location.pathname !== "/" && <Outlet />}
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}

export default Layout;
