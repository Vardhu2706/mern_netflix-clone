// Homepage

// Importing Helpers/Components/Styles
import NavbarComponent from "../Components/Navbar/NavbarComponent";
import "./HomepageStyles.scss";

// Functional Component
const Homepage = () => {
  return (
    <div className="home">
      <NavbarComponent />
    </div>
  );
};

// Default Export
export default Homepage;
