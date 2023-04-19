import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Pricing from "./pages/Pricing/Pricing";
import Payroll from "./pages/Payroll/Payroll";
import Performance from "./pages/Performance/Performance";


function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" exact element={<Payroll />}/>
      <Route path="/payroll" element={<Payroll />}/>
      <Route path="/pricing" element={<Pricing />}/>
      <Route path="/performance" element={<Performance /> } />
      </Routes>
    </Layout>
  );
}

export default App;
