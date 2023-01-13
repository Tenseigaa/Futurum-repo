const toggleButton = document.getElementById(`.toggle-button`);
const naviList = document.getElementById(`.navi-list`);

toggleButton.addEventListener(`click`, () => {
  naviList.classList.toggle(`.active`);
});

const productContainers = [...document.querySelectorAll(` .product-container`)];
const nxtBtn = [...document.querySelectorAll(`.nxt-btn`)];
const preBtn = [...document.querySelectorAll(`.pre-btn`)];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener(`click`, () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener(`click`, () => {
    item.scrollLeft -= containerWidth;
  });
});
