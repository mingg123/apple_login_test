import AppleLogin from "react-apple-login";
import "./App.css";
function App() {
  // "https://apple-login-project.web.app/signup/sns/redirect/apple/type/login"
  // https://kinderlabs.monster/signupadd
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

      <div>hihi</div>
    </>
  );
}

export default App;
