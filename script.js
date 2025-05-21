function toggleInfo() {
    const info = document.getElementById("infoExtra");
    if (info.style.display === "none") {
      info.style.display = "block";
    } else {
      info.style.display = "none";
    }
  }
  
  function toggleTema() {
    document.body.classList.toggle("dark-mode");
  }