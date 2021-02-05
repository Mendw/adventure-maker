inputs = document.getElementsByClassName("auth__input")
Array.prototype.forEach.call(inputs, input => {
    input.addEventListener("focus", event => {
        parentForm = event.currentTarget.closest("form")
        parentForm.classList.add("auth_focused")
    })

    input.addEventListener("blur", event => {
        parentForm = event.currentTarget.closest("form")
        parentForm.classList.remove("auth_focused")
    })
})