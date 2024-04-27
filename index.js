 


document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger-menu");
    const menuContainer = document.querySelector(".nutribump_ul_container");

    const searchBar = document.querySelector(".nutribump_profile_search");
    const searchIcon = document.querySelector("#searchIconmobile");
    const menuItems = document.querySelectorAll(".nutribump_menu li");

    hamburger.addEventListener("click", function () {
        menuContainer.classList.toggle("show");
        searchBar.classList.toggle("hide");
    });


    searchIcon.addEventListener("click", function (e) {
        console.log(e)
        document.getElementById("overlay").style.display = "block";
        document.getElementById("searchPopup").style.display = "block";
    });

    menuItems.forEach((item) => {
        item.addEventListener("click", function () {
            menuItems.forEach((item) => {
                item.classList.remove("active");
                menuContainer.classList.remove("show");
            });
            this.classList.add("active");
        });
    });


});


// search icon
document.getElementById("searchIcon").addEventListener("click", function (e) {
    console.log(e)
    document.getElementById("overlay").style.display = "block";
    document.getElementById("searchPopup").style.display = "block";
});

function closeSearchPopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("searchPopup").style.display = "none";
}


//handle bg images

document.addEventListener("DOMContentLoaded", function () {

    const bgImageArray = ["./utils/topbanner.png","./utils/topbanner-2.png"] 

    let currentIndex = 0;

    const changeBgImage = () => {
        const mainDiv = document.querySelector(".main-container")
         
        mainDiv.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bgImageArray[currentIndex]})`
        currentIndex = (currentIndex + 1) % bgImageArray.length;
    }

    //initial call
    changeBgImage()

    //initate call on timer
    setInterval(changeBgImage, 5000);
})