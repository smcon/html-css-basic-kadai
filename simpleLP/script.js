const cursor =document.getElementById("cursor");

document.addEventListener("mousemove", function (e) {
  cursor.style.transform = 'traslate(${e.clientX}px, ${e.clientY}px)';
});