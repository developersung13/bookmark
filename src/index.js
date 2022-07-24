import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "styles.css";
document.cookie = "safeCookie1=foo; SameSite=Lax";
document.cookie = "safeCookie2=foo";
document.cookie = "crossCookie=bar; SameSite=None; Secure";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
