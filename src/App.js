// App.js

// Importing Styles
import "./App.scss";

// Importing Components
import Homepage from "./Screens/Homepage/HomepageScreen.jsx";
import WatchPage from "./Screens/WatchPage/WatchPage";
import RegisterPage from "./Screens/Register/RegisterPage";
import LoginPage from "./Screens/Homepage/Login/LoginPage";

// Functional Component
function App() {
  return (
    <div className="App">
      <LoginPage />
      <RegisterPage />
      {/* <Homepage /> */}
      {/* <WatchPage /> */}
    </div>
  );
}

// Default Export
export default App;

// 1:32
