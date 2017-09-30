(function() {
  console.log(image)

  const imageWidth = image.pixels[0].length;
  const imageHeight = image.pixels.length;

  const pixelWidth = 20;
  const pixelHeight = 20;

  const canvas = document.getElementById("pooPoo");
  const canvasWidth = imageWidth*pixelWidth;
  const canvasHeight = imageHeight*pixelHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");

  const CLUT = [
    "#000000",
    "#0000AA",
    "#00AA00",
    "#00AAAA",
    "#AA0000",
    "#AA00AA",
    "#AA5500",
    "#AAAAAA",
    "#555555",
    "#5555FF",
    "#55FF55",
    "#55FFFF",
    "#FF5555",
    "#FF55FF",
    "#FFFF55",
    "#FFFFFF"
  ];

  for (let row = 0; row < imageHeight; row++) {
    for (let column = 0; column < imageWidth; column++ ) {
      let colorNumber = image.pixels[row][column];
      ctx.fillStyle = CLUT[colorNumber];
      ctx.fillRect(column * pixelWidth, row * pixelHeight, pixelWidth, pixelHeight);
    }
  }





})();
