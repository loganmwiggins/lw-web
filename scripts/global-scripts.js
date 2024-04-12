// NAV ROUTING

    function routeToHome() { window.open("https://www.loganwiggins.com/", "_self"); }
    function routeToResume() { window.open("https://www.loganwiggins.com/resume?", "_self"); }
    function routeToProjects() { window.open("https://www.loganwiggins.com/projects?", "_self"); }

// --------------------


// SCROLL ANIMATIONS

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) { entry.target.classList.add('scroll-show'); }
            else { entry.target.classList.remove('scroll-show'); }
        });
    });

    const hiddenElements = document.querySelectorAll('.scroll-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

// --------------------


// SETTINGS WINDOW TOGGLE

    let settingsWindow = document.getElementById("settings-window");
    let settingsIcon = document.getElementById("settings-icon");
    let isSettingsOpen = false;
    settingsWindow.style.display = "none";

    function toggleSettings() {
        if (settingsWindow.style.display == "none") {
            settingsWindow.style.display = "flex";
            settingsIcon.src = "assets/icons/nav-icons/options-filled.svg";
            settingsIcon.style.opacity = 1;
        }
        else {
            settingsWindow.style.display = "none";
            settingsIcon.src = "assets/icons/nav-icons/options.svg";
            settingsIcon.style.opacity = .75;
        }
    }

// --------------------


// DEFAULT USER SETTINGS

    // Color mode
    if (localStorage.getItem("siteColor") == null) { localStorage.setItem("siteColor", "light"); }

    // Nav collapse
    if (localStorage.getItem("navStatus") == null) { localStorage.setItem("navStatus", "expanded"); }

    // Theme
    if (localStorage.getItem("siteTheme") == null
        || (localStorage.getItem("siteTheme") != "glass" && localStorage.getItem("siteTheme") != "minimal"))
    {
        localStorage.setItem("siteTheme", "glass");
    }

// --------------------


// DARK MODE / LIGHT MODE

    // Get local storage variable
    let siteColorVar = localStorage.getItem("siteColor");

    // Declare theme button + content
    let bgVideo = document.querySelector(".bg-video");
    let siteColorBtn = document.getElementById("sitecolor-btn");
    let themeIcon = document.getElementById("theme-icon");
    let themeText = document.getElementById("theme-text");
    let brushIcon = document.getElementById("brush-icon");

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
    let youtubeIcon = document.getElementById("youtube-icon");


    // Functions for enabling and disabling dark mode
    const enableDarkMode = () => {
        // Add/remove color set depending on site theme
        if (localStorage.getItem("siteTheme") == "glass") {
            document.body.classList.remove("minimal-light");
            document.body.classList.remove("minimal-dark");
            document.body.classList.add("root-dark");
            bgVideo.style.display = "block";
        }
        else {
            document.body.classList.remove("minimal-light");
            document.body.classList.remove("root-dark");
            document.body.classList.add("minimal-dark");
            bgVideo.style.display = "none";
        }

        localStorage.setItem("siteColor", "dark");
        siteColorVar = localStorage.getItem("siteColor");

        // Set nav icons to white
        aboutmeIcon.classList.add('filter-white');
        resumeIcon.classList.add('filter-white');
        projectsIcon.classList.add('filter-white');
        settingsIcon.classList.add('filter-white');
        collapseIcon.classList.add('filter-white');
        themeIcon.src = "assets/icons/nav-icons/moon.svg";
        themeIcon.classList.add('filter-white');
        brushIcon.classList.add('filter-white');
        themeText.innerHTML = "Dark mode";

        // Set index icons to white
        if (sessionStorage.getItem("location") == "home") {
            phoneIcon.classList.add('filter-white');
            emailIcon.classList.add('filter-white');
            linkedinIcon.classList.add('filter-white');
            githubIcon.classList.add('filter-white');
            youtubeIcon.classList.add('filter-white');
        }
    }
    const disableDarkMode = () => {
        if (localStorage.getItem("siteTheme") == "glass") {
            document.body.classList.remove("root-dark");
            document.body.classList.remove("minimal-dark");
            document.body.classList.remove("minimal-light");
            bgVideo.style.display = "block";
        }
        else {
            document.body.classList.remove("root-dark");
            document.body.classList.remove("minimal-dark");
            document.body.classList.add("minimal-light");
            bgVideo.style.display = "none";
        }

        localStorage.setItem("siteColor", "light");
        siteColorVar = localStorage.getItem("siteColor");

        // Set nav icons to black
        aboutmeIcon.classList.remove('filter-white');
        resumeIcon.classList.remove('filter-white');
        projectsIcon.classList.remove('filter-white');
        settingsIcon.classList.remove('filter-white');
        collapseIcon.classList.remove('filter-white');
        themeIcon.src = "assets/icons/nav-icons/sun.svg";
        themeIcon.classList.remove('filter-white');
        themeText.innerHTML = "Light mode";
        brushIcon.classList.remove('filter-white');

        // Set index icons to black
        if (sessionStorage.getItem("location") == "home") {
            phoneIcon.classList.remove('filter-white');
            emailIcon.classList.remove('filter-white');
            linkedinIcon.classList.remove('filter-white');
            githubIcon.classList.remove('filter-white');
            youtubeIcon.classList.remove('filter-white');
        }
    }


    // Check siteColor and siteTheme state on load (keeps on refresh)
    if (siteColorVar == "dark") { enableDarkMode(); }
    else { disableDarkMode(); }

    // On button click
    siteColorBtn.onclick = function() {
        if (siteColorVar == "light") { enableDarkMode(); }
        else { disableDarkMode(); }
    }

// --------------------


// THEME SWITCHER

    let themeDropdown = document.getElementById("theme-select");
    themeDropdown.value = localStorage.getItem("siteTheme");

    function changeTheme() {
        localStorage.setItem("siteTheme", themeDropdown.value);

        if (siteColorVar == "dark") { enableDarkMode(); }
        else { disableDarkMode(); }
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

        if (screenWidth <= 800) {
            nav.classList.remove("collapsed");
            navStatusVar = "expanded";
        }
    }
    else {
        if (screenWidth <= 1200 && screenWidth > 800) {
            nav.classList.add("collapsed");
            navStatusVar = "collapsed";
        }
    }

    // When collapse button is clicked...
    function toggleNav() {
        navStatusVar = localStorage.getItem("navStatus");  // check navStatus state on button click
        if (navStatusVar == "expanded") { collapseNav(); }
        else { expandNav(); } 
    }

// --------------------