// Developed by P. Katsigiannis

let darkmode = localStorage.getItem('darkmode') // Find current theme from local storage
const mode = document.getElementById('mode') // Find the button

// Add darkmode class
const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active') // Store theme in localStorage (can only store Strings)
}

// Remove darkmode class from body
const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null) // Store theme in localStorage
}

// Enable darkmode if it is stored in localStorage
if(darkmode === "active") enableDarkmode()

mode.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode') // Update variable according to what is currently stored in localStorage
    if(darkmode !== "active"){
        enableDarkmode()
    }
    else{
        disableDarkmode()
    }
})