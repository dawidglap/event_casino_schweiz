// App.jsx
import { BrowserRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import AnimatedRoutes from "./components/AnimatedRoutes";
import Layout from "./components/Layout";
import { HelmetProvider } from "react-helmet-async";

const App = () => (
  <HelmetProvider>
    <Router>
      <ScrollToTop />
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </Router>
  </HelmetProvider>
);

export default App;
