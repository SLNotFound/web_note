function showPic(whichPic) {
    var picSource = whichPic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src", picSource);

    var text = whichPic.getAttribute("title");
    var description = document.getElementById("description");

    description.firstChild.nodeValue = text;
}

function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    alert(body_element.nodeType);
}

// window.onload = countBodyChildren;
