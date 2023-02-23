import { useEffect } from "react";

import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";
import Home from "layouts/pages/home";
import Servicios from "layouts/pages/servicios";
import Somos from "layouts/pages/somos";
import WhatsApp from "components/Whatsapp/index";

// Material Kit 2 React routes
import routes from "routes";

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <WhatsApp />
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="/inicio" element={<Presentation />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/quienes-somos" element={<Somos />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}
