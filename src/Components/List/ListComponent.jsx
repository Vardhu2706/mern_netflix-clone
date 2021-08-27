// List Component

// Importing Helpers/Components/Styles
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItemComponent from "../ListItem/ListItemComponent";
import "./ListStyles.scss";
import { useRef, useState } from "react";

// Functional Component
const ListComponent = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  // Use Ref
  const listRef = useRef();

  // Handle Click
  const handleClick = (direction) => {
    setIsMoved(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setSlideNumber(slideNumber - 1);
    } else if (direction === "right" && slideNumber < 5) {
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setSlideNumber(slideNumber + 1);
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue watching</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
          <ListItemComponent />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

// Default Export
export default ListComponent;
