function aaa() {
  const apple = 10;

  return function () {
    const banana = 20;
    console.log(banana);
    console.log(apple);
  };
}

aaa()();

// ========================

function aaa(apple) {
  return function (banana) {
    console.log(banana);
    console.log(apple);
  };
}

aaa(100)(10);

// ========================

const bbb = (apple) => (banana) => {
  console.log(banana);
  console.log(apple);
};

bbb(60)(50);

// ========================

const ccc = (apple) => (banana) => (tomato) => (orange) => {
  console.log(orange);
  console.log(tomato);
  console.log(banana);
  console.log(apple);
};

ccc(10)(20)(30)(40);
