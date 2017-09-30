(function() {
  console.log(image)

  const imageWidth = image.pixels[0].length;
  const imageHeight = image.pixels.length;

  const canvas = document.getElementById("pooPoo");
  const canvasWidth = imageWidth*image.pixelWidth;
  const canvasHeight = imageHeight*image.pixelHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");


  for (let row = 0; row < imageHeight; row++) {
    for (let column = 0; column < imageWidth; column++ ) {
      let colorNumber = image.pixels[row][column];
      ctx.fillStyle = image.CLUT[colorNumber];
      ctx.fillRect(column * image.pixelHeight, row * image.pixelHeight, image.pixelWidth, image.pixelHeight);
    }
  }





})();
