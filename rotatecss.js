document.onkeydown = checkKey;
var currentStyle = 1;
var previousStyle = 2;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '37') {
       // left arrow
       previousStyle = currentStyle;
       currentStyle--;
       if(currentStyle < 1) {
       	currentStyle = 3;
       }
       changeCSS(currentStyle, previousStyle);
    }
    else if (e.keyCode == '39') {
       // right arrow
       previousStyle = currentStyle;
       currentStyle++;
       if(currentStyle > 3) {
       	currentStyle = 1;
       }
       changeCSS(currentStyle, previousStyle);
    }

}

function changeCSS(styleNo, prevStyleNo) {

    var oldlink = document.querySelector('link[href="style'+prevStyleNo+'.css"]');
    if(oldlink) {
    	oldlink.remove();
    }

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "style"+currentStyle+".css");

    document.getElementsByTagName("head").item(0).appendChild(newlink);
}
