// INDEX CONTACT LINKS

    let phoneBtn = document.getElementById("phone-btn");
    let emailBtn = document.getElementById("email-btn");
    let alertCtnr = document.querySelector(".alert-ctnr");
    let copyMessage = document.querySelector(".copy-message");

    function showAlert() {
        copyMessage.classList.add("active");
    }
    function hideAlert() {
        copyMessage.classList.remove("active");
    }

    function copyPhone() {
        navigator.clipboard.writeText("(561) 701-1496");
        showAlert();
        setTimeout(hideAlert, 3000);
    }
    function copyEmail() {
        navigator.clipboard.writeText("loganmwiggins1@gmail.com");
        showAlert();
        setTimeout(hideAlert, 3000);
    }
    function openLinkedin() { window.open("https://www.linkedin.com/in/loganwiggins/"); }
    function openGitHub() { window.open("https://github.com/loganmwiggins"); }
    function openYouTube() { window.open("https://www.youtube.com/@LoganWiggins1"); }

// --------------------