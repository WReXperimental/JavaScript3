import "../css/style.scss";
import { cardGroup } from "./card";
import { buttonGroup } from "./button";

const appDom = document.querySelector("#app");
// console.log(appDom);

// const appDom1=document.getElementById('app')
// console.log(appDom1);
// 可以用queryselector 或者getelementById来拿到html里的element，在这里用什么方法都可以

appDom.append(cardGroup);
cardGroup.appendChild(buttonGroup);

// left
// const leftDom=document.getElementsByClassName('left')
// console.log(leftDom[0]);

const leftDom = document.querySelector(".left");
const rightDom = document.querySelector(".right");

// console.log(cardList);

// leftDom.addEventListener('click', ()=>{
//   console.log('left2');
// })
// 如果同一个dom节点有两个eventlistener，会执行两个操作，而不是第二个覆盖第一个
leftDom.addEventListener("click", () => {
  console.log("left");
  const cardList = cardGroup.querySelectorAll(".card");
  cardGroup.prepend(cardList[cardList.length - 1]);
});

rightDom.addEventListener("click", () => {
  console.log("right");
  const cardList = cardGroup.querySelectorAll(".card");
  // cardGroup.append(cardList[0])
  // 这句点多了会有bug
  cardGroup.insertBefore(cardList[0], buttonGroup)
});
