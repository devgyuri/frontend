function useState(initialValue) {
  let state = initialValue;

  const setState = (value) => {
    state = value;
    console.log(`${initialValue} converted to ${value}!`);
    console.log("rerendering!");
  };

  return [state, setState];
}

const [count, setCount] = useState(0);
const result = useState(0);

console.log(count);
setCount(5);

console.log(result[0]);
result[1](7);
