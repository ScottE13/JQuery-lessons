const cells = document.getElementsByTagName('td');

let mycells = Array.from(cells);

mycells.forEach( function(i) {
  if (i.textContent === "Andrew") {
      i.textContent = "Andrew @ 42";
  } else if (i.textContent === "Megan") {
    i.textContent = "Megan @ 6";
  } else if (i.textContent === "Scott") {
    i.textContent = "Scott @ 27";
  } else if (i.textContent === "Shannon") {
    i.textContent = "Shannon @ 26";
  } else if (i.textContent === "Bob") {
    i.textContent = "Bob THE BUILDER!";
  } else if (i.textContent === "Warren") {
    i.textContent = "Warren WHO";
  } else if (i.textContent === "David") {
    i.textContent = "Dai @ 22";
  } else if (i.textContent === "Steph") {
    i.textContent = "Steph 25";
  } else if (i.textContent === "James") {
    i.textContent = "James @ 35";
  };
});


if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
}