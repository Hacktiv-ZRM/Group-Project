import { useState } from "react";

export default function InputText({ addMessage }) {
  const [message, setMessage] = useState("");

  function addMessage() {
    addMessage({
      message,
    });
    setMessage("");
  }

  return (
    <>
      <div style={style.textContainer}>
        <textarea
          style={style.textare}
          rows={6}
          placeholder="Write something..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button onClick={() => addMessage()} style={style.button}></button>
      </div>
    </>
  );
}
