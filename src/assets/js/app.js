const pos = {x: 0, y: 0};

const saveCursorPosition = function (x, y) {
  pos.x = (x).toFixed(5);
  pos.y = (y).toFixed(5);
  document.documentElement.style.setProperty('--x', pos.x + 'px');
  document.documentElement.style.setProperty('--y', pos.y + 'px');

  const img = document.getElementById("mainImage");
  const topPos = img.offsetTop;
  const leftPos = img.offsetLeft;
  const width = img.offsetWidth;
  const height = img.height;
  const yCenter = topPos + height / 2;
  const xCenter = leftPos + width / 2;
  document.documentElement.style.setProperty('--xCenter', xCenter + 'px');
  document.documentElement.style.setProperty('--yCenter', yCenter + 'px');
}

document.addEventListener('mousemove', e => {
  saveCursorPosition(e.clientX, e.clientY);
})
