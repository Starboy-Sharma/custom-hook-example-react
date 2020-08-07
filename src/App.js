import React from "react";
import useImage from "./hooks/useImage";
import "./styles.css";

function Loader() {
  return <strong>Loading....</strong>;
}

export default function App() {
  const imageUrl = "https://wallpapercave.com/wp/wp5148945.jpg";
  const { hasLoaded, hasError } = useImage(imageUrl);

  if (hasError) {
    return null;
  }

  return (
    <div className="container">
      <div className="col-md-12">
        <h1 className="text-center"> Hello Image Hooks </h1>

        {!hasLoaded && <Loader />}
        {hasLoaded && (
          <img className="img-thumbnail" src={imageUrl} alt="Coffee" />
        )}
      </div>
    </div>
  );
}
