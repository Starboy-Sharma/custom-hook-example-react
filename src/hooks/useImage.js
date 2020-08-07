import { useState, useEffect } from "react";

function useImage(src) {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasStartedInitialFetch, setHasStartedInitialFetch] = useState(false);

  useEffect(() => {
    setHasStartedInitialFetch(true);
    setHasError(false);
    setHasLoaded(false);

    // Here's the magic is happening
    const image = new Image();
    image.src = src;

    const handleError = () => {
      setHasError(true);
    };

    const handleLoad = () => {
      setHasLoaded(true);
      setHasError(false);
    };

    image.onerror = handleError;
    image.onload = handleLoad;

    return () => {
      image.removeEventListener("error", handleError);
      image.removeEventListener("load", handleLoad);
    };
  }, [src]);

  return { hasLoaded, hasError, hasStartedInitialFetch };
}

export default useImage;
