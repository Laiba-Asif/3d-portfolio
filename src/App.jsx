import React, { useState, useEffect } from "react";
import { Toaster } from 'sonner';
// import Loader  from "./components/Loader";
import MyRoutes from "./routes";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloader = document.getElementById('preloader');
  if (preloader) {
  preloader.remove();}
    const timer = setTimeout(() => {
      setIsLoading(false);

    }, 3000); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div  >

      {/* {isLoading ? (
        <Loader />
      ) : ( */}
        <>
        <MyRoutes/>
        
        {/* <Toaster richColors position="top-right" /> */}
        </>
      {/* ) */}
      {/* } */}
    </div>
  );
}

export default App;
