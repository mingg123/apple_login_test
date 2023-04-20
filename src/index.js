import { initializeApp } from "firebase/app";

import * as Sentry from "@sentry/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// const gaTrackingId = "UA-212537679-1";
// ReactGA.initialize(gaTrackingId, { debug: true });
// ReactGA.pageview(window.location.pathname);

const firebaseConfig = {
  apiKey: "AIzaSyCBdxpTVliuFcu-sYPf2XP_GXDJYj2UfTc",
  authDomain: "apple-login-project.firebaseapp.com",
  projectId: "apple-login-project",
  storageBucket: "apple-login-project.appspot.com",
  messagingSenderId: "1087203572816",
  appId: "1:1087203572816:web:81df33856208a86c512555",
  measurementId: "G-0V1GYR165B",
};

const app = initializeApp(firebaseConfig);

Sentry.init({
  dsn: "https://1d9bd6d960614142bacf76f5342371ec@o4504885204221952.ingest.sentry.io/4504953403604992",
  integrations: [
    new Sentry.BrowserTracing(),
    new Sentry.Integrations.Breadcrumbs({ console: true }),
  ],
  release: "apple4.0",
  tracesSampleRate: 1.0,
});

// const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
