if (window.location.href == "https://loganwiggins.com" || window.location.href == "https://loganwiggins.com/") {
    window.open("https://www.loganwiggins.com", "_self");
}

sessionStorage.setItem("location", "home");

// INDEX CONTACT LINKS

    let emailBtn = document.getElementById("email-btn");
    let alertCtnr = document.querySelector(".alert-ctnr");
    let copyMessage = document.querySelector(".copy-message");

    function showAlert() { copyMessage.classList.add("active"); }
    function hideAlert() { copyMessage.classList.remove("active"); }

    function copyEmail() {
        navigator.clipboard.writeText("loganmwiggins1@gmail.com");
        showAlert();
        setTimeout(hideAlert, 3000);
    }
    function openLinkedin() { window.open("https://www.linkedin.com/in/loganwiggins/"); }
    function openGitHub() { window.open("https://github.com/loganmwiggins"); }
    function openYouTube() { window.open("https://www.youtube.com/@LoganWiggins1"); }

// --------------------