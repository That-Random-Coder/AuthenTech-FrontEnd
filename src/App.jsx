  import React, { useContext } from "react";
  import "./App.scss";
  import AppRoutes from "./routes/AppRoutes";
  import { AuthContext } from "./context/AuthContext";
  // import QrScrollReveal from "./components/QrScrollReveal";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";

  const App = () => {
    const { isAuthenticated } = useContext(AuthContext);

    return (
      <div className="app-shell relative">
        {/* QR background */}
        {/* <QrScrollReveal /> */}

        {/* Foreground content */}
            {isAuthenticated && <Sidebar/>}
        <main className="main relative z-10">
          { isAuthenticated && <Header />}
          <div className="content">
            <AppRoutes />
          </div>
        </main>
      </div>
    );
  };

  export default App;
