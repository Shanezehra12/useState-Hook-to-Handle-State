import React, { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          setName(!name);
        }}
      >
        Change
      </button>
      {name ? <> Shane Zehra </> : " "}
    </div>
  );
};

export default Home;
