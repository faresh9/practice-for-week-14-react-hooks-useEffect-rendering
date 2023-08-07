import { useEffect } from "react";

const Main = () => {
  useEffect(() => {
    console.log("UseEffect1 Ran");
  });

  return (
    <div>
      {console.log("rendered or re-rendered")}
      <h1>Main Component</h1>
    </div>
  );
};

export default Main;
