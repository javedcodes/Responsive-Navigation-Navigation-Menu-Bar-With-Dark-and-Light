// Selecting required elements from the DOM
const body = document.querySelector("body"), // Selects the body element
      nav = document.querySelector("nav"), // Selects the nav (navigation) element
      modeToggle = document.querySelector(".dark-light"), // Selects the dark-light toggle button
      searchToggle = document.querySelector(".searchToggle"), // Selects the search toggle button
      sidebarOpen = document.querySelector(".sidebarOpen"), // Selects the sidebar open button
      siderbarClose = document.querySelector(".siderbarClose"); // Selects the sidebar close button

// Check the current mode (dark or light) stored in localStorage
let getMode = localStorage.getItem("mode");
if(getMode && getMode === "dark-mode"){
    // If the stored mode is "dark-mode", apply the dark mode class to the body
    body.classList.add("dark");
}

// JavaScript code to toggle between dark and light modes
modeToggle.addEventListener("click" , () => {
    // Toggles the active class on the modeToggle button
    modeToggle.classList.toggle("active");

    // Toggles the "dark" class on the body element to switch between dark and light modes
    body.classList.toggle("dark");

    // JavaScript code to save the user's selected mode in localStorage, even after page refresh or file reopen
    if(!body.classList.contains("dark")){
        // If dark mode is not active, store "light-mode" in localStorage
        localStorage.setItem("mode" , "light-mode");
    } else {
        // If dark mode is active, store "dark-mode" in localStorage
        localStorage.setItem("mode" , "dark-mode");
    }
});

// JavaScript code to toggle the search box
searchToggle.addEventListener("click", () => {
    // Toggles the active class on the searchToggle button to show or hide the search box
    searchToggle.classList.toggle("active");
});

// JavaScript code to toggle the sidebar
sidebarOpen.addEventListener("click", () => {
    // Adds the "active" class to the nav element, which opens the sidebar
    nav.classList.add("active");
});

// JavaScript code to close the sidebar when clicking outside of it
body.addEventListener("click", (e) => {
    // Gets the element that was clicked
    let clickedElm = e.target;

    // Checks if the clicked element is not the sidebar open button or the menu
    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        // If the clicked element is outside the sidebar, removes the "active" class to close the sidebar
        nav.classList.remove("active");
    }
});
