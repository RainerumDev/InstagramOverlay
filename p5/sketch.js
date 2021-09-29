function setup() {
  createCanvas(1080, 1080);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unhighlight);
  dropzone.drop(getFile)
}

function draw() {
  //background(220);
}

function highlight() {
  dropzone.style('background-color','#ccc');
}
function unhighlight() {
  dropzone.style('background-color','#fff');
}
function loading() {
  unhighlight();
  select('body').style('cursor','wait');
}
function getFile(file) {
  select('body').style('cursor','auto');
  var img = createImg(file.data, file.name);
  img.hide();
  image(img, 0, 0, width, height)

  console.log(width)
}