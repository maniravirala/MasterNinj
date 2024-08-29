import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

import { Toaster } from "sonner";
import { useDarkMode } from "@/contexts/DarkModeContext";
import { useAuth } from "@/contexts/AuthContext";

const App = () => {
  const { theme } = useDarkMode();
  const authentication = useAuth();

  const router = createRouter({
    routeTree,
    context: { authentication },
  });

  return (
    <>
      <RouterProvider router={router} context={{ authentication }} location={window.location}>
        <div>
          <h1>App</h1>
        </div>
      </RouterProvider>
      <Toaster position="top-center" richColors theme={theme} />
    </>
  );
};

export default App;

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import "./App.css";
// import SidebarHeaderLayout from "./layout/SidebarHeaderLayout";
// import Dashboard from "./pages/Dashboard";
// import ResumeBuilder from "./pages/Resume/ResumeBuilder";
// import Calculator from "./pages/Calculator/Calculator";
// import CalculatorCategory from "./pages/Calculator/CalculatorCategory";
// import CalculatorDetail from "./pages/Calculator/CalculatorDetail";
// import StudyResources from "./pages/Library/StudyResources";
// import Auth from "./pages/Auth/Auth";
// import ForgotPassword from "./pages/Auth/ForgotPassword";
// import Test from "./pages/Test/Test";
// import ProjectDetails from "./pages/Project/ProjectDetails";
// import ProjectList from "./pages/Project/ProjectList";
// import NotFound from "./pages/NotFound";
// import { useDarkMode } from "./contexts/DarkModeContext";
// import SskCategory from "./pages/SSK/SskCategory";
// import SskItemDetails from "./pages/SSK/SskItemDetails";
// import { Toaster } from "sonner";
// import PrivateRoute from "./layout/PrivateRoute";

// const App = () => {
//   const { theme } = useDarkMode();
//   const sideBarLayoutLinks = [
//     {
//       name: "Dashboard",
//       to: "/",
//       component: Dashboard,
//       props: { title: "Dashboard", footer: true },
//     },
//     {
//       name: "Resume Builder",
//       to: "/resume-builder",
//       component: ResumeBuilder,
//       props: { title: "Resume Builder" },
//     },
//     {
//       name: "Project List",
//       to: "/projects",
//       component: ProjectList,
//       props: { title: "Project Details" },
//     },
//     {
//       name: "Project Details",
//       to: "/projects/:id",
//       component: ProjectDetails,
//       props: { title: "Project Details" },
//     },
//     {
//       name: "Calculator",
//       to: "/calculators",
//       component: Calculator,
//       props: { title: "Calculators" },
//     },
//     {
//       name: "Calculator Category",
//       to: "/calculators/:category",
//       component: CalculatorCategory,
//       props: { title: "Calculators" },
//     },
//     {
//       name: "Calculator Detail",
//       to: "/calculators/:category/:calculator",
//       component: CalculatorDetail,
//       props: { title: "Calculators" },
//     },
//     // { name: "Study Resources", to: "/study-resources", component: StudyResources },
//     {
//       name: "Study Resources",
//       to: "/study-resources",
//       redirectTo: "/study-resources/all",
//       props: { title: "Study Resources" },
//     },
//     {
//       name: "Resources",
//       to: "/study-resources/:resourceId",
//       component: StudyResources,
//       props: { title: "Study Resources" },
//     },
//     { name: "Test", to: "/test", component: Test, props: { title: "Test" } },
//     {
//       name: "Student Starter Kit",
//       to: "/ssk/:category",
//       component: SskCategory,
//       props: { title: "Student Starter Kit" },
//     },
//     {
//       name: "Student Starter Kit",
//       to: "/ssk/:category/:id",
//       component: SskItemDetails,
//       props: { title: "Student Starter Kit" },
//     },
//   ];

//   const withoutSidebarLayoutLinks = [
//     { name: "Login", to: "/login", component: Auth },
//     { name: "Register", to: "/register", component: Auth },
//     {
//       name: "Forgot Password",
//       to: "/forgot-password",
//       component: ForgotPassword,
//     },
//   ];

//   return (
//     <div className="bg-bgPrimary text-textPrimary">
//       <Router>
//         <Routes>
//           {sideBarLayoutLinks.map((link) =>
//             link.redirectTo ? (
//               <Route
//                 key={link.name}
//                 path={link.to}
//                 element={<Navigate to={link.redirectTo} />}
//               />
//             ) : (
//               // <Route
//               //   key={link.name}
//               //   path={link.to}
//               //   element={
//               //     <SidebarHeaderLayout {...link.props}>
//               //       <link.component />
//               //     </SidebarHeaderLayout>
//               //   }
//               // />
//               <Route
//                 key={link.name}
//                 path={link.to}
//                 element={
//                   <PrivateRoute>
//                     <SidebarHeaderLayout {...link.props}>
//                       <link.component />
//                     </SidebarHeaderLayout>
//                   </PrivateRoute>
//                 }
//               />
//             ),
//           )}
//           {withoutSidebarLayoutLinks.map((link) => (
//             <Route
//               key={link.name}
//               path={link.to}
//               element={<link.component />}
//             />
//           ))}
//           {/* <Route path="*" element={<Navigate to="/404" />} /> */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Router>
//       <Toaster position="top-center" richColors theme={theme} />
//     </div>
//   );
// };

// export default App;
