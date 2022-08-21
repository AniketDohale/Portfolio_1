let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle("open-menu");
}

window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove("open-menu");
}

// Email JS
function validate() {
    let name = document.querySelector('.name')
    let email = document.querySelector('.email')
    let msg = document.querySelector('.message')
    let sendBtn = document.querySelector('.send-btn')

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        }
        else {
            sendmail(name.value, email.value, msg.value);
            success();
        }
    })
}
validate();

function sendmail(name, email, msg) {
    emailjs.send("service_ks5q9ru", "template_upuwugo", {
        from_name: email,
        to_name: name,
        message: msg,
    });
}

function emptyerror() {
    swal({
        title: "Oh No..",
        text: "Fields cannot be empty!",
        icon: "error",
    });
}
function success() {
    swal({
        title: "Email Sent Successfully",
        text: "I will try to reply in 24 hours",
        icon: "success",
    });
}

// Header Background change On Scroll
let header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle("header-active", window.scrollY > 0);
});


// Scroll Top
let scrollTop = document.querySelector('.scroll-top')

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
});


// Modes
// Swaps the style sheet in order to  achieve dark mode.
function switchTheme() {
    let darkMode = document.getElementById("dark-mode");
    let theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "Style/darkmode.css") {
        theme.href = "Style/lightmode.css";
        darkMode.innerHTML = `<i class='bx bxs-moon'></i>`;
    } else {
        theme.href = "Style/darkmode.css";
        darkMode.innerHTML = `<i class='bx bxs-sun'></i>`;
    }
}

