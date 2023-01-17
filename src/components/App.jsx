import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import "./App.scss";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} />
      ) : (
        <div className="init">
          <img
            src="https://i.pinimg.com/originals/e1/80/4e/e1804e9f5a5c4893167f45873342faba.gif"
            alt=""
          />
        </div>
      )}
    </>
  );
}

export default App;
