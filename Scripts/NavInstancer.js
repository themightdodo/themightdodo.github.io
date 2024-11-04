var Nav = document.querySelector("#Nav");

var infolink = window.location.origin + "/info.html";
var Projectslink = window.location.origin +"/index.html";
var Homelink = window.location.origin +"/index.html";

Nav.classList.add("flex","flex-row", "w-full", "h-fit",  "z-20", "sticky","top-0");
Nav.innerHTML = "<a class='w-full h-fit px-2 py-1 lg:px-8 lg:py-2 rounded-br-lg bg-noir text-blanc2' href='"+Homelink+"'><h1 class='titre3'>Quentin Bovi</h1></a><a class='w-full hidden lg:block h-fit px-2 py-1 outline outline-noir  outline-2 lg:px-8 lg:py-2 bg-blanc2 text-noir' href='"+Projectslink+"'> <p class='titre4'>Projects</p> </a> <div class='w-full flex flex-row  h-fit'> <a class='w-full h-fit px-2 py-1 lg:px-8 lg:py-2 outline outline-noir  outline-2 bg-blanc2 text-noir' href='"+infolink+"'> <p class='titre4'>Info</p> </a><div class='w-fit hidden h-fit px-2 py-1 lg:px-8 lg:py-2 rounded-bl-lg bg-noir text-blanc2'><i class='bi bi-diamond-half titre3'></i></div> </div>";