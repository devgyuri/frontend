export default function MapElPage(): JSX.Element {
  ["a", "b", "c"].forEach((el, index) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });
  
  ["a", "b", "c"].forEach((qqq, ppp) => {
    console.log("el: ", qqq);
    console.log("index: ", ppp);
  });
  
  ["a", "b", "c"].forEach(function (qqq, ppp) {
    console.log("el: ", qqq);
    console.log("index: ", ppp);
  });
  
  ["a", "b", "c"].forEach((index, el) => {
    console.log("el: ", el);
    console.log("index: ", index);
  });

  return (
    <></>
  );
}