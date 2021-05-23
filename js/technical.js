

const gitHubDOM = {
    getNode: (elementSelector) => document.querySelector(elementSelector),
    getAllNode: (elementSelector) => document.querySelectorAll(elementSelector),
};

const gitHubDetailsNode = gitHubDOM.getAllNode(".github_details");

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

Array.from(gitHubDetailsNode).forEach((currentTarget) => {
    const detailsNode = currentTarget.querySelector("details");
    console.log();
    currentTarget.addEventListener("blur", () => {


        setTimeout(() => {
            detailsNode.open = false;
            detailsNode.style.pointerEvents = "none";
        }, 200);
    });

    currentTarget.addEventListener("focus", () => {

        console.log(detailsNode);
        detailsNode.open = true;
        detailsNode.style.pointerEvents = "unset";
    });
});

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

// fetchAndMapReposAction();

setTimeout(() => {
    // initMiniModals();
    initHamBurgerMenu();
    
}, 3000);
