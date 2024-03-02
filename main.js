function setActive(location){
    switch(location){
        case "About":
            document.getElementById("tabs").style.gridTemplateColumns = "1.5fr 1fr 1fr";  

            document.getElementById("CVResume").classList.remove("active");
            document.getElementById("buttonResume").classList.remove("active");
            document.getElementById("ContactMe").classList.remove("active");
            document.getElementById("buttonContact").classList.remove("active");


            document.getElementById("AboutNour").classList.add("active");
            document.getElementById("buttonAbout").classList.add("active");
            break;
        case "Resume":
            document.getElementById("tabs").style.gridTemplateColumns = "1fr 1.5fr 1fr";  

            document.getElementById("ContactMe").classList.remove("active");
            document.getElementById("buttonContact").classList.remove("active");
            document.getElementById("AboutNour").classList.remove("active");
            document.getElementById("buttonAbout").classList.remove("active");


            document.getElementById("CVResume").classList.add("active");
            document.getElementById("buttonResume").classList.add("active");
            break;
        case "Contact":
            document.getElementById("tabs").style.gridTemplateColumns = "1fr 1fr 1.5fr";  

            document.getElementById("CVResume").classList.remove("active");
            document.getElementById("buttonResume").classList.remove("active");
            document.getElementById("AboutNour").classList.remove("active");
            document.getElementById("buttonAbout").classList.remove("active");


            document.getElementById("ContactMe").classList.add("active");
            document.getElementById("buttonContact").classList.add("active");
            break;
    }

}