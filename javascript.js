const messages = ["I Love Eci", "Eci is Awesome!", "Love You Eci!"];
const loveMessage = document.getElementById("loveMessage");
const messageContainer = document.getElementById("messageContainer");

let index = 0;

function showMessage() {
  loveMessage.textContent = messages[index];
  loveMessage.style.opacity = 1;
  loveMessage.style.transform = "translateY(0)";

  setTimeout(() => {
    loveMessage.style.opacity = 0;
    loveMessage.style.transform = "translateY(-20px)";
  }, 2000);

  index = (index + 1) % messages.length; // Loop through messages
}

setInterval(showMessage, 3000); // Change message every 3 seconds
showMessage(); // Show the first message immediately
