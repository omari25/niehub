
let currentTab = "tab1";

function showTab(evt, tabName) {
    if (evt) {
        evt.preventDefault();
    }

    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    document.getElementById(tabName).classList.add("active");

    let tabs = document.getElementsByClassName("tab");
    for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
    }

    if (evt) {
        evt.currentTarget.classList.add("active");
    }

    currentTab = tabName;
}
showTab(null, currentTab);
document.getElementById("defaultOpen").click();