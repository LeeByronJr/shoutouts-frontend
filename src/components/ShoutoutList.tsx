import Shoutout from "../models/Shoutout";
import ShoutoutCard from "./ShoutoutCard";
import "./ShoutoutList.css";

interface Props {
  shoutouts: Shoutout[];
  deleteShoutoutHandler: (id: string) => void;
}

const ShoutoutList = ({ shoutouts, deleteShoutoutHandler }: Props) => {
  return (
    <ul className="ShoutoutList">
      {shoutouts.map((item) => (
        <ShoutoutCard
          shoutout={item}
          key={item._id}
          deleteShoutoutHandler={deleteShoutoutHandler}
        />
      ))}
    </ul>
  );
};

export default ShoutoutList;
