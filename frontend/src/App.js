import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import SensorChart from "./screens/SensorDataChart";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3 h-full">
        <Routes> 
          <Route exact path="/" element={<SensorChart />}></Route>
         
        </Routes>
        {/* <SensorChart />
        <SensorChart /> */}
      </main>

    </Router>
  );
};

export default App;
