(function() {

  const imageWidth = 10;
  const imageHeight = 10;

  const pixelWidth = 70;
  const pixelHeight = 70;

  const canvas = document.getElementById("pooPoo");
  const canvasWidth = imageWidth*pixelWidth;
  const canvasHeight = imageHeight*pixelHeight;
  canvas.width = canvasWidth;
  canvas.height = canvasHeight;
  const ctx = canvas.getContext("2d");

  const CLUT = [
    "#001f3f",
    "#0074D9",
    "#7FDBFF",
    "#39CCCC",
    "#3D9970",
    "#2ECC40",
    "#01FF70",
    "#FFDC00",
    "#FF851B",
    "#FF4136",
    "#85144b",
    "#F012BE",
    "#B10DC9",
    "#111111",
    "#AAAAAA",
    "#DDDDDD"
  ];

  const rows = new Array (imageHeight);
  for (let x = 0; x < rows.length; x++){
    rows[x] = new Array (imageWidth);
  }
  for (let x = 0; x < rows.length; x++){
    for (let y = 0; y < rows[x].length; y++){
      let color = Math.floor(Math.random() * CLUT.length);
      rows[x][y] = color;
    }
  }
  for (let x = 0; x < rows.length; x++){
    for (let y = 0; y < rows[x].length; y++){
      ctx.fillStyle = CLUT[rows[x][y]];
      ctx.fillRect(x*pixelWidth,y*pixelHeight,pixelWidth,pixelHeight);

    }
  }




})();
