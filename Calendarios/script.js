const textBox = document.querySelector(".text-box");
const toolButtons = document.querySelectorAll(".tool-button");

if (textBox) {
  textBox.focus();
}

toolButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const command = button.dataset.command;

    if (!command) {
      return;
    }

    document.execCommand(command, false, null);
    textBox.focus();
  });
});
