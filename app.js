// collapse sidebar 
let sideBar = document.querySelector('.sys-sidebar-menu');
collapseSidebar.addEventListener('click', function(){
    sideBar.classList.toggle('sidebar-collapse');
})



function infofunc(e, info) {
    var i, content, links;
    content = document.getElementsByClassName("sys-sub-menu");
    for (i = 0; i < content.length; i++) {
       content[i].style.display = "none";
    }
    links = document.getElementsByClassName(" sysdropDown");
    for (i = 0; i < links.length; i++) {
    }
    document.getElementById(info).style.display = "block";
   
 }