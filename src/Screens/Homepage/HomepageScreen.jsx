// Homepage

// Importing Helpers/Components/Styles
import FeaturedComponent from "../../Components/Featured/FeaturedComponent";
import NavbarComponent from "../../Components/Navbar/NavbarComponent";
import "./HomepageStyles.scss";

// Functional Component
const Homepage = () => {
  return (
    <div className="home">
      <NavbarComponent />
      <FeaturedComponent type="" />
    </div>
  );
};

// Default Export
export default Homepage;
