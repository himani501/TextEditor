function convertToBold() {
    document.getElementById("textarea1").style.fontWeight = "bold";
}

function convertToItalic() {
    document.getElementById("textarea1").style.fontStyle = "italic";
}
function leftAlignTheText() {
    document.getElementById("textarea1").style.textAlign = "left";
}
function centerAlignTheText() {
    document.getElementById("textarea1").style.textAlign = "center";
}
function rightAlignTheText() {
    document.getElementById("textarea1").style.textAlign = "right";
}
function convertToUpperCase() {
    document.getElementById("textarea1").style.textTransform = "uppercase";
}

function convertToLowerCase() {
    document.getElementById("textarea1").style.textTransform = "lowercase";
}
function capitalizeText() {
    document.getElementById("textarea1").style.textTransform = "capitalize";
}
function clearText() {
    document.getElementById("textarea1").style.fontWeight = "normal";
    document.getElementById("textarea1").style.textAlign = "left";
    document.getElementById("textarea1").style.fontStyle = "normal";
    document.getElementById("textarea1").style.textTransform = "capitalize";
    document.getElementById("textarea1").value = " ";
}

function downloadText() {
    var textareaContent = document.getElementById("textarea1").value;   // retrieve the content of the textarea
    var blob = new Blob([textareaContent], { type: "text/plain" }); // create a new Blob object with the textarea content and specify the MIME type as "text/plain"
    var url = URL.createObjectURL(blob);    // create a temporary URL for the Blob object

    var downloadLink = document.createElement("a"); // create a new <a> element
    downloadLink.href = url;    // set the href attribute to the temporary URL
    downloadLink.download = "textFile.txt"; // specify the download attribute with the desired filename

    document.body.appendChild(downloadLink);    // append the <a> element to the document body
    downloadLink.click();   // simulate a click event on the <a>
    document.body.removeChild(downloadLink);    // remove the element from the document.
    URL.revokeObjectURL(url);   // revoke the temporary URL
}