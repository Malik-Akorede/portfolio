
const elementsToAnimate = {
    projectInfo: { class: 'fadeInLeft', visibleOnPage: true },
    webView: { class: 'fadeInRight', visibleOnPage: true },
    mobileView: { class: 'fadeInRight', visibleOnPage: true },    
};


const toggleDashboardAnimation = async () => {
    const elementsToToggle = Object.keys(elementsToAnimate);


    elementsToToggle.forEach((id, index) => {
        const targetElement = document.getElementById(id);
        const elementInfo = elementsToAnimate[id];


        if (elementInfo.visibleOnPage) {
            targetElement.style.animation = '';
            
        } else {
            targetElement.style.animation = `${elementInfo.class} .5s ease forwards ${index / 15 + 0.5}s`;

        }
 
        
    });


    // Toggle the visibility status for each element
    elementsToToggle.forEach(id => {
        elementsToAnimate[id].visibleOnPage = !elementsToAnimate[id].visibleOnPage;
    });
}

toggleDashboardAnimation();

export default toggleDashboardAnimation;