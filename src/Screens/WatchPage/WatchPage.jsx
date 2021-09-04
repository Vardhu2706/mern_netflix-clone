// Watch Page Screen

// Importing Helpers
import { ArrowBackOutlined } from "@material-ui/icons";
import "./WatchStyles.scss";

// Functional Component
const WatchPage = () => {
  return (
    <div className="watch">

      {/* Back Arrow */}
      <div className="back">
        <ArrowBackOutlined />
        Back
      </div>
      
      {/* Video */}
      <video
        className="video"
        autoPlay
        progress="true"
        controls
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      />
    </div>
  );
};

// Default Export
export default WatchPage;
