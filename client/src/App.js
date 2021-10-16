import React, {Suspense} from "react";
import './App.css';

const Main = React.lazy(() => {
  return new Promise(resolve => setTimeout(resolve, 0.5*1000)).then(
    () => import("./components/Main.jsx")
  )
})

function App() {
  return (
    <Suspense fallback={<div className="fallback-loader block-center">Ładowanie...</div>}>
      <div className="App">
        <Main/>
      </div>
    </Suspense>
  );
}

export default App;
