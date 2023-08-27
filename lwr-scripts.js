// ACTIVATE DARK MODE

    // declare local storage
    let darkMode = localStorage.getItem("darkMode");

    // declare theme button + content
    var themeBtn = document.getElementById("theme-btn");
    var themeIcon = document.getElementById("theme-icon");
    var themeText = document.getElementById("theme-text");

    // declare nav icons
    var aboutmeIcon = document.getElementById("aboutme-icon");
    var resumeIcon = document.getElementById("resume-icon");
    var projectsIcon = document.getElementById("projects-icon");

    // declare contact icons
    var phoneIcon = document.getElementById("phone-icon");
    var emailIcon = document.getElementById("email-icon");
    var linkedinIcon = document.getElementById("linkedin-icon");


    // functions for enabling and disabling darkMode
    const enableDarkMode = () => {
        // add class darkmode to the body
        document.body.classList.add("dark-theme");
        // update darkMode in the local storage
        localStorage.setItem("darkMode", "enabled");
        // update darkMode variable
        darkMode = localStorage.getItem("darkMode");
    }
    const disableDarkMode = () => {
        // remove class darkmode to the body
        document.body.classList.remove("dark-theme");
        // update darkMode in the local storage
        localStorage.setItem("darkMode", "disabled");
        // update darkMode variable
        darkMode = localStorage.getItem("darkMode");
    }


    // check darkMode state on load (keeps on refresh)
    if(darkMode === "enabled") {
        enableDarkMode();

        // set nav icons
        aboutmeIcon.src = "assets/icons/nav-icons/dark-theme/user-icon.png";
        resumeIcon.src = "assets/icons/nav-icons/dark-theme/resume-icon.png";
        projectsIcon.src = "assets/icons/nav-icons/dark-theme/project-icon.png";
        themeIcon.src = "assets/icons/nav-icons/dark-theme/sun-icon.png";
        themeText.innerHTML = "Light Mode";

        // if page is... then change contact icons
        if(window.location.href === "https://www.loganwiggins.com/") {
            phoneIcon.src = "assets/icons/contact-icons/dark-theme/phone-icon.png";
            emailIcon.src = "assets/icons/contact-icons/dark-theme/email-icon.png";
            linkedinIcon.src = "assets/icons/contact-icons/dark-theme/linkedin-icon.png";
        }   
        // if page is... then change contact icons
        if(window.location.href === "https://loganwiggins.com/index?") {
            phoneIcon.src = "assets/icons/contact-icons/dark-theme/phone-icon.png";
            emailIcon.src = "assets/icons/contact-icons/dark-theme/email-icon.png";
            linkedinIcon.src = "assets/icons/contact-icons/dark-theme/linkedin-icon.png";
        }    
    }


    themeBtn.onclick = function() {
        // check darkMode state on click
        darkMode = localStorage.getItem("darkMode");

        // if-else on click
        if(darkMode !== "enabled") {
            enableDarkMode();

            // set nav icons
            aboutmeIcon.src = "assets/icons/nav-icons/dark-theme/user-icon.png";
            resumeIcon.src = "assets/icons/nav-icons/dark-theme/resume-icon.png";
            projectsIcon.src = "assets/icons/nav-icons/dark-theme/project-icon.png";
            themeIcon.src = "assets/icons/nav-icons/dark-theme/sun-icon.png";
            themeText.innerHTML = "Light Mode";

           // if page is... then change contact icons
            if(window.location.href === "https://www.loganwiggins.com/") {
                phoneIcon.src = "assets/icons/contact-icons/dark-theme/phone-icon.png";
                emailIcon.src = "assets/icons/contact-icons/dark-theme/email-icon.png";
                linkedinIcon.src = "assets/icons/contact-icons/dark-theme/linkedin-icon.png";
            }   
            // if page is... then change contact icons
            if(window.location.href === "https://loganwiggins.com/index?") {
                phoneIcon.src = "assets/icons/contact-icons/dark-theme/phone-icon.png";
                emailIcon.src = "assets/icons/contact-icons/dark-theme/email-icon.png";
                linkedinIcon.src = "assets/icons/contact-icons/dark-theme/linkedin-icon.png";
            }
        }
        else {
            disableDarkMode();

            // set nav icons
            aboutmeIcon.src = "assets/icons/nav-icons/user-icon.png";
            resumeIcon.src = "assets/icons/nav-icons/resume-icon.png";
            projectsIcon.src = "assets/icons/nav-icons/project-icon.png";
            themeIcon.src = "assets/icons/nav-icons/moon-icon.png";
            themeText.innerHTML = "Dark Mode";

            // if page is index.html, then change contact icons
            if(window.location.href === "https://www.loganwiggins.com/") {
                phoneIcon.src = "assets/icons/contact-icons/phone-icon.png";
                emailIcon.src = "assets/icons/contact-icons/email-icon.png";
                linkedinIcon.src = "assets/icons/contact-icons/linkedin-icon.png";
            }            
            // if page is index.html, then change contact icons
            if(window.location.href === "https://loganwiggins.com/index?") {
                phoneIcon.src = "assets/icons/contact-icons/phone-icon.png";
                emailIcon.src = "assets/icons/contact-icons/email-icon.png";
                linkedinIcon.src = "assets/icons/contact-icons/linkedin-icon.png";
            }
        }
    }

// --------------------





// INDEX CONTACT LINKS

    let phoneBtn = document.getElementById("phone-btn");
    let emailBtn = document.getElementById("email-btn");

    function copyPhone() {
        navigator.clipboard.writeText("(561) 701-1496");
        alert("Copied \"" + phoneBtn.value + "\" to clipboard.");
    }
    function copyEmail() {
        navigator.clipboard.writeText("loganmwiggins1@gmail.com");
        alert("Copied \"" + emailBtn.value + "\" to clipboard.");
    }
    function openLinkedin() {
        window.open("https://www.linkedin.com/in/loganwiggins/");
    }
    
// --------------------





// RESUME CARD SKILLS
    let skillsArrowAitp = document.getElementById("skills-arrow-aitp");
    let skillsArrowPcg = document.getElementById("skills-arrow-pcg");
    let skillsArrowCot = document.getElementById("skills-arrow-cot");
    let skillsArrow223 = document.getElementById("skills-arrow-223");
    let skillsArrowSt = document.getElementById("skills-arrow-st");
    let skillsArrowPub = document.getElementById("skills-arrow-pub");
    let skillsArrowTt = document.getElementById("skills-arrow-tt");

    let skillsAitp = document.getElementById("skills-aitp");
    let skillsPcg = document.getElementById("skills-pcg");
    let skillsCot = document.getElementById("skills-cot");
    let skills223 = document.getElementById("skills-223");
    let skillsSt = document.getElementById("skills-st");
    let skillsPub = document.getElementById("skills-pub");
    let skillsTt = document.getElementById("skills-tt");

    function toggleSkillsAitp() {
        if(skillsAitp.style.display == "flex") {
            skillsAitp.style.display = "none";
            skillsArrowAitp.innerHTML = "▼";
        }
        else {
            skillsAitp.style.display = "flex";
            skillsArrowAitp.innerHTML = "▲";
        }
    }
    function toggleSkillsPcg() {
        if(skillsPcg.style.display == "flex") {
            skillsPcg.style.display = "none";
            skillsArrowPcg.innerHTML = "▼";
        }
        else {
            skillsPcg.style.display = "flex";
            skillsArrowPcg.innerHTML = "▲";
        }
    }
    function toggleSkillsCot() {
        if(skillsCot.style.display == "flex") {
            skillsCot.style.display = "none";
            skillsArrowCot.innerHTML = "▼";
        }
        else {
            skillsCot.style.display = "flex";
            skillsArrowCot.innerHTML = "▲";
        }
    }
    function toggleSkills223() {
        if(skills223.style.display == "flex") {
            skills223.style.display = "none";
            skillsArrow223.innerHTML = "▼";
        }
        else {
            skills223.style.display = "flex";
            skillsArrow223.innerHTML = "▲";
        }
    }
    function toggleSkillsSt() {
        if(skillsSt.style.display == "flex") {
            skillsSt.style.display = "none";
            skillsArrowSt.innerHTML = "▼";
        }
        else {
            skillsSt.style.display = "flex";
            skillsArrowSt.innerHTML = "▲";
        }
    }
    function toggleSkillsPub() {
        if(skillsPub.style.display == "flex") {
            skillsPub.style.display = "none";
            skillsArrowPub.innerHTML = "▼";
        }
        else {
            skillsPub.style.display = "flex";
            skillsArrowPub.innerHTML = "▲";
        }
    }
    function toggleSkillsTt() {
        if(skillsTt.style.display == "flex") {
            skillsTt.style.display = "none";
            skillsArrowTt.innerHTML = "▼";
        }
        else {
            skillsTt.style.display = "flex";
            skillsArrowTt.innerHTML = "▲";
        }
    }
// --------------------





// PROJECT CARD LINKS

    function openProjectLW() {
        window.open("https://www.loganwiggins.com/projects-loganwiggins?", "_self");
    }
    function openProjectHE() {
        window.open("https://www.loganwiggins.com/projects-holdeverything?", "_self");
    }
    function openProjectISO() {
        window.open("https://www.loganwiggins.com/projects-induserv?", "_self");
    }

// --------------------