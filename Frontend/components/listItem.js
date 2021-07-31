function listItem(text) {
        const li = document.createElement("li");

        document.querySelector("#bullet-list").appendChild(li).textContent = text;
}