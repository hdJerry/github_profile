let user = sessionStorage.getItem('user');

const CLIENT_ID = "69ade597d283d5c5c8b9";
const CLIENT_SECRET = "752d09a70235b7c3b20b3602e9910e15223204e2";

//encoded token to prevent auto removal by github.
const GITHUB_ENCODED_TOKEN =
    "YmVmZWZmM2Q3YjZlZWEwYjgxODQ2ZjMzNjdjMGExYzdhNGY0NWIzOQ==";

const GITHUB_DECODED_TOKEN = atob(GITHUB_ENCODED_TOKEN);



const ProfilePage = async () => {
    let app = document.querySelector('#app');
    let {
        user
    } = JSON.parse(sessionStorage.getItem('data'));


    app.innerHTML = `
        <div id="main">
        <div class="app_wrapper app_header">
            <div class="app_max_width">
            
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
                    <div class="header_search_wrapper">
                        <input type="text" placeholder="Search or jump to..." />
                        <img
                        src="https://github.githubassets.com/images/search-key-slash.svg"
                        alt=""
                        srcset=""
                        class="header_search_wrapper_slash-icon"
                        />
                    </div>
                    <div class="app_header_links">
                        <a href="/#">Pull requests</a><a href="/#">Issues</a
                        ><a href="/#">Marketplace</a><a href="/#">Explore</a>
                    </div>
                    </div>
            </div>

            <div class="flex">
                <a href="/#" class="header_notification icon"
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
                        <details class="icon">
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
                            <a href="/#">New repository</a
                            ><a href="/#">Import repository</a><a href="/#">New gist</a
                            ><a href="/#">New organization</a
                            ><a href="/#">New project</a>
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
                        <a href="/#" class="borederd_link flex"
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
                        <a href="/#">Your profile</a
                        ><a href="/#">Your repositories</a
                        ><a href="/#">Your organizations</a
                        ><a href="/#">Your projects</a><a href="/#">Your stars</a
                        ><a href="/#">Your gists</a>
                        </div>
                        <div class="modal_section">
                        <a href="/#">Feature preview</a><a href="/#">Help</a
                        ><a href="/#">Settings</a><a href="/#" onclick="signOut()">Sign out</a>
                        </div>
                    </div>
                    </details>
                </div>
                </div>
            </div>

            </div>

        </div>
        <div class="hr"></div>

            <div id="profile">
                <div class="left">
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
                    <div class="info">
                        <p class="name">${user.name || ''}</p>
                        <p class="username">${user.login || ''}</p>
                        <p class="bio">${user.bio || ''}</p>
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
                                <button class="SelectMenu-closeButton" type="button" data-toggle-for="type-options"><svg aria-label="Close menu" aria-hidden="false" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
                                    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                                </button>
                                </div>
                                <a href="/#">All</a>
                                <a href="/#">Public</a>
                                <a href="/#">Private</a>
                                <a href="/#">Sources</a>
                                <a href="/#">Forks</a>
                                <a href="/#">Archived</a>
                                <a href="/#">Mirrors</a>
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
                                <button class="SelectMenu-closeButton" type="button" data-toggle-for="type-options"><svg aria-label="Close menu" aria-hidden="false" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
                                    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                                </button>
                                </div>
                                <a href="/#">All</a>
                                <a href="/#">Js</a>
                                <a href="/#">Vue</a>
                                <a href="/#">CSS</a>
                                <a href="/#">HTML</a>
                                <a href="/#">PHP</a>
                                <a href="/#">Object-C</a>
                                <a href="/#">Ruby</a>
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
                                <button class="SelectMenu-closeButton" type="button" data-toggle-for="type-options"><svg aria-label="Close menu" aria-hidden="false" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-x">
                                    <path fill-rule="evenodd" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
                                </svg>
                                </button>
                                </div>
                                <a href="/#">Last Updated</a>
                                <a href="/#">Stars</a>
                            </div>
                         
                         </details>
                        </div>
                        `
                    }

                    <a href="https://github.com/new" class="flexbox new_repo">
                            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" height="16" width="16" class="octicon octicon-repo">
                        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    <span>
                    New
                    </span>
                    </a>
                </div>

                <div id="repo_main">
                
                </div>
                    
                </div>
            </div>


            

        </div>
    `;


    let repo_container = document.querySelector('#repo_main');
    user.repositories.nodes.forEach((res) => {

        let div = document.createElement('div');
        div.setAttribute('class', 'repo flexbox');
        div.innerHTML = `
                <div class="_left">
                    <p class="flexbox">
                        <a class="repo_name" href="${res.url}">
                            ${res.name}
                        </a>

                        ${res.isPrivate ? `<span class="private_tag">Private</span>`  : ''}
                    </p>
                    <p class="repo_desc mb-2 pr-4">${res.description ? res.description : ''}</p>

                    <div class="flexbox repo_footer">
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

                            <p>
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


};


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
                repositories(first: 20, isFork: false) {
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

            if (result.data && result.data.user) {

                sessionStorage.setItem('user', result.data.user.login);
                sessionStorage.setItem('data', JSON.stringify(result.data))
                ProfilePage();
            } else {
                alert('Invalid Username/User not found')
                LoginPage();
            }
        });

}






function LoginPage() {
    let app = document.querySelector('#app');

    app.innerHTML = `
        <div class="login">
            <label for="username">Username</label>
            <div class="input">
                <input type="text" placeholder="github username" id="username" autocomplete="false" autocapitalize="false" name="new-value">
            </div>

            <button id="submit">
                submit
            </button>
        </div>
    `;

    let submit = document.querySelector('#submit');
    submit.addEventListener('click', () => {
        let user = document.querySelector('#username').value;
        if (user && user.trim().length > 0) {
            getProfile(user);
            submit.innerText = "Processing...";
            submit.disabled = "disabled"

        } else {
            alert('Invalid Username')
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

function searchFunctions (label) {
    return label.trim().length > 0 ? 
    `
        <summary class="flexbox repo_star_button search_by_${label}">
            <span>${label}</span>
            <span class="drop_own_caret_dack"></span>
        </summary>
    ` : "";
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