const textareaElement = document.getElementById("textarea");
const totalCounterElement = document.getElementById("total-counter")

textareaElement.addEventListener("keyup", () => {
    updateCounter();
});

const remainingCounterElement = document.getElementById("remaining-counter")



function updateCounter() {
    totalCounterElement.innerText = textareaElement.value.length

    remainingCounterElement.innerText = textareaElement.getAttribute("maxLength") - textareaElement.value.length;
}