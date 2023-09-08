import { FormEvent, useEffect, useState } from "react";
import "./ShoutoutForm.css";
import Shoutout from "../models/Shoutout";

interface Props {
  addShoutoutHandler: (shoutout: Shoutout) => void;
  name?: string;
}

const ShoutoutForm = ({ addShoutoutHandler, name }: Props) => {
  const [to, setTo] = useState(name ? name : "");
  const [from, setFrom] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    // add a shoutout to the database and update state;
    addShoutoutHandler({ to, from, text });
    setTo("");
    setFrom("");
    setText("");
  };

  useEffect(() => {
    setTo(name || "");
  }, [name]);

  return (
    <form className="ShoutoutForm" onSubmit={(e) => handleSubmit(e)}>
      <label htmlFor="to">To</label>
      <input
        type="text"
        name="to"
        id="to"
        value={to}
        onChange={(e) => setTo(e.target.value)}
      />
      <label htmlFor="from">From</label>
      <input
        type="text"
        name="from"
        id="from"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />
      <label htmlFor="text">Text</label>
      <textarea
        name="text"
        id="text"
        cols={30}
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button>Add Shoutout</button>
    </form>
  );
};

export default ShoutoutForm;
