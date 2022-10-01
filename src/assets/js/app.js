const pos = {x: 0, y: 0};

const saveCursorPosition = function (x, y, e) {
  pos.x = (x).toFixed(2);
  pos.y = (y).toFixed(2);

  const img = document.getElementById("mainImage");
  if (img) {
    const topPos = img.offsetTop;
    const leftPos = img.offsetLeft;
    const width = img.offsetWidth;
    const height = img.offsetHeight;
    const yCenter = topPos + height / 2;
    const xCenter = leftPos + width / 2;
    if ((e.pageY > topPos && e.pageY < (topPos + height) && e.pageX > leftPos && e.pageX < (leftPos + width))) {
      document.documentElement.style.setProperty('--x', pos.x + 'px');
      document.documentElement.style.setProperty('--y', pos.y + 'px');
      document.documentElement.style.setProperty('--xCenter', xCenter - (e.pageX - pos.x) + 'px');
      document.documentElement.style.setProperty('--yCenter', yCenter - (e.pageY - pos.y) + 'px');
    }
  }
}

document.addEventListener('mousemove', e => {
  saveCursorPosition(e.clientX, e.clientY, e);
})

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor = 'fill-white', darkColor = 'fill-black') {
  var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
    darkColor : lightColor;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const el = document.getElementsByTagName('body')[0]
el.setAttribute('data-bs-target', '#scrollspymenu')
el.setAttribute('data-bs-spy', '#scroll')
