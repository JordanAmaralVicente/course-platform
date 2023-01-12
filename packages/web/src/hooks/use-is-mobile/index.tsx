import debounce from "lodash/debounce";
import { useEffect, useState } from "react";

const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", debounce(updateSize, 250));
    updateSize();
  }, []);

  return isMobile;
};

export default useIsMobile;
