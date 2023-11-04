// ACTIVATE DARK MODE

    // Declare local storage
    let darkMode = localStorage.getItem("darkMode");

    // Declare theme button + content
    var themeBtn = document.getElementById("theme-btn");
    var themeIcon = document.getElementById("theme-icon");
    var themeText = document.getElementById("theme-text");

    // Declare nav icons
    var aboutmeIcon = document.getElementById("aboutme-icon");
    var resumeIcon = document.getElementById("resume-icon");
    var projectsIcon = document.getElementById("projects-icon");

    // Declare contact icons
    var phoneIcon = document.getElementById("phone-icon");
    var emailIcon = document.getElementById("email-icon");
    var linkedinIcon = document.getElementById("linkedin-icon");

    // Declare resume icons
    var galleryBtnIconAitp = document.getElementById("aitp-gallery-btn-icon");
    var skillsBtnIconAitp = document.getElementById("aitp-skills-btn-icon");


    // Functions for enabling and disabling darkMode
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


    // Check darkMode state on load (keeps on refresh)
    if (darkMode === "enabled") {
        enableDarkMode();

        // Set nav icons
        aboutmeIcon.classList.add('filter-white');
        resumeIcon.classList.add('filter-white');
        projectsIcon.classList.add('filter-white');
        themeIcon.src = "assets/icons/nav-icons/sun.svg";
        themeIcon.classList.add('filter-white');
        themeText.innerHTML = "Light mode";

        // if page is... then change contact icons
        if (window.location.href === "https://www.loganwiggins.com") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
        }   
        // if page is... then change contact icons
        if (window.location.href === "https://loganwiggins.com/index?") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
        }  
        // if page is... then change contact icons
        if (window.location.href === "https://loganwiggins.com/resume?") {
            galleryBtnIconAitp.classList.add('filter-white');
            skillsBtnIconAitp.classList.add('filter-white');
        }     
    }


    themeBtn.onclick = function() {
        // check darkMode state on click
        darkMode = localStorage.getItem("darkMode");

        // if-else on click
        if (darkMode !== "enabled") {
            enableDarkMode();

            // set nav icons
            aboutmeIcon.classList.add('filter-white');
            resumeIcon.classList.add('filter-white');
            projectsIcon.classList.add('filter-white');
            themeIcon.src = "assets/icons/nav-icons/sun.svg";
            themeIcon.classList.add('filter-white');
            themeText.innerHTML = "Light mode";

           // if page is... then change contact icons
            if (window.location.href === "https://www.loganwiggins.com") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
            }   
            // if page is... then change contact icons
            if (window.location.href === "https://loganwiggins.com/index?") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
            }
            // if page is... then change contact icons
            if (window.location.href === "https://loganwiggins.com/resume?") {
                galleryBtnIconAitp.classList.add('filter-white');
                skillsBtnIconAitp.classList.add('filter-white');
            }    
        }
        else {
            disableDarkMode();

            // Set nav icons
            aboutmeIcon.classList.remove('filter-white');
            resumeIcon.classList.remove('filter-white');
            projectsIcon.classList.remove('filter-white');
            themeIcon.src = "assets/icons/nav-icons/moon.svg";
            themeIcon.classList.remove('filter-white');
            themeText.innerHTML = "Dark mode";

            // If page is index.html, then change contact icons
            if (window.location.href === "https://www.loganwiggins.com") {
                phoneIcon.classList.remove('filter-white');
                emailIcon.classList.remove('filter-white');
                linkedinIcon.classList.remove('filter-white');
            }            
            // If page is index.html, then change contact icons
            if (window.location.href === "https://loganwiggins.com/index?") {
                phoneIcon.classList.remove('filter-white');
                emailIcon.classList.remove('filter-white');
                linkedinIcon.classList.remove('filter-white');
            }
            // If page is... then change contact icons
            if (window.location.href === "https://loganwiggins.com/resume?") {
                galleryBtnIconAitp.classList.remove('filter-white');
                skillsBtnIconAitp.classList.remove('filter-white');
            }    
        }
    }

// --------------------





// RESUME CARD

    let galleryBtnAitp = document.getElementById("aitp-gallery-btn");
    let skillsBtnAitp = document.getElementById("aitp-skills-btn");

    // Toggle all menus
    function toggleAllMenusAitp() {
        if ((galleryAitp.style.display == "flex" || skillsAitp.style.display == "flex")) {
            galleryAitp.style.display = "none";
            galleryBtnAitp.classList.remove("active");
    
            skillsAitp.style.display = "none";
            skillsBtnAitp.classList.remove("active");
        }
        else {
            galleryAitp.style.display = "flex";
            galleryBtnAitp.classList.add("active");
    
            skillsAitp.style.display = "flex";
            skillsBtnAitp.classList.add("active");
        }        
    }

    // Resume card gallery
    let galleryAitp = document.getElementById("gallery-aitp");

    function toggleGalleryAitp() {
        if(galleryAitp.style.display == "flex") {
            galleryAitp.style.display = "none";
            galleryBtnAitp.classList.remove("active");
        }
        else {
            galleryAitp.style.display = "flex";
            galleryBtnAitp.classList.add("active");
        }
    }

    // Resume card skills
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
            skillsBtnAitp.classList.remove("active");
        }
        else {
            skillsAitp.style.display = "flex";
            skillsBtnAitp.classList.add("active");
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




// RESUME BUTTON

    function openResume() {
        window.open("assets/LoganWiggins_Resume.pdf", "_blank");
    }

// --------------------





// DATE VARS

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    switch(mm) {
        case '1':
            mm = "January";
            break;
        case '2':
            mm = "February";
            break;
        case '3':
            mm = "March";
            break;
        case '4':
            mm = "April";
            break;
        case '5':
            mm = "May";
            break;
        case '6':
            mm = "June";
            break;
        case '7':
            mm = "July";
            break;
        case '8':
            mm = "August";
            break;
        case '9':
            mm = "September";
            break;
        case '10':
            mm = "October";
            break;
        case '11':
            mm = "November";
            break;
        case '12':
            mm = "December";
            break;
    }

    today = mm + ' ' + dd + ', ' + yyyy;

    window.onload = function setNavDate() {
        let dateStr = document.getElementById("date");
        dateStr.innerHTML = today;
    }

// --------------------