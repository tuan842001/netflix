import { ArrowBackOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./watch.css";

export default function Watch() {
  return (
    <div className="watch">
      <Link to="/home">
        <div className="back">
          <ArrowBackOutlined />
          Home
        </div>
      </Link>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="../../../Netflix X Refund gaming.mp4"
      />
    </div>
  );
}
