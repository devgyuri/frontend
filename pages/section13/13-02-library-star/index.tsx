import React, { useState } from "react";
import { Rate } from "antd";

export default function App(): JSX.Element {
  const [value, setValue] = useState(3);

  const onChangeStar = (value: number): void => {
    setValue(value);
  };

  //   const onChangeStar2 = (value: number): void => setValue(value);

  return (
    <span>
      <Rate onChange={onChangeStar} value={value} />
      <Rate onChange={setValue} value={value} />
    </span>
  );
}
