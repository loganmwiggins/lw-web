// RESUME BUTTON

    function openResume() { window.open("assets/LoganWiggins_Resume.pdf", "_blank"); }

// --------------------


// RESUME CARD

    let skillsArrowFsu = document.getElementById("skills-arrow-fsu");
    let skillsArrowAitp = document.getElementById("skills-arrow-aitp");
    let skillsArrowStars = document.getElementById("skills-arrow-stars");
    let skillsArrowPcg = document.getElementById("skills-arrow-pcg");
    let skillsArrowCot = document.getElementById("skills-arrow-cot");
    let skillsArrow223 = document.getElementById("skills-arrow-223");
    let skillsArrowSt = document.getElementById("skills-arrow-st");
    let skillsArrowPub = document.getElementById("skills-arrow-pub");

    let skillsFsu = document.getElementById("skills-fsu");
    let skillsAitp = document.getElementById("skills-aitp");
    let skillsStars = document.getElementById("skills-stars");
    let skillsPcg = document.getElementById("skills-pcg");
    let skillsCot = document.getElementById("skills-cot");
    let skills223 = document.getElementById("skills-223");
    let skillsSt = document.getElementById("skills-st");
    let skillsPub = document.getElementById("skills-pub");

    function toggleSkillsFsu() {
        if (skillsFsu.style.display == "flex") {
            skillsFsu.style.display = "none";
            skillsArrowFsu.classList.remove("rotate");
        }
        else {
            skillsFsu.style.display = "flex";
            skillsArrowFsu.classList.add("rotate");
        }
    }
    function toggleSkillsAitp() {
        if (skillsAitp.style.display == "flex") {
            skillsAitp.style.display = "none";
            skillsArrowAitp.classList.remove("rotate");
        }
        else {
            skillsAitp.style.display = "flex";
            skillsArrowAitp.classList.add("rotate");
        }
    }
    function toggleSkillsStars() {
        if (skillsStars.style.display == "flex") {
            skillsStars.style.display = "none";
            skillsArrowStars.classList.remove("rotate");
        }
        else {
            skillsStars.style.display = "flex";
            skillsArrowStars.classList.add("rotate");
        }
    }
    function toggleSkillsPcg() {
        if (skillsPcg.style.display == "flex") {
            skillsPcg.style.display = "none";
            skillsArrowPcg.classList.remove("rotate");
        }
        else {
            skillsPcg.style.display = "flex";
            skillsArrowPcg.classList.add("rotate");
        }
    }
    function toggleSkillsCot() {
        if (skillsCot.style.display == "flex") {
            skillsCot.style.display = "none";
            skillsArrowCot.classList.remove("rotate");
        }
        else {
            skillsCot.style.display = "flex";
            skillsArrowCot.classList.add("rotate");
        }
    }
    function toggleSkills223() {
        if (skills223.style.display == "flex") {
            skills223.style.display = "none";
            skillsArrow223.classList.remove("rotate");
        }
        else {
            skills223.style.display = "flex";
            skillsArrow223.classList.add("rotate");
        }
    }
    function toggleSkillsSt() {
        if (skillsSt.style.display == "flex") {
            skillsSt.style.display = "none";
            skillsArrowSt.classList.remove("rotate");
        }
        else {
            skillsSt.style.display = "flex";
            skillsArrowSt.classList.add("rotate");
        }
    }
    function toggleSkillsPub() {
        if (skillsPub.style.display == "flex") {
            skillsPub.style.display = "none";
            skillsArrowPub.classList.remove("rotate");
        }
        else {
            skillsPub.style.display = "flex";
            skillsArrowPub.classList.add("rotate");
        }
    }

// --------------------