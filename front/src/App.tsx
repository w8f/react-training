import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouterSample from "./component/RouterSample";
import UseStateSample from "./component/useState/UseStateSample";
import UseEffectSample from "./component/useEffect/UseEffectSample";
import UseRefSample from "./component/useRef/UseRefSample";
import UseContextSample from "./component/useContext/UseContextSample";
import UseContextSampleWithState from "./component/useContext/UseContextSampleWithState";
import UseContextSampleWithCustomHook from "./component/useContext/UseContextSampleWithCustomHook";
import UseReducerSample from "./component/useReducer/UseReducerSample";
import MemorizationSample from "./component/memorization/MemorizationSample";
import AutomaticBatchingSample from "./component/v18/AutomaticBatchingSample";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<UseStateSample />} />
            <Route path="/sample" element={<RouterSample />} />
            <Route path="/useStateSample" element={<UseStateSample />} />
            <Route path="/useEffectSample" element={<UseEffectSample />} />
            <Route path="/useRefSample" element={<UseRefSample />} />
            <Route path="/UseContextSample" element={<UseContextSample />} />
            <Route
              path="/useContextSampleWithState"
              element={<UseContextSampleWithState />}
            />
            <Route
              path="/useContextSampleWithCustomHook"
              element={<UseContextSampleWithCustomHook />}
            />
            <Route path="/useReducerSample" element={<UseReducerSample />} />
            <Route
              path="/memorizationSample"
              element={<MemorizationSample />}
            />
            <Route
              path="/automaticBatchingSample"
              element={<AutomaticBatchingSample />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
