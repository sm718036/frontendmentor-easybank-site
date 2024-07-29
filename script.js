const hamburgerBtns = document.querySelectorAll("i");
const menuContainer = document.querySelector("#menu-container");
const inviteBtn = document.querySelector("#invite-btn");

hamburgerBtns.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        if(e.currentTarget.classList.contains("fa-bars")){
            e.currentTarget.style.display = "none";
            e.currentTarget.nextElementSibling.style.display = "block";
            menuContainer.classList.add("show");
        } else if(e.currentTarget.classList.contains("fa-xmark")){
            e.currentTarget.style.display = "none";
            e.currentTarget.previousElementSibling.style.display = "block";
            menuContainer.classList.remove("show");
        }
    })
})