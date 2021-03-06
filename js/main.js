let user = sessionStorage.getItem('user');//store username

//encoded token to prevent auto removal by github.
const GITHUB_ENCODED_TOKEN =
    "YmVmZWZmM2Q3YjZlZWEwYjgxODQ2ZjMzNjdjMGExYzdhNGY0NWIzOQ==";

const GITHUB_DECODED_TOKEN = atob(GITHUB_ENCODED_TOKEN);


const gitHubDOM = {
    getNode: (elementSelector) => document.querySelector(elementSelector),
    getAllNode: (elementSelector) => document.querySelectorAll(elementSelector),
};


// Function to Load Profile page after username confirmed
const ProfilePage = async () => {
    let app = document.querySelector('#app');
    let {
        user
    } = JSON.parse(sessionStorage.getItem('data'));


    app.innerHTML = `
        <div id="main">
        <div class="app_wrapper app_header">
            <div class="app_header-container">
            ${ ''/*  
                Nav bar contents 
        
                */ }
                <button class="flex hamburger js_hamburger_btn">
                    <svg
                    height="24"
                    class="octicon octicon-three-bars"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="24"
                    aria-hidden="true"
                    >
                    <path
                        fill-rule="evenodd"
                        d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
                    ></path>
                    </svg>
                </button>

            <div class="flex">
                <svg 
                class="octicon octicon-mark-github logo v-align-middle" 
                height="32" 
                viewBox="0 0 16 16" 
                version="1.1" 
                width="32" 
                aria-hidden="true"
                >
                <path 
                fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                >
                </path>
                </svg>

                <div class="flex mbl_links_container">
                <div class="github_details searchbox-field">
                    <details tabindex="-5" id="searchOpt">
                        <summary>
                            <div class="header_search_wrapper">
                            <input onfocus="openSearchOptToggle()" onblur="openSearchOptToggle()" type="text" placeholder="Search or jump to..." />
                            <img
                            src="https://github.githubassets.com/images/search-key-slash.svg"
                            alt=""
                            srcset=""
                            class="header_search_wrapper_slash-icon"
                            />
                            </div>
                        </summary>

                        <div class="dropdown nav_search_dropdown">
                            <a href="#">New stuff</a
                            ><a href="#">Something here</a><a href="#">New gist</a
                            ><a href="#">SEarch results</a
                            ><a href="#">Open issues</a>
                        </div>
                        
                    </details>
                    </div>
                    <div class="app_header_links">
                        <a href="#">Pull requests</a><a href="#">Issues</a
                        ><a href="#">Marketplace</a><a href="#">Explore</a>
                    </div>
                    </div>
            </div>

            <div class="flex">
                <a href="#" class="header_notification icon"
                ><svg
                    class="octicon octicon-bell"
                    viewBox="0 0 16 16"
                    version="1.1"
                    width="16"
                    height="16"
                    aria-hidden="true"
                >
                    <path
                    d="M8 16a2 2 0 001.985-1.75c.017-.137-.097-.25-.235-.25h-3.5c-.138 0-.252.113-.235.25A2 2 0 008 16z"
                    ></path>
                    <path
                    fill-rule="evenodd"
                    d="M8 1.5A3.5 3.5 0 004.5 5v2.947c0 .346-.102.683-.294.97l-1.703 2.556a.018.018 0 00-.003.01l.001.006c0 .002.002.004.004.006a.017.017 0 00.006.004l.007.001h10.964l.007-.001a.016.016 0 00.006-.004.016.016 0 00.004-.006l.001-.007a.017.017 0 00-.003-.01l-1.703-2.554a1.75 1.75 0 01-.294-.97V5A3.5 3.5 0 008 1.5zM3 5a5 5 0 0110 0v2.947c0 .05.015.098.042.139l1.703 2.555A1.518 1.518 0 0113.482 13H2.518a1.518 1.518 0 01-1.263-2.36l1.703-2.554A.25.25 0 003 7.947V5z"
                    ></path></svg
                ></a>
            
                <div class="flex hide_mbl">
                    <div tabindex="0" class="github_details">
                        <details tabindex="0" class="icon">
                        <summary>
                            <svg
                            class="octicon octicon-plus"
                            viewBox="0 0 16 16"
                            version="1.1"
                            width="16"
                            height="16"
                            aria-hidden="true"
                            >
                            <path
                                fill-rule="evenodd"
                                d="M8 2a.75.75 0 01.75.75v4.5h4.5a.75.75 0 010 1.5h-4.5v4.5a.75.75 0 01-1.5 0v-4.5h-4.5a.75.75 0 010-1.5h4.5v-4.5A.75.75 0 018 2z"
                            ></path></svg
                            ><span class="drop_own_caret"></span>
                        </summary>
                        <div class="dropdown">
                            <a href="#">New repository</a
                            ><a href="#">Import repository</a><a href="#">New gist</a
                            ><a href="#">New organization</a
                            ><a href="#">New project</a>
                        </div>
                        </details>
                    </div>
                    <div class="github_details" tabindex="0">
                    <details tabindex="-1" class="icon">
                    <summary>
                        <img
                        class="profile_picture"
                        src="${user.avatarUrl}"
                        alt=""
                        srcset=""
                        /><span class="drop_own_caret"></span>
                    </summary>
                    <div class="dropdown">
                        <div class="modal_section">
                        <p>Signed in as <strong>${user.name}</strong></p>
                        </div>
                        <div class="modal_section">
                        <a href="#" class="borederd_link flex"
                            >${user.status 
                                ? user.status.emojiHTML 
                                : `<svg 
                                class="octicon octicon-smiley" 
                                viewBox="0 0 16 16" 
                                version="1.1" 
                                width="16" 
                                height="16" 
                                aria-hidden="true">
                                <path 
                                fill-rule="evenodd" 
                                d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                                >
                                </path>
                                </svg>
                                `
                                }
                                <span class="text"
                            >${user.status ? user.status.message : 'Set Status'}</span
                            ></a
                        >
                        </div>
                        <div class="modal_section">
                        <a href="#">Your profile</a
                        ><a href="#">Your repositories</a
                        ><a href="#">Your organizations</a
                        ><a href="#">Your projects</a><a href="#">Your stars</a
                        ><a href="#">Your gists</a>
                        </div>
                        <div class="modal_section">
                        <a href="#">Feature preview</a><a href="#">Help</a
                        ><a href="#">Settings</a><a href="#" onclick="signOut()">Sign out</a>
                        </div>
                    </div>
                    </details>
                </div>
                </div>
            </div>

            </div>

            ${ ''/*  
                Nav bar contents ends
        
                */ }

        </div>
        <div class="tabs_header flexbox lg">
        ${ ''/*  
                Tab header
        
                */ }
            <div class="left flexbox hide special-left">
                <span class="profile-picture-wrapper">
                    <img
                    class="profile_picture"
                    src="${user.avatarUrl}"
                    alt=""
                    srcset=""
                    />
                </span>
                <strong class="profile-picture-name">
                ${user.login}
                </strong>
            </div>
            <div class="right flexbox special-right">
              <a href="#" class="tab flexbox">
              <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                  </svg>
                  Overview
                  </a>
                  <a href="#" class="tab active flexbox">
                  <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
                  </svg>
                  Respositories 
                  <span class="num">
                  20
                  </span>
                  </a>
                  <a href="#" class="tab flexbox">
                  <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z">
                  </path>
                  </svg>
                  Projects
                  </a>
                  <a href="#" class="tab flexbox">
                  <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                  <path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z">
                  </path>
                  </svg>
                  Packages
                  </a>
            </div>
        
            ${ ''/*  
                Tab header ends
        
                */ }
        </div>

            <div id="profile" class="app-container">

            ${ ''/*  
                Main Contents
        
                */ }
            
                <div class="left">
                        <div class="pics_name flexbox">
                            <div id="pics">
                                <img src="${user.avatarUrl}" />
                                <div class="status">
                                    ${user.status 
                                        ? 
                                        `<span class="emoji">${user.status.emojiHTML}</span>
                                        <span class="emoji_text">${user.status.message}</span>
                                        ` 
                                        : 
                                        `<span class="emoji">
                                            <svg 
                                            class="octicon octicon-smiley" 
                                            viewBox="0 0 16 16" 
                                            version="1.1" 
                                            width="16" 
                                            height="16" 
                                            aria-hidden="true">
                                            <path 
                                            fill-rule="evenodd" 
                                            d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z"
                                            >
                                            </path>
                                            </svg>
                                        </span>
                                        <span class="emoji_text">Set Status</span>
                                        `
                                        }
                                </div>
                            </div>
                            <div class="name_login">
                                <p class="name">${user.name || ''}</p>
                                <p class="username">${user.login || ''}</p>
                            </div>
                        </div>
                    <div class="info">
                        <p class="bio">${user.bio || ''}</p>
                    </div>


                    <div class="tab_mb flexbox">
                        <a href="#" class="tab flexbox">
                        <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                            </svg>
                            Overview
                            </a>
                            <a href="#" class="tab active flexbox">
                            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                            </path>
                            </svg>
                            Respositories 
                            <span class="num">
                            20
                            </span>
                            </a>
                            <a href="#" class="tab flexbox">
                            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M1.75 0A1.75 1.75 0 000 1.75v12.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0016 14.25V1.75A1.75 1.75 0 0014.25 0H1.75zM1.5 1.75a.25.25 0 01.25-.25h12.5a.25.25 0 01.25.25v12.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25V1.75zM11.75 3a.75.75 0 00-.75.75v7.5a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75zm-8.25.75a.75.75 0 011.5 0v5.5a.75.75 0 01-1.5 0v-5.5zM8 3a.75.75 0 00-.75.75v3.5a.75.75 0 001.5 0v-3.5A.75.75 0 008 3z">
                            </path>
                            </svg>
                            Projects
                            </a>
                            <a href="#" class="tab flexbox">
                            <svg height="16" viewBox="0 0 16 16" version="1.1" width="16" aria-hidden="true">
                            <path fill-rule="evenodd" d="M8.878.392a1.75 1.75 0 00-1.756 0l-5.25 3.045A1.75 1.75 0 001 4.951v6.098c0 .624.332 1.2.872 1.514l5.25 3.045a1.75 1.75 0 001.756 0l5.25-3.045c.54-.313.872-.89.872-1.514V4.951c0-.624-.332-1.2-.872-1.514L8.878.392zM7.875 1.69a.25.25 0 01.25 0l4.63 2.685L8 7.133 3.245 4.375l4.63-2.685zM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432L2.5 5.677zm6.25 8.271l4.625-2.683a.25.25 0 00.125-.216V5.677L8.75 8.432v5.516z">
                            </path>
                            </svg>
                            Packages
                            </a>
                        </div>
                </div>
                <div class="right" id="repos">

                <div class="flexbox repo_search_header">
                    <div class="search_container">
                        <form>
                            <input placeholder="Find a repository..." />
                        </form>
                    </div>
                    
                    ${ 
                        `
                         <div tabindex="0" class="github_details">
                         <details tabindex="-2">
                            ${searchFunctions('Type')}
                            <div class="dropdown search_dropdown">
                                <div class="flexbox close_container">
                                <strong>Select type</strong>
                                <button onclick="closeAll()" class="SelectMenu-closeButton" type="button" data-toggle-for="type-options"><svg aria-label="Close menu" aria-hidden="false" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
                                    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                                </button>
                                </div>
                                <p>All</p>
                                <p>Public</p>
                                <p>Private</p>
                                <p>Sources</p>
                                <p>Forks</p>
                                <p>Archived</p>
                                <p>Mirrors</p>
                            </div>
                         
                         </details>
                        </div>
                    `}
                    ${
                        `<div tabindex="0" class="github_details">
                         <details tabindex="-3">
                            ${searchFunctions('Language')}
                            <div class="dropdown search_dropdown">
                                <div class="flexbox close_container">
                                <strong>Select type</strong>
                                <button onclick="closeAll()" class="SelectMenu-closeButton" type="button" data-toggle-for="type-options"><svg aria-label="Close menu" aria-hidden="false" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
                                    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                                </button>
                                </div>
                                <p>All</p>
                                <p>Js</p>
                                <p>Vue</p>
                                <p>CSS</p>
                                <p>HTML</p>
                                <p>PHP</p>
                                <p>Object-C</p>
                                <p>Ruby</p>
                            </div>
                         
                         </details>
                        </div>`
                    }
                    ${
                        `
                        <div tabindex="0" class="github_details">
                         <details tabindex="-4">
                            ${searchFunctions('Sort')}
                            <div class="dropdown search_dropdown">
                                <div class="flexbox close_container">
                                <strong>Select type</strong>
                                <button onclick="closeAll()" class="SelectMenu-closeButton" type="button" data-toggle-for="type-options"><svg aria-label="Close menu" aria-hidden="false" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
                                    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                                </button>
                                </div>
                                <p>Last Updated</p>
                                <p>Stars</p>
                            </div>
                         
                         </details>
                        </div>
                        `
                    }

                    <a href="https://github.com/new" class="flexbox new_repo">
                            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo">
                        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    <span class="new_repo_btn">
                    New
                    </span>
                    </a>
                </div>

                <div id="repo_main">
                
                </div>
                    
                </div>

                ${ ''/*  
                Main contents Ends
        
                */ }
            </div>

            <div class="app_page_loader">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M16 0C7.16 0 0 7.16 0 16C0 23.08 4.58 29.06 10.94 31.18C11.74 31.32 12.04 30.84 12.04 30.42C12.04 30.04 12.02 28.78 12.02 27.44C8 28.18 6.96 26.46 6.64 25.56C6.46 25.1 5.68 23.68 5 23.3C4.44 23 3.64 22.26 4.98 22.24C6.24 22.22 7.14 23.4 7.44 23.88C8.88 26.3 11.18 25.62 12.1 25.2C12.24 24.16 12.66 23.46 13.12 23.06C9.56 22.66 5.84 21.28 5.84 15.16C5.84 13.42 6.46 11.98 7.48 10.86C7.32 10.46 6.76 8.82 7.64 6.62C7.64 6.62 8.98 6.2 12.04 8.26C13.32 7.9 14.68 7.72 16.04 7.72C17.4 7.72 18.76 7.9 20.04 8.26C23.1 6.18 24.44 6.62 24.44 6.62C25.32 8.82 24.76 10.46 24.6 10.86C25.62 11.98 26.24 13.4 26.24 15.16C26.24 21.3 22.5 22.66 18.94 23.06C19.52 23.56 20.02 24.52 20.02 26.02C20.02 28.16 20 29.88 20 30.42C20 30.84 20.3 31.34 21.1 31.18C24.2763 30.1077 27.0363 28.0664 28.9917 25.3432C30.947 22.6201 31.9991 19.3524 32 16C32 7.16 24.84 0 16 0Z"
                    fill="black"
                />
                </svg>
            </div>
            

        </div>
    `;


    let repo_container = document.querySelector('#repo_main');

    // Populating with the repo values
    user.repositories.nodes.forEach((res) => {

        let div = document.createElement('div');
        div.setAttribute('class', 'repo flexbox');
        div.innerHTML = `
                <div class="_left">
                    <p class="flexbox mb-1">
                        <a class="repo_name" href="${res.url}">
                            ${res.name}
                        </a>

                        ${res.isPrivate ? `<span class="private_tag">Private</span>`  : ''}
                    </p>
                    <p class="repo_desc mb-2 pr-4">${res.description ? res.description : ''}</p>

                    <div class="flexbox repo_footer pt-2">
                        ${
                            res.languages.nodes.length > 0 
                            ?
                            `
                                <div class="flexbox language">
                                    <span
                                    class="lang_color"
                                    style="background-color: ${res.languages.nodes[0].color}"
                                    ></span
                                    >${res.languages.nodes[0].name}
                                </div>
                            `
                            :

                            ''
                        }
                       
                        ${RepoOtherDetails({
                            count: res.stargazerCount,
                            svg: `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="octicon octicon-star mr-1"
                            viewBox="0 0 16 16"
                            version="1.1"
                            aria-hidden="true"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                            ></path>
                        </svg>`,
                            })}


                            ${RepoOtherDetails({
                            count: res.forkCount,
                            svg: `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            aria-label="fork"
                            class="octicon octicon-repo-forked"
                            viewBox="0 0 16 16"
                            version="1.1"
                            role="img"
                            >
                            <path
                                fill-rule="evenodd"
                                d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                            ></path>
                            </svg>`,
                            })}

                            <p class="date-span">
                                 Updated on ${formatDate(res.updatedAt)}
                            </p>
                    </div>
                </div>

                <div class="_right">
                    <button class="flexbox repo_star_button">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="octicon octicon-star mr-1"
                        viewBox="0 0 16 16"
                        version="1.1"
                        aria-hidden="true"
                        >
                        <path
                            fill-rule="evenodd"
                            d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                        ></path></svg
                        >
                        <span>Star</span>
                    </button>
               </div>
        `;

        repo_container.appendChild(div);
    })



    dropdownFunction();//initiate the dropdown to prevent multiple dropdowns from opening

    initHamBurgerMenu();//initiates the bugger menu

    if (user) {
        fetchAndMapReposAction();//initiates the loaded when pulling user data

    }

};


//Functions to pull user profiles/repos

const getProfile = (user) => {



    let auth = {
        "Authorization": `token ${GITHUB_DECODED_TOKEN}`
    }

    fetch('https://api.github.com/graphql', {
            method: 'POST',
            mode: "cors",
            cache: "no-cache",
            referrerPolicy: "no-referrer",
            headers: {
                'Content-Type': 'application/json',
                ...auth,
            },
            body: JSON.stringify({
                query: `
        query($username: String!){
            user(login: $username) {
                status {
                    emojiHTML
                    message
                    __typename
                }
                name
                login
                bio
                company
                avatarUrl
                followers {
                    totalCount
                }
                repositories(last: 20) {
                    nodes {
                        name
                        description
                        url
                        stargazerCount
                        updatedAt
                        forkCount
                        isPrivate
                        languages(first: 5, orderBy: {
                            field: SIZE,
                            direction: DESC
                        }) {
                            nodes {
                                color
                                name
                                __typename
                            }
                            __typename
                        }
                        __typename
                    }
                    __typename
                }
            }
        }
        `,
                variables: {
                    "username": user,
                },
            }),
        })
        .then((res) => res.json())
        .then((result) => {
            console.log(result);

             let alert = gitHubDOM.getNode('.alert'); //Invalid Username/User not found
             let message = gitHubDOM.getNode('.message');

            if (result.data && result.data.user) {

                sessionStorage.setItem('user', result.data.user.login);
                sessionStorage.setItem('data', JSON.stringify(result.data))
                ProfilePage();
            } else {
                // alert('Invalid Username/User not found')

                message.innerText = 'Invalid Username/User not found';
                alert.classList.add('active');

                setTimeout(() => {
                    LoginPage();
                }, 5000);
            }
        });

}





// Page to input the username
function LoginPage() {
    let app = document.querySelector('#app');

    app.innerHTML = `
    <div class="login_page flexbox">

    <div class="alert flexbox">
        <p class="message"></p>
        <svg  width="14" height="14" class="close" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
      </svg>
    </div>
        <div class="login flexbox">
            <div class="signin_logo">
                <svg 
                class="octicon octicon-mark-github logo v-align-middle" 
                height="32" 
                viewBox="0 0 16 16" 
                version="1.1" 
                width="32" 
                aria-hidden="true"
                >
                <path 
                fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                >
                </path>
                </svg>
            </div>
            <label for="username">Username</label>
            <div class="input">
                <input type="text" placeholder="Github username" id="username" autocomplete="false" autocapitalize="false" name="new-value">
                <img
                    src="https://github.githubassets.com/images/search-key-slash.svg"
                    alt=""
                    srcset=""
                    class="header_search_wrapper_slash-icon"
                    />
            </div>

            <button class="submit" id="submit">
                Submit
            </button>
        </div>
    
    </div>
    `;

    let submit = gitHubDOM.getNode('#submit');

    // Alert components
    let close = gitHubDOM.getNode('.close');
    let alert = gitHubDOM.getNode('.alert');
    let message = gitHubDOM.getNode('.message');

    close.addEventListener('click', () =>{
        alert.classList.remove('active')
    })

     // Alert components 

     
    submit.addEventListener('click', () => {
        let user = gitHubDOM.getNode('#username');
        if (user.value && user.value.trim().length > 0) {
            getProfile(user.value);
            submit.innerText = "Processing...";
            submit.disabled = "disabled";
            user.disabled = "disabled";

        } else {
          message.innerText  = 'Invalid Username';
          alert.classList.add('active')

          setTimeout(() => {
               alert.classList.remove('active')
          }, 5000);
        }
    });


};




function formatDate(date_str) {
    const d = new Date(date_str);
    const ye = new Intl.DateTimeFormat("en", {
        year: "numeric"
    }).format(d);
    const mo = new Intl.DateTimeFormat("en", {
        month: "short"
    }).format(d);
    const da = new Intl.DateTimeFormat("en", {
        day: "2-digit"
    }).format(d);

    return `${da} ${mo} ${ye}`;
}

function RepoOtherDetails({
    count,
    svg
}) {
    return count > 0 ?
        `
    <button class="action_button">
    ${svg}
    ${count}
  </button>
  ` :
        "";
}

function searchFunctions(label) {
    return label.trim().length > 0 ?
        `
        <summary class="flexbox repo_star_button search_by_${label}">
            <span>${label}</span>
            <span class="drop_own_caret_dack"></span>
        </summary>
    ` : "";
}


function dropdownFunction() {


    let Details = document.querySelectorAll('details');

    Array.from(Details).forEach((detail) => {

        detail.addEventListener('click', (e) => {
            e.stopPropagation();
            e.stopImmediatePropagation();

            if (detail.open) {
                // console.log(detail);
                e.target.open = false;

                return false;
            }


            Details.forEach((Odetail) => {



                if (e.target !== Odetail) {
                    Odetail.open = false;
                } else {
                    Odetail.open = true
                }
            })

        })

    })
}


function animateRepoHeader() {
    const headerUserNode = gitHubDOM.getNode(".tabs_header .left");
    let name_login = gitHubDOM.getNode('.name_login');

    window.addEventListener("scroll", (e) => {
        if (window.scrollY >= 370) {
            headerUserNode.classList.remove("hide");
            name_login.style.display = "none"
        } else {
            headerUserNode.classList.add("hide");
            name_login.style.display = "block"
        }
    });
}

async function fetchAndMapReposAction() {

    const repoContainerNode = gitHubDOM.getNode(".repo_container");
    const pageLoaderNode = gitHubDOM.getNode(".app_page_loader");

    pageLoaderNode.classList.add("hide");
    // repoContainerNode.classList.remove("hide");

    animateRepoHeader();
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

function openSearchOptToggle() {
    const searchOpt = gitHubDOM.getNode("#searchOpt");
    if (searchOpt.open) {
        searchOpt.open = false;
    } else {
        searchOpt.open = true
        closeAll(searchOpt);
    }
}



function closeAll(value = null) {
    let Details = document.querySelectorAll('details');
    Details.forEach((detail) => {
        if (value !== detail) {
            detail.open = false;

        }
    })
}


function signOut() {
    sessionStorage.clear();
    LoginPage();
}

(async function () {
    if (user) {

        await getProfile(user)
        ProfilePage()
    } else {
        LoginPage();
    }
})();
