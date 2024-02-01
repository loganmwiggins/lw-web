// DARK MODE

    // Declare local storage
    let siteThemeVar = localStorage.getItem("siteTheme");

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
        document.body.classList.add("dark-theme");
        localStorage.setItem("siteTheme", "dark");
        siteThemeVar = localStorage.getItem("siteTheme");
    }
    const disableDarkMode = () => {
        document.body.classList.remove("dark-theme");
        localStorage.setItem("siteTheme", "light");
        siteThemeVar = localStorage.getItem("siteTheme");
    }


    // Check siteTheme state on load (keeps on refresh)
    if (siteThemeVar === "dark") {
        enableDarkMode();

        // Set nav icons to white
        aboutmeIcon.classList.add('filter-white');
        resumeIcon.classList.add('filter-white');
        projectsIcon.classList.add('filter-white');
        collapseIcon.classList.add('filter-white');
        themeIcon.src = "assets/icons/nav-icons/sun.svg";
        themeIcon.classList.add('filter-white');
        themeText.innerHTML = "Light mode";

        // If page is index, set contact icons to white
        if (window.location.href === "https://www.loganwiggins.com/") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
            githubIcon.classList.add('filter-white');
        }
        if (window.location.href === "https://www.loganwiggins.com/") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
            githubIcon.classList.add('filter-white');
        }
        if (window.location.href === "https://www.loganwiggins.com/index?") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
            githubIcon.classList.add('filter-white');
        }  
    }


    themeBtn.onclick = function() {
        // Check theme on nav button click
        siteThemeVar = localStorage.getItem("siteTheme");

        if (siteThemeVar === "light") {
            enableDarkMode();

            // Set nav icons to white
            aboutmeIcon.classList.add('filter-white');
            resumeIcon.classList.add('filter-white');
            projectsIcon.classList.add('filter-white');
            collapseIcon.classList.add('filter-white');
            themeIcon.src = "assets/icons/nav-icons/sun.svg";
            themeIcon.classList.add('filter-white');
            themeText.innerHTML = "Light mode";

            // If page is index, then change contact icons
            if (window.location.href === "https://loganwiggins.com/") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
                githubIcon.classList.add('filter-white');
            }
            if (window.location.href === "https://www.loganwiggins.com/") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
                githubIcon.classList.add('filter-white');
            }
            if (window.location.href === "https://www.loganwiggins.com/index?") {
                phoneIcon.classList.add('filter-white');
                emailIcon.classList.add('filter-white');
                linkedinIcon.classList.add('filter-white');
                githubIcon.classList.add('filter-white');
            } 
        }
        else {
            disableDarkMode();

            // Set nav icons to black
            aboutmeIcon.classList.remove('filter-white');
            resumeIcon.classList.remove('filter-white');
            projectsIcon.classList.remove('filter-white');
            collapseIcon.classList.remove('filter-white');
            themeIcon.src = "assets/icons/nav-icons/moon.svg";
            themeIcon.classList.remove('filter-white');
            themeText.innerHTML = "Dark mode";

            // If page is index, then change contact icons
            if (window.location.href === "https://loganwiggins.com/") {
                phoneIcon.classList.remove('filter-white');
                emailIcon.classList.remove('filter-white');
                linkedinIcon.classList.remove('filter-white');
                githubIcon.classList.remove('filter-white');
            }
            if (window.location.href === "https://www.loganwiggins.com/") {
                phoneIcon.classList.remove('filter-white');
                emailIcon.classList.remove('filter-white');
                linkedinIcon.classList.remove('filter-white');
                githubIcon.classList.remove('filter-white');
            }
            if (window.location.href === "https://www.loganwiggins.com/index?") {
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

    let navStatusVar = localStorage.getItem("navStatus");  // Declare local storage variable

    // Functions for expanding and collapsing nav menu
    const collapseNav = () => {
        nav.classList.add("collapsed"); 
        localStorage.setItem("navStatus", "collapsed"); // Update navStatus the local storage
        navStatusVar = localStorage.getItem("navStatus");  // Update navStatus variable
    }
    const expandNav = () => {
        nav.classList.remove("collapsed"); 
        localStorage.setItem("navStatus", "expanded"); // Update navStatus the local storage
        navStatusVar = localStorage.getItem("navStatus");  // Update navStatus variable
    }

    // Check navStatus state on load (keeps on refresh)
    if (navStatusVar === "collapsed") {
        collapseNav();

        if (screenWidth <= 1200) {
            nav.classList.remove("collapsed");
            navStatusVar = "expanded";
        }
    }

    // When collapse button is clicked...
    function toggleNav() {
        navStatus = localStorage.getItem("navStatus");  // check navStatus state on button click
        if (navStatus == "expanded") { collapseNav(); }
        else { expandNav(); } 
    }

// --------------------