import React, {useState} from "react";

const Button = () => {
  const [num, setNum] = useState(0);
  return <button onClick={() => setNum(num + 1)} >App 2 ButtonHooks: Clicked {num}</button>
};

export default Button;
