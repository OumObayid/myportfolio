import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/routes"; 
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
  
    <div
      className="d-flex flex-column "
      style={{
        minHeight: "60vh",
        backgroundImage: isHome ? "url('/images/hero.jpg')" : "none",
        backgroundSize: "cover",
        backgroundPosition: "bottom center", // <-- Partie basse visible
        backgroundRepeat: "no-repeat",
      }}
    >
      <Header />

      <main className="flex-grow-1">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
