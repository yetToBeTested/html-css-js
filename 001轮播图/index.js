const poker_eles = [...document.getElementsByClassName("poker")];

const transform_dates = [
  "rotate(-10deg)",
  "rotate(-6deg) translate(35%, -12%)",
  "rotate(-2deg) translate(65%, -19%)",
  "rotate(2deg) translate(95%, -26%)",
  "rotate(6deg) translate(125%, -23%)",
];

poker_eles.forEach((ele, index) => {
  ele.nums = index;
});

const move = () => {
  poker_eles.forEach((ele) => {
    let nums = ele.nums;
    if (nums + 1 >= poker_eles.length) {
      nums = 0;
      ele.style.transition = "";
      //   ele.style.transition = "transform 0.3s ease";
    } else {
      nums += 1;
      ele.style.transition = "transform 0.3s ease";
    }
    // nums += 1;
    // ele.style.transition = "transform 0.3s ease";
    ele.style.zIndex = nums;
    ele.style.transform = transform_dates[nums];
    ele.nums = nums;
  });
};
