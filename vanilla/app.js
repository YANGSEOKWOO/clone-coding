const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClicked(){
    h1.style.color = "blue";
}

function handleTitlemouseon(){
    h1.innerText = "mouse is on";
}
function handleTitlemouseoff(){
    h1.innerText = "mouse is off";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("복사가 금지되어 있습니다.");
}
function handleWindowOffline(){
    alert("SOS no wifi");
}
function handleWindowOnline(){
    alert("wifi is on");
}
h1.onclick = handleTitleClicked;
h1.onmouseenter = handleTitlemouseon;

h1.addEventListener("mouseleave", handleTitlemouseoff);
console.dir(h1);

window.addEventListener("resize", handleWindowResize);

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline",handleWindowOffline);

window.addEventListener("online", handleWindowOnline);