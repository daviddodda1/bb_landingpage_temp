var userIntraction = true;

function init() {
  // Clear forms here
  document.getElementById("Video_Display").value = "SHOW";
  document.getElementById("myVideo").style.display = "block";

  document.getElementById("User_Intraction_Input").checked = true;
  userIntraction = true;

  document.getElementById("MainContainer").backgroundColor =
    "rgba(0, 0, 0, 0.5)";

  update_animation();
}

window.onload = init;

function update_user_intraction() {
  userIntraction = !userIntraction;
  setup();
}

function update_video_state() {
  const video_state = document.getElementById("Video_Display").value;
  if (video_state == "SHOW") {
    document.getElementById("myVideo").style.display = "block";
    document.getElementById("MainCanvas").style.mixBlendMode = "overlay";
    document.getElementById("MainCanvas").style.opacity = 1;

    document.getElementById("MainContainer").backgroundColor = rgba(
      0,
      0,
      0,
      0.5
    );
    document.getElementById("MainContainer").style.mixBlendMode = "none";

    // document.getElementById("Video_Display").innerHTML = "Video Off";
  } else {
    document.getElementById("myVideo").style.display = "none";
    document.getElementById("MainCanvas").style.mixBlendMode = "none";
    document.getElementById("MainCanvas").style.opacity = 1;
    document.getElementById("MainContainer").backgroundColor = rgba(
      255,
      255,
      255,
      1
    );

    // document.getElementById("myVideo").style[mix - blend - mode] = "none";
  }
}

var selected_animation = "Animation_01";

var animation_options = [
  "Animation_01",
  "Animation_02",
  "Animation_03",
  "Animation_04",
];

function update_animation() {
  selected_animation = document.getElementById("Animation_Type").value;
  setup();
}

// on page resize run this function
function windowResized() {
  setup();
}

// add a resize listener
window.addEventListener("resize", windowResized);

function close_contact_form() {
  // add a noDisplay class to the contact form
  document.getElementById("ContactUsForm_Container").style.opacity = 0;
  document.getElementById("ContactUsForm_Container").style.transform =
    "translateY(20%)";

  setTimeout(() => {
    document
      .getElementById("ContactUsForm_Container")
      .classList.add("noDisplay");
    document.getElementById("ContactUsForm_Container").style.opacity = 1;
    document.getElementById("ContactUsForm_Container").style.transform =
      "translateY(-20%)";
  }, 200);
}

function open_contact_form() {
  document.getElementById("ContactUsForm_Container").style.opacity = 0;
  document.getElementById("ContactUsForm_Container").style.transform =
    "translateY(-20)";
  // remove the noDisplay class from the contact form
  document
    .getElementById("ContactUsForm_Container")
    .classList.remove("noDisplay");
  setTimeout(() => {
    document.getElementById("ContactUsForm_Container").style.opacity = 1;
    document.getElementById("ContactUsForm_Container").style.transform =
      "translateY(0)";
  }, 100);
}
