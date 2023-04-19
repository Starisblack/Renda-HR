import { Route, Routes } from "react-router-dom";
import Layout from "./containers/Layout/Layout";
import Pricing from "./pages/Pricing/Pricing";
import Payroll from "./pages/Payroll/Payroll";


function App() {
  return (
    <Layout>
      <Routes>
      <Route path="/" exact element={<Payroll />}/>
      <Route path="/payroll" element={<Payroll />}/>
        <Route path="/pricing" element={<Pricing />}/>
      </Routes>
    </Layout>
  );
}

export default App;
