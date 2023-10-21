function runCode() {
    const htmlCode = document.getElementById("html-code").value;
    const cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    const jsCode = "<script>" + document.getElementById("js-code").value + "</script>";

    const iframe = document.getElementById("result-frame").contentWindow.document;
    iframe.open();
    iframe.write(htmlCode + cssCode + jsCode);
    iframe.close();
}

runCode(); // Auto-run the code on page load
