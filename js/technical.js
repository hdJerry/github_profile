

const gitHubDOM = {
    getNode: (elementSelector) => document.querySelector(elementSelector),
    getAllNode: (elementSelector) => document.querySelectorAll(elementSelector),
};

const gitHubDetailsNode = gitHubDOM.getAllNode(".github_details");
const SelectMenu_closeButton = gitHubDOM.getAllNode('.SelectMenu-closeButton');
const details = gitHubDOM.getAllNode('details');

function animateRepoHeader() {
    const headerUserNode = gitHubDOM.getNode(".repo_app_header-user");

    window.addEventListener("scroll", (e) => {
        if (window.scrollY >= 370) {
            headerUserNode.classList.remove("hide");
        } else {
            headerUserNode.classList.add("hide");
        }
    });
}

function initHamBurgerMenu() {
    const hamBurgerButton = gitHubDOM.getNode(".js_hamburger_btn");
    const mobileLinks = gitHubDOM.getNode(".mbl_links_container");

    hamBurgerButton.addEventListener("click", () => {
        const mobileLinksClassList = mobileLinks.classList;
        const mobileLinksClassListArray = Array.from(mobileLinksClassList);

        if (mobileLinksClassListArray.includes("is_open")) {
            mobileLinksClassList.remove("is_open");
        } else {
            mobileLinksClassList.add("is_open");
        }
    });
}

const fetchAndMapReposAction = async () => {
    
    const repoContainerNode = gitHubDOM.getNode(".repo_container");
    const pageLoaderNode = gitHubDOM.getNode(".app_page_loader");

    pageLoaderNode.classList.add("hide");
    // repoContainerNode.classList.remove("hide");

    // animateRepoHeader();
};

        Array.from(details).forEach((detail) => {
             detail.addEventListener("toggle", event => {
                 if (detail.open) {
                     console.log('here open');
                     /* the element was toggled open */
                 } else {
                     console.log('here closed');
                     /* the element was toggled closed */
                 }
             });

         })
// fetchAndMapReposAction();

setTimeout(() => {
    initHamBurgerMenu();
    
}, 3000);

