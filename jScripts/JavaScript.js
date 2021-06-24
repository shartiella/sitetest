function openTab(evt, chosenTab) {
    var i, tabs, tablinks;
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablink");

    for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" checked", "");
    }
    document.getElementById(chosenTab).style.display = "block";
    evt.currentTarget.className += " checked";
}