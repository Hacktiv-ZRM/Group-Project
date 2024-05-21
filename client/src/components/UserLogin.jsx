import _ from "lodash";
import { useState } from "react";

export default function UserLogin() {
  const [user, setAUser] = useState("");

  function handleSetUser() {
    if (!user) return;
    localStorage.setItem("user", user);
    setAUser(user);
    localStorage.setItem(
      "avatar",
      `https://picsum.photos/id${_.random(1, 1000)}/200/300`
    );
  }

  return (
    <div>
      <div
        className="container"
        style={{
          backgroundImage: 'url("bg-image.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: 40,
          borderRadius: 10,
          boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ color: "#fff", textAlign: "center", marginBottom: 30 }}>
          Welcome Back!
        </h1>
        <form
          onSubmit={handleSetUser}
          method="post"
          style={{
            backgroundColor: "#fff",
            padding: 30,
            borderRadius: 8,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <label
            htmlFor="username"
            style={{
              display: "block",
              marginBottom: 10,
              fontWeight: "bold",
              color: "#666",
            }}
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            required=""
            style={{
              width: "100%",
              padding: 12,
              border: "1px solid #ccc",
              borderRadius: 4,
              boxSizing: "border-box",
            }}
          />
          <button
            onChange={(e => setAUser(e.target.value))}
            value={user}
            type="submit"
            style={{
              display: "block",
              width: "100%",
              padding: "12px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: 4,
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
