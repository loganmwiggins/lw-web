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
    var collapseIcon = document.getElementById("collapse-icon");

    // Declare contact icons
    var phoneIcon = document.getElementById("phone-icon");
    var emailIcon = document.getElementById("email-icon");
    var linkedinIcon = document.getElementById("linkedin-icon");
    

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
        collapseIcon.classList.add('filter-white');
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
            collapseIcon.classList.add('filter-white');
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