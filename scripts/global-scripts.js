// DARK MODE

    // Declare local storage
    let darkMode = localStorage.getItem("darkMode");

    // Declare theme button + content
    let themeBtn = document.getElementById("theme-btn");
    let themeIcon = document.getElementById("theme-icon");
    let themeText = document.getElementById("theme-text");

    // Declare nav icons
    let aboutmeIcon = document.getElementById("aboutme-icon");
    let resumeIcon = document.getElementById("resume-icon");
    let projectsIcon = document.getElementById("projects-icon");
    let collapseIcon = document.getElementById("collapse-icon");

    // Declare contact icons
    let phoneIcon = document.getElementById("phone-icon");
    let emailIcon = document.getElementById("email-icon");
    let linkedinIcon = document.getElementById("linkedin-icon");
    let githubIcon = document.getElementById("github-icon");


    // Functions for enabling and disabling darkMode
    const enableDarkMode = () => {
        document.body.classList.add("dark-theme");      // add class darkmode to the body
        localStorage.setItem("darkMode", "enabled");    // update darkMode in the local storage
        darkMode = localStorage.getItem("darkMode");    // update darkMode variable
    }
    const disableDarkMode = () => {
        document.body.classList.remove("dark-theme");   // remove class darkmode to the body
        localStorage.setItem("darkMode", "disabled");   // update darkMode in the local storage
        darkMode = localStorage.getItem("darkMode");    // update darkMode variable
    }


    // Check darkMode state on load (keeps on refresh)
    if (darkMode === "enabled") {
        enableDarkMode();

        // Set nav icons
        aboutmeIcon.classList.add('filter-white');
        resumeIcon.classList.add('filter-white');
        projectsIcon.classList.add('filter-white');
        collapseIcon.classList.add('filter-white');
        themeIcon.src = "assets/icons/nav-icons/sun.svg";
        themeIcon.classList.add('filter-white');
        themeText.innerHTML = "Light mode";

        // If page is index, then change contact icons
        if (window.location.href === "https://www.loganwiggins.com/") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
            githubIcon.classList.add('filter-white');
        }
        if (window.location.href === "https://loganwiggins.com/") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
            githubIcon.classList.add('filter-white');
        }
        if (window.location.href === "https://loganwiggins.com/index?") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
            githubIcon.classList.add('filter-white');
        }  
    }


    themeBtn.onclick = function() {
        // Check darkMode state on nav button click
        darkMode = localStorage.getItem("darkMode");

        // If-else on click
        if (darkMode !== "enabled") {
            enableDarkMode();

            // Set nav icons
            aboutmeIcon.classList.add('filter-white');
            resumeIcon.classList.add('filter-white');
            projectsIcon.classList.add('filter-white');
            collapseIcon.classList.add('filter-white');
            themeIcon.src = "assets/icons/nav-icons/sun.svg";
            themeIcon.classList.add('filter-white');
            themeText.innerHTML = "Light mode";

            // If page is index, then change contact icons
            if (window.location.href === "https://www.loganwiggins.com/") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
                githubIcon.classList.add('filter-white');
            }
            if (window.location.href === "https://loganwiggins.com/") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
                githubIcon.classList.add('filter-white');
            }
            if (window.location.href === "https://loganwiggins.com/index?") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
                githubIcon.classList.add('filter-white');
            } 
        }
        else {
            disableDarkMode();

            // Set nav icons
            aboutmeIcon.classList.remove('filter-white');
            resumeIcon.classList.remove('filter-white');
            projectsIcon.classList.remove('filter-white');
            collapseIcon.classList.remove('filter-white');
            themeIcon.src = "assets/icons/nav-icons/moon.svg";
            themeIcon.classList.remove('filter-white');
            themeText.innerHTML = "Dark mode";

            // If page is index, then change contact icons
            if (window.location.href === "https://www.loganwiggins.com/") {
                phoneIcon.classList.remove('filter-white');
                emailIcon.classList.remove('filter-white');
                linkedinIcon.classList.remove('filter-white');
                githubIcon.classList.remove('filter-white');
            }
            if (window.location.href === "https://loganwiggins.com/") {
                phoneIcon.classList.remove('filter-white');
                emailIcon.classList.remove('filter-white');
                linkedinIcon.classList.remove('filter-white');
                githubIcon.classList.remove('filter-white');
            }
            if (window.location.href === "https://loganwiggins.com/index?") {
                phoneIcon.classList.remove('filter-white');
                emailIcon.classList.remove('filter-white');
                linkedinIcon.classList.remove('filter-white');
                githubIcon.classList.remove('filter-white');
            }
        }
    }

// --------------------





// COLLAPSIBLE NAV

    let nav = document.getElementById("navigation");
    var screenWidth = window.innerWidth;

    // Declare local storage
    let navStatus = localStorage.getItem("navStatus");

    // Functions for expanding and collapsing navStatus
    const collapseNav = () => {
        nav.classList.add("collapsed"); 
        localStorage.setItem("navStatus", "collapsed"); // update navStatus in the local storage
        navStatus = localStorage.getItem("navStatus");  // update navStatus variable
    }
    const expandNav = () => {
        nav.classList.remove("collapsed"); 
        localStorage.setItem("navStatus", "expanded"); // update navStatus in the local storage
        navStatus = localStorage.getItem("navStatus");  // update navStatus variable
    }

    // Check navStatus state on load (keeps on refresh)
    if (navStatus === "collapsed") {
        collapseNav();

        if (screenWidth <= 1200) {
            nav.classList.remove("collapsed");
            navStatus = "expanded";
        }
    }

    function toggleNav() {
        navStatus = localStorage.getItem("navStatus");  // check navStatus state on button click
        if (navStatus == "expanded") { collapseNav(); }
        else { expandNav(); } 
    }

// --------------------