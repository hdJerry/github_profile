let user = sessionStorage.getItem('user');

const CLIENT_ID="69ade597d283d5c5c8b9";
const CLIENT_SECRET="752d09a70235b7c3b20b3602e9910e15223204e2";



const ProfilePage = async () => {
    let app = document.querySelector('#app');
    let {user} = JSON.parse(sessionStorage.getItem('data'));


    app.innerHTML = `
        <div id="main">
        <div class="navbar">
            <div class="nav_left">
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

            <div class="nav_right">
                <div class="nav_pics">
                   <img src="${user.avatarUrl}" />
                </div>
            </div>
        </div>
        <div class="hr"></div>

            <div id="profile">
                <div class="left">
                    <div id="pics">
                        <img src="${user.avatarUrl}" />
                        <div class="status">
                            ${user.status ? user.status.emojiHTML : ''}
                        </div>
                    </div>
                    <div class="info">
                        <p class="name">${user.name || ''}</p>
                        <p class="username">${user.login || ''}</p>
                        <p class="bio">${user.bio || ''}</p>
                    </div>
                </div>
                <div class="right" id="repos">
                    
                </div>
            </div>

        </div>
    `;


    let repo_container = document.querySelector('#repos');
    user.repositories.edges.forEach((res) => {
        let div = document.createElement('div');
        div.setAttribute('class', 'repo');
        div.innerHTML = `
            <p>${res.node.name}</p>
            <p>${res.node.description}</p>
        `;

        repo_container.appendChild(div);
    })


};


const getProfile = (user) => {

    
        
    let auth = {
        "Authorization": `token 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`
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
                    emoji
                }
                name
                login
                bio
                company
                avatarUrl
                followers {
                    totalCount
                }
                repositories(first: 20) {
                    edges {
                        node {
                            name
                            forkCount
                            stargazerCount
                            description
                            languages(first: 1) {
                                nodes {
                                    name
                                    color
                                }
                            }
                        }
                    }
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

            if(result.data && result.data.user) {

                sessionStorage.setItem('user', result.data.user.login);
                sessionStorage.setItem('data', JSON.stringify(result.data))
                ProfilePage();
            } else {
                alert('Invalid Username/User not found')
                LoginPage();
            }
        });

}






function LoginPage () {
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
            submit.disabled="disabled"

        } else {
            alert('Invalid Username')
        }
    });


};




(async function () {
if (user) {

    await getProfile(user)
    ProfilePage()
} else {
    LoginPage();
}
})();
