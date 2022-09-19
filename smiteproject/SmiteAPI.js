function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // Twinkling Night Sky by Sharna

class StarrySky extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      num: 60,
      vw: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
      vh: Math.max(document.documentElement.clientHeight, window.innerHeight || 0) });_defineProperty(this, "starryNight",

    () => {
      anime({
        targets: ["#sky .star"],
        opacity: [
        {
          duration: 700,
          value: "0" },

        {
          duration: 700,
          value: "1" }],


        easing: "linear",
        loop: true,
        delay: (el, i) => 50 * i });

    });_defineProperty(this, "shootingStars",
    () => {
      anime({
        targets: ["#shootingstars .wish"],
        easing: "linear",
        loop: true,
        delay: (el, i) => 1000 * i,
        opacity: [
        {
          duration: 700,
          value: "1" }],


        width: [
        {
          value: "150px" },

        {
          value: "0px" }],


        translateX: 350 });

    });_defineProperty(this, "randomRadius",
    () => {
      return Math.random() * 0.7 + 0.6;
    });_defineProperty(this, "getRandomX",
    () => {
      return Math.floor(Math.random() * Math.floor(this.state.vw)).toString();
    });_defineProperty(this, "getRandomY",
    () => {
      return Math.floor(Math.random() * Math.floor(this.state.vh)).toString();
    });}
  componentDidMount() {
    this.starryNight();
    this.shootingStars();
  }
  render() {
    const { num } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { id: "App" }, /*#__PURE__*/
      React.createElement("svg", { id: "sky" },
      [...Array(num)].map((x, y) => /*#__PURE__*/
      React.createElement("circle", {
        cx: this.getRandomX(),
        cy: this.getRandomY(),
        r: this.randomRadius(),
        stroke: "none",
        strokeWidth: "0",
        fill: "white",
        key: y,
        className: "star" }))), /*#__PURE__*/



      React.createElement("div", { id: "shootingstars" },
      [...Array(60)].map((x, y) => /*#__PURE__*/
      React.createElement("div", {
        key: y,
        className: "wish",
        style: {
          left: `${this.getRandomY()}px`,
          top: `${this.getRandomX()}px` } })))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(StarrySky, null), document.getElementById("root"));

//end of stary sky background//

/* search filter - god page */
filterSelection("all")
function filterSelection(c) {
  var x, i;
  // attempting to integrate god name filter
  x = document.getElementsByClassName("god-class");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

  //filterSelection("all")
function godNameFilter(c) {
  var input, filter, ul, li, a, i, x, txtValue;
  input = document.getElementById('godFilterInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("god-list");
  li = ul.querySelectorAll("div.god-class > div.god-card");
  x = document.getElementsByClassName("god-class");

  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
    a = li[i].getElementsByTagName("h1")[0];
    txtValue = a.textContent || a.innerText;
    w3RemoveClass(x[i], "show");
    if (txtValue.toUpperCase().indexOf(filter) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("godFilterButtons");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}


// search God by name
//function searchGodName() {
  // Declare variables
  // var input, filter, ul, li, a, i, txtValue;
  // input = document.getElementById('godFilterInput');
  // filter = input.value.toUpperCase();
  // ul = document.getElementById("god-list");
  // x = document.getElementsByClassName("god-class");
  // li = ul.querySelectorAll("div.god-class > div.god-card");

  // Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("h1")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
/* end search filter - god page */
