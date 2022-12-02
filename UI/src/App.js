import "./App.css";
import Personaldetails from "./components/Onboardingportal/Personaldetails";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Identity from "./components/Onboardingportal/Identity";
import WorkExperience from "./components/Onboardingportal/WorkExperience";
import HomePage from "./components/LandingPage/HomePage";
import Dashboard from "./components/AdminPortal/components/dashboard";
import AddEmployee from "./components/AdminPortal/components/AddEmployee";
import Allemployee from "./components/AdminPortal/components/AllEmployee";
import Editemployee from "./components/AdminPortal/components/EditEmployee";
import Login from "./components/AdminPortal/components/Login";
import "react-toastify/dist/ReactToastify.css";
import Thankpage from "./components/Onboardingportal/Thankpage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/dashboard/addEmployee" element={<AddEmployee />} />
        <Route exact path="/dashboard/allEmployee" element={<Allemployee />} />
        <Route exact path="/dashboard/:id" element={<Editemployee />} />
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/personaldetails" element={<Personaldetails />} />
        <Route exact path="/identity" element={<Identity />} />
        <Route exact path="/workexperience" element={<WorkExperience />} />
        <Route exact path="/thankpage" element={<Thankpage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
