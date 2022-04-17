document.getElementById("code1").value = 
`const konami = '38384040373937396665';
let keysPress = '';

function keyDown(e) {
    keysPress = keysPress+e.keyCode;

    if (keysPress === konami) {
        alert("You're just one step from gaining the reward.\nJust find the place where the reward is.")
        console.info("ANNIVERSARY22")
    }
}
document.addEventListener("keydown", keyDown); //add an event listener on key down`
;
