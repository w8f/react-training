import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterSample from "./component/RouterSample";
import UseStateSample from "./component/useState/UseStateSample";
import UseEffectSample from "./component/useEffect/UseEffectSample";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/sample" element={<RouterSample />} />
            <Route path="/useStateSample" element={<UseStateSample />} />
            <Route path="/useEffectSample" element={<UseEffectSample />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
