import React, {Suspense} from "react";
import { CookiesProvider } from "react-cookie";
import './App.css';

const Main = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 0.5*1000)).then(
    () => import("./components/Main.jsx")
  )
})

function App() {

  const API_URL = "https://serv-mini-piknik.herokuapp.com";

  return (
    <CookiesProvider>
      <Suspense fallback={<div className="fallback-loader block-center">Ładowanie...</div>}>
        <div className="App">
          <Main API_URL={API_URL}/>
        </div>
      </Suspense>
    </CookiesProvider>
  );
}

export default App;
