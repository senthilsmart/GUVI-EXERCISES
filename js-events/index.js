const handleClick = (e) => {
  // console.log("Button Clicked");
  // const inputText = document.getElementById("name");
  // console.log(inputText.value);
  // alert("Hello" + (inputText.value || "World!"));
  // console.log((inputText.value = null));

  console.log("Button clicked!!");
  console.log(e.target);
};

const eventButton = document.getElementById("eventButton");

eventButton.addEventListener("click", handleClick);

const helloBtn = document.getElementById("card-view");

const onMouseOver = (e) => {
  console.log("On Mouse over event triggered");
  console.log(e.target);
  e.target.style.background = "blue";
};

const onMouseLeave = (e) => {
  console.log("On Mouse leave event triggered");
  e.target.style.background = "red";
};

helloBtn.addEventListener("mouseover", onMouseOver);

helloBtn.addEventListener("mouseleave", onMouseLeave);
