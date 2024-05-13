function changeLanguage(language) {
    
    console.log("Selected language: " + language);
    
}




  

  window.onload = function() {
    var companyLinks = document.querySelectorAll(".company-link");
    companyLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        var url = this.getAttribute("data-url");
        window.location.href = url;
        event.preventDefault();
      });
    });
  };
  