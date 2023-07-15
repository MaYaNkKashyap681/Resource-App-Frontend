//Hook to fire Media Query for the width of the Container
import { useState, useEffect } from "react";
const useIsMobile = (_width) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(
      `(max-width: ${_width ? _width : 800}px)`
    );
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return isMobile;
};

export default useIsMobile;