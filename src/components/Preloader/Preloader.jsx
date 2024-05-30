import { useEffect } from "react";
import { preLoaderAnim } from "../../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Monday,</span>
        <span>Friday,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;
