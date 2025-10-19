console.log('frontend code running');
console.log(window.location.href);
console.log(window.location.host);
console.log(window.location.pathname);

const titolo = document.getElementById("title");
const button = document.getElementById("button");

if (button) {
    button.onclick = () => {
        titolo.innerText = "Titolo Cambiato da typescript";
    }
}
