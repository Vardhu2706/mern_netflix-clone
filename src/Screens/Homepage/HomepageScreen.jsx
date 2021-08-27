// Homepage

// Importing Helpers/Components/Styles
import FeaturedComponent from "../../Components/Featured/FeaturedComponent";
import ListComponent from "../../Components/List/ListComponent";
import NavbarComponent from "../../Components/Navbar/NavbarComponent";
import "./HomepageStyles.scss";

// Functional Component
const Homepage = () => {
  return (
    <div className="home">
      <NavbarComponent />
      <FeaturedComponent type="" />
      <ListComponent />
      <ListComponent />
      <ListComponent />
      <ListComponent />
    </div>
  );
};

// Default Export
export default Homepage;
