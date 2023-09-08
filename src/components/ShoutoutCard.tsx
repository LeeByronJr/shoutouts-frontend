import { Link } from "react-router-dom";
import Shoutout from "../models/Shoutout";
import "./ShoutoutCard.css";

interface Props {
  shoutout: Shoutout;
  deleteShoutoutHandler: (id: string) => void;
}

const ShoutoutCard = ({ shoutout, deleteShoutoutHandler }: Props) => {
  return (
    <li className="ShoutoutCard">
      <p>
        Shoutout to
        <Link to={`/user/${encodeURIComponent(shoutout.to)}`}>
          {shoutout.to}
        </Link>
      </p>
      <p>
        - from{" "}
        <Link to={`/user/${encodeURIComponent(shoutout.from)}`}>
          {shoutout.from}
        </Link>
      </p>
      <p>{shoutout.text}</p>
      <button onClick={() => deleteShoutoutHandler(shoutout._id!)}>X</button>
    </li>
  );
};

export default ShoutoutCard;
