let colorInput = document.querySelector('#color');
let hexInput = document.querySelector('#hex');
let rgbInput = document.querySelector('#rgb');

colorInput.addEventListener('input', () => {
  let color = colorInput.value;
  hexInput.value = color;
  
  // Umwandlung von HEX in RGB
  let rgb = hexToRgb(color);
  rgbInput.value = rgb;
  
  // Textfarbe des h1-Elements ändern
  document.querySelector('h1').style.color = color;
});

function hexToRgb(hex) {
  // Entfernen des #-Zeichens, falls vorhanden
  hex = hex.replace('#', '');
  
  // Extrahieren der einzelnen RGB-Komponenten
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Zurückgeben des RGB-Werts als String
  return `rgb(${r}, ${g}, ${b})`;
}