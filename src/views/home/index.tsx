import React, { useState } from "react";
import { Button } from "antd";

const Home: React.FC = () => {
  const [count, setCount] = useState(new Date().toLocaleTimeString());
  setTimeout(() => {
    setCount(new Date().toLocaleTimeString())
  }, 1000)
  return (
    <div className="Home">
      <div>{new Date().toLocaleTimeString()}</div>
      <Button type="primary" danger onClick={() => setCount((count) => count + 1)}>
        111
      </Button>
      {count}
    </div>
  );
}

export default Home;
