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

/* end search filter - god page */