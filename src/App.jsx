import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SidebarHeaderLayout from "./layout/SidebarHeaderLayout";
import Dashboard from "./pages/Dashboard";
import AttendanceCalculator from "./pages/AttendanceCalculator";
import ResumeBuilder from "./pages/Resume/ResumeBuilder";
import GradeCalculator from "./pages/GradeCalculator";
import StudyResources from "./pages/Library/StudyResources";
import Auth from "./pages/Auth/Auth";
import ForgotPassword from "./pages/Auth/ForgotPassword";

const App = () => {
  const sideBarLayoutLinks = [
    { name: "Dashboard", to: "/", component: Dashboard },
    { name: "Attendance Calculator", to: "/attendance-calculator", component: AttendanceCalculator },
    { name: "Resume Builder", to: "/resume-builder", component: ResumeBuilder },
    { name: "Grade Calculator", to: "/grade-calculator", component: GradeCalculator },
    // { name: "Study Resources", to: "/study-resources", component: StudyResources },
    { name: 'Study Resources', to: '/study-resources', redirectTo: '/study-resources/all' },
    { name: 'Resources', to: '/study-resources/:resourceId', component: StudyResources }
  ];

  const withoutSidebarLayoutLinks = [
    { name: "Login", to: "/login", component: Auth },
    { name: "Register", to: "/register", component: Auth },
    { name: "Forgot Password", to: "/forgot-password", component: ForgotPassword },
  ];

  return (
    <div className="bg-bgPrimary text-textPrimary">
      <Router>
        <Routes>
          {sideBarLayoutLinks.map((link) =>
            link.redirectTo ? (
              <Route
                key={link.name}
                path={link.to}
                element={<Navigate to={link.redirectTo} />}
              />
            ) : (
              <Route
                key={link.name}
                path={link.to}
                element={
                  <SidebarHeaderLayout>
                    <link.component />
                  </SidebarHeaderLayout>
                }
              />
            )
          )}

          {withoutSidebarLayoutLinks.map((link) => (
            <Route key={link.name} path={link.to} element={<link.component />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
