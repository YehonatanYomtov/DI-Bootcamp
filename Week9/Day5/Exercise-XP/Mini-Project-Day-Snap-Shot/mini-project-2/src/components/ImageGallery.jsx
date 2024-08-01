import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { v4 as uniqueId } from "uuid";

import LoadingSpinner from "../components/LoadingSpinner.jsx";
import fetchWithPexelsClient from "../utils/fetchWithPexelsClient.js";

function ImageGallery() {
  const { category } = useParams();
  const [images, setImages] = useState([]);
  const [amount, setAmount] = useState(30);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchImages() {
      setError("");

      fetchWithPexelsClient(
        "search",
        category,
        setImages,
        setError,
        setIsLoading,
        amount
      );
    }

    fetchImages();
  }, [category, amount]);

  return (
    <>
      {error && <div className="error-message">{error}</div>}

      {isLoading && <LoadingSpinner />}

      {!error && !isLoading && (
        <div>
          <div className="select-container">
            <label htmlFor="amount-select">Select amount: </label>

            <select
              id="amount-select"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              <option value="" disabled>
                Select amount
              </option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>

          <div className="image-gallery">
            {images.map((img) => (
              <img key={uniqueId()} src={img.src.medium} alt={img.alt} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default ImageGallery;
