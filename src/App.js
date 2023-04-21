import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Pricing from "./pages/Pricing/Pricing";
import Payroll from "./pages/Payroll/Payroll";
import Performance from "./pages/Performance/Performance";
import OnBoardingModal from "./components/OnBoarding/OnBoarding";
import Homepage from "./pages/Homepage/Homepage";


function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" exact element={<Homepage /> }/>
      <Route path="/payroll"   element={<Payroll />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/performance" element={<Performance /> } />
      <Route path="/get-started" element={<OnBoardingModal />} />
      </Routes>
    </Layout>
  );
}

export default App;
