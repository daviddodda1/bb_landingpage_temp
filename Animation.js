function setup() {
  if (selected_animation == animation_options[0]) {
    animation_01_setup();
  } else if (selected_animation == animation_options[1]) {
    animation_02_setup();
  } else if (selected_animation == animation_options[2]) {
    animation_03_setup();
  } else if (selected_animation == animation_options[3]) {
    animation_04_setup();
  }
}

function draw() {
  if (selected_animation == animation_options[0]) {
    animation_01_draw();
  } else if (selected_animation == animation_options[1]) {
    animation_02_draw();
  } else if (selected_animation == animation_options[2]) {
    animation_03_draw();
  } else if (selected_animation == animation_options[3]) {
    animation_04_draw();
  }
}
