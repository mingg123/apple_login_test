import { getAnalytics, logEvent } from "firebase/analytics";
import { useState } from "react";
import AppleLogin from "react-apple-login";
import Home from "../src/Home";
import Test from "../src/components/Test";
import "./App.css";
import Story from "./Story";

function App() {
  // "https://apple-login-project.web.app/signup/sns/redirect/apple/type/login"
  // https://kinderlabs.monster/signupadd

  const analytics = getAnalytics();
  const [error, setError] = useState(false);

  return (
    <>
      <AppleLogin
        clientId={"vaunceapplogin"}
        redirectURI={
          "https://appleid.apple.com/auth/authorize?client_id=vaunceapplogin&redirect_uri=https%3A%2F%2Fkinderlabs.monster%2FappleRedirect&response_type=code%20id_token&state=code&scope=name%20email&response_mode=form_post&frame_id=1ee8e88e-a12f-4ed1-9c6d-f59d284b6d11&m=12&v=1.5.4"
        }
        responseType={"code"}
        responseMode={"query"}
        usePopup={false}
        designProp={{
          height: 30,
          width: 140,
          color: "black",
          border: false,
          type: "sign-in",
          border_radius: 15,
          scale: 1,
          locale: "en_US",
        }}
      />

      <Home />
      <Story />
      {error && new Error("error")}
      <button onClick={() => setError(true)}>show error</button>

      <div>buybuy2</div>
      <button
        onClick={() => {
          logEvent(analytics, "basket", {
            content_type: "image",
            content_id: "P12453",
          });
        }}
      >
        이벤트 발생합니다.
      </button>
      <button
        onClick={() => {
          logEvent(analytics, "firebaseTestclickEvent", {
            content_type: "image",
            content_id: "P12453",
          });
        }}
      >
        이벤트 발생합니다.
      </button>
      <div>
        <Test />
      </div>
    </>
  );
}

export default App;
