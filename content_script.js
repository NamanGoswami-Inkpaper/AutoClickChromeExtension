let clicked = false;


function clickButton() {
    if (!clicked) {
        let elementToClick = document.getElementsByClassName("view-all docket_entries_view_togglable")[0]
        if (!elementToClick) {
            return;
        }
        elementToClick.click()
        clicked = true;
        clearInterval(clickButton)
    }
}
setInterval(clickButton, 10)


console.log(elementToClick)