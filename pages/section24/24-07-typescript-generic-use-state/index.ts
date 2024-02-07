export function useState<S>(initialValue: S): [S, (value: S) => void] {
  let state = initialValue;

  const setState = (value: S): void => {
    state = value;
    console.log(`${initialValue} converted to ${value}!`);
    console.log("rerendering!");
  };

  return [state, setState];
}

const [count] = useState(10);
console.log(count);
