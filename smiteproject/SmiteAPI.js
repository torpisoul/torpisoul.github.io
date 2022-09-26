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
/* end search filter - god page */

//Show all gods by default
window.onload = function() { document.getElementById("allGods").click()};