function hexGenerate() {
  var hexChars = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += hexChars[Math.floor(Math.random() * 16)];
  }
  document.getElementById("display-color").style.backgroundColor = color;
  document.getElementById("input").value = color;
}

document.getElementById("btn-copy").addEventListener("click", function () {
  var inputElement = document.getElementById("input");
  inputElement.select();
  document.execCommand("copy");
});
