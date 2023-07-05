var gsap = gsap

var mainTimeline = gsap.timeline({scrollTrigger:{
    trigger: ".landing",
    start: "50% 50%",
    end: "100% 50%",
    // markers: true,
    // pin:true,
    scrub: true
}});


mainTimeline.to("#start",{
    scale: "3"
})
var aboutTimeline = gsap.timeline({scrollTrigger:{
    trigger: ".about",
    start: "10% 10%",
    end: "100% 0%",
    // markers: true,
    pin:true,
    scrub: true,

}});

var aboutHeader = document.querySelector("#aboutSectionHeader")
aboutTimeline.to("#first-card",{
    rotate: "0deg",
    left: "-20vw",
    opacity: 0,
    duration: 2000,
}).to("#second-card",{
    rotate: "0deg",
    left: "20vw",
    opacity: 0,
    duration: 2000
}).to("#third-card",{
    rotate: "0deg",
    scale: 1.2,
    duration: 2000,
})

function scrambleElementText(elem) {
    new ScrambleText(elem).start().play()
}


// project section scroll control
// Controlling projects section animation

// var projectTimeline = gsap.timeline({scrollTrigger:{
//     trigger: ".projects",
//     start: "50% 50%",
//     end: "100% 50%",
//     markers: true,
//     pin:true,
//     scrub: true
// }})


// projectTimeline.to("#project-top-half",{
//     y: "-50vh"
// },"sync-projects").to("#project-bottom-half",{
//     y: "50vh"
// },"sync-projects").to(".text-top",{
//     y: "10vh"
// },"sync-projects").to(".text-bottom",{
//     y: "-10vh"
// },"sync-projects")



// inflate projects
var projectsData = projectsdata
var projectsWrapper = document.querySelector("#projectsList")
let counter = 1
projectsData.forEach(project => {
    projectListHtml = `
    <div class="projectHolder" onmouseenter="scrambleTitle(this)" onmouseleave="resetTitle(this)" onclick="window.open('${project.url}')">
        <div class="project-text-section">
            <div class="smallCounter">
                0${counter}
            </div>
            <div class="project-des">
                <div class="project-title" data-pname="${project.name}">
                    ${project.name}
                </div>
                
                <div class="project-tags">
                    ${project.tech.join(" / ")}
                </div>
                <div class="largeCounter">
                    0${counter}
                </div>

            </div>

            <div class="view_project_button">
                <div class="btn-wrapper">
                    <div class="text">
                        View Project
                    </div>
                    <div class="icon">
                        <span class="fa fa-arrow-right"></span>
                    </div>
                
                </div>
            </div>

        </div>
    </div>
    
    `;

    counter++;

    projectsWrapper.innerHTML += projectListHtml
});

var viewAllProjectLink = `
    <div class="projectHolder" onclick="window.open('https://github.com/En3X')">
        <div class="project-text-section">
            <div class="smallCounter">
                0${counter}
            </div>
            <div class="project-des">
                <div class="project-title" data-pname="This is not it, there are more!">
                    This is not it, there are more!
                </div>
                
                <div class="project-tags">
                    View all projects in my github profile
                </div>

            </div>

            <div class="view_project_button">
                <div class="btn-wrapper">
                    <div class="text">
                        View Projects
                    </div>
                    <div class="icon">
                        <span class="fa fa-arrow-right"></span>
                    </div>
                
                </div>
            </div>

        </div>
    </div>
    `;
projectsWrapper.innerHTML += viewAllProjectLink

function scrambleTitle(e) {
    resetTitle(e)
    titleText = e.querySelector(".project-title")
    currentHoveredText = titleText.innerText
    scrambleElementText(titleText)
}

function resetTitle(e){
    titleText = e.querySelector(".project-title")
    projectTitle = titleText.getAttribute("data-pname")
    titleText.innerText = projectTitle
}



// Populate Blogs Section
const BLOGS_LIST = "https://static.maneeshpandey.com/wp-json/wp/v2/posts?per_page=3"
const blogsCardHolder = document.querySelector('.blogsCardHolder')

blogCardHtml = `
<div class="blogCard">
<div class="quoteFromPost">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam enim omnis asperiores eos, quidem iusto, temporibus ut aut quibusdam quia rem nisi. Quia ex perferendis autem laborum earum modi est.
</div>

<div class="cardFooter">
    <div class="blogCardImage">
        <img src="./img/main-img.png" alt="">
    </div>
    <div class="blogtitleAndName">
        <div class="title">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </div>
        <div class="author">
            Maneesh Pandey
        </div>
    </div>
</div>
</div>

`; 


// fetch(BLOGS_LIST, {
//     method: 'GET',
//     mode: 'no-cors'
//   })
//     .then(response => response.text())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });





document.querySelector("#year").innerText = new Date().getFullYear()