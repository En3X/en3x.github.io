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
    scale: 3
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

var projectTimeline = gsap.timeline({scrollTrigger:{
    trigger: ".projects",
    start: "50% 50%",
    end: "100% 50%",
//     markers: true,
    pin:true,
    scrub: true
}})


projectTimeline.to("#project-top-half",{
    y: "-50vh"
},"sync-projects").to("#project-bottom-half",{
    y: "50vh"
},"sync-projects").to(".text-top",{
    y: "10vh"
},"sync-projects").to(".text-bottom",{
    y: "-10vh"
},"sync-projects")



// inflate projects
var projectsData = projectsdata
var projectsWrapper = document.querySelector("#projects_wrapper")
projectsData.forEach(project => {
    var cardHTML = `
    <div class="tile">
                <div class="information-project">
                    <div class="project-name">
                        ${project.name}
                    </div>
                    <div class="project-subtitle">
                        ${project.description}                        
                    </div>

    `;

    // for tags
    let tagDiv = `<div class="technologies">`;

    project.tech.forEach(tag => {
        tagDiv = tagDiv + `
            <div class="tag">${tag}</div>
        `;
    });

    tagDiv += "</div>";

    cardHTML += `
        ${tagDiv}
        </div>

                <img src="./img/brainly.png" />
                
            </div>
    `

    projectsWrapper.innerHTML += cardHTML

});



const projects_wrapper = document.querySelector("#projects_wrapper")
document.addEventListener("mousemove",e=>{
    let x = e.clientX, y=e.clientY
    let xDec = x/window.innerWidth, yDec = y/window.innerHeight
    
    let maxX = projects_wrapper.offsetWidth - window.innerWidth
    let maxY = projects_wrapper.offsetHeight - window.innerHeight
    const panX = maxX * xDec * -1,
        panY = maxY * yDec * -1;
        
    
        projects_wrapper.animate({
            transform: `translate(${panX}px, ${panY}px)`
          }, {
            duration: 4000,
            fill: "forwards",
            easing: "ease"
          })
})
