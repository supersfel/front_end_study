//index.js
import "normalize.css";
import styles from "./index.css";
import $ from "jquery";
import slackImg from "./assets/slack.jpg";

function component() {
  const element = document.createElement("div");

  const imgElement = document.createElement("img");
  imgElement.src = slackImg;
  imgElement.classList = styles.slackImg;
  element.appendChild(imgElement);

  console.log(slackImg);

  console.log(styles);
  element.classList = styles.helloWebpack;

  return element;
}

document.body.appendChild(component(1));
console.log($(`.${styles.helloWebpack}`).length);
console.log(`IS_PRODUCTION : ${IS_PRODUCTION}`);
