document.getElementById("code2").value = 

`// The main JavaScript (JS) file
// JavaScript (JS) Operations Below

// Settings
var theme = 'light'; //sets the variable to its default theme, can be used 'light' or 'dark'

// Default CSS styles
document.getElementById('body').style.textAlign = 'center'; //sets the text align to center, you can delete it if you want
if (theme === 'light') {
  document.getElementById('body').style.background = '#dfdfdf'; //sets the background color to white
  document.getElementById('body').style.color = '#141414'; //sets the text color to black
  
  //buttons settings
  document.getElementById('light').style.opacity = '0.6';
  document.getElementById('light').style.cursor = 'not-allowed';
  document.getElementById('light').disabled = true;
} else if (theme === 'dark') {
  document.getElementById('body').style.background = '#141414'; //sets the background color to dark
  document.getElementById('body').style.color = '#dfdfdf'; //sets the text color to white
 
  //buttons settings
  document.getElementById('dark').style.opacity = '0.6';
  document.getElementById('dark').style.cursor = 'not-allowed';
  document.getElementById('dark').disabled = true;
} else {
  alert('Oops, an error ocurred! Probably you just seted the theme variable to its bad value.');
}

// Now, the code
function changeToDark () {
  document.getElementById('body').style.background = '#141414'; //sets the background color to black
  document.getElementById('body').style.color = '#dfdfdf'; //sets the text color to white
  
  //buttons settings
  document.getElementById('light').style.opacity = '1.0';
  document.getElementById('light').style.cursor = 'pointer';
  document.getElementById('light').disabled = false;
  document.getElementById('dark').style.opacity = '0.6';
  document.getElementById('dark').style.cursor = 'not-allowed';
  document.getElementById('dark').disabled = true;
  
  console.log('[i] Changed the theme to dark.'); 
}
function changeToLight() {
  document.getElementById('body').style.background = '#dfdfdf'; //sets the background color to white
  document.getElementById('body').style.color = '#141414'; //sets the text color to black
  
  //buttons settings
  document.getElementById('dark').style.opacity = '1.0';
  document.getElementById('dark').style.cursor = 'pointer';
  document.getElementById('dark').disabled = false;
  document.getElementById('light').style.opacity = '0.6';
  document.getElementById('light').style.cursor = 'not-allowed';
  document.getElementById('light').disabled = true;
  
  console.log('[i] Changed the theme to light.');
}

// Copyright
// Vali © 2022`
;
