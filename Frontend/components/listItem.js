function listItem(text, identifier) {
        const li = document.createElement("li");

        document.querySelector(identifier).appendChild(li).textContent = text;
}