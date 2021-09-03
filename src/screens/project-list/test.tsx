import { useEffect, useState } from "react";
import { Button } from "antd";
import { useMount } from "../../utils";

export const Test = () => {
  const [num, setNum] = useState(0);
  const add = () => setNum(num + 1);
  useMount(() => {
    setInterval(() => {
      console.log("num in setInterva:", num);
    }, 1000);
  });
  useEffect(() => {
    return () => {
      console.log(num);
    };
  }, []);

  return (
    <div>
      <Button onClick={add}>add</Button>
      <p>number: {num}</p>
    </div>
  );
};
