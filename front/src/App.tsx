import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterSample from "./component/RouterSample";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/sample" element={<RouterSample />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
