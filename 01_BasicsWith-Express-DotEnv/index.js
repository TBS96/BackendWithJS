require('dotenv').config()
const express = require('express')

const app = express()

const PORT = process.env.PORT

const githubUserData = {
    "login": "TBS96",
    "id": 118633815,
    "node_id": "U_kgDOBxI1Vw",
    "avatar_url": "https://avatars.githubusercontent.com/u/118633815?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/TBS96",
    "html_url": "https://github.com/TBS96",
    "followers_url": "https://api.github.com/users/TBS96/followers",
    "following_url": "https://api.github.com/users/TBS96/following{/other_user}",
    "gists_url": "https://api.github.com/users/TBS96/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/TBS96/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/TBS96/subscriptions",
    "organizations_url": "https://api.github.com/users/TBS96/orgs",
    "repos_url": "https://api.github.com/users/TBS96/repos",
    "events_url": "https://api.github.com/users/TBS96/events{/privacy}",
    "received_events_url": "https://api.github.com/users/TBS96/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Prantik Ghosh",
    "company": null,
    "blog": "https://prantikghosh.vercel.app/",
    "location": "Kolkata",
    "email": null,
    "hireable": true,
    "bio": "A passionate Front-End Web Developer",
    "twitter_username": "9theblacksheep6",
    "public_repos": 64,
    "public_gists": 2,
    "followers": 4,
    "following": 20,
    "created_at": "2022-11-19T20:09:49Z",
    "updated_at": "2025-07-01T15:58:43Z"
}

// GET method to send responses
app.get('/', (req, res) => {
    res.send('Hi. Welcome to root page!')
})

app.get('/login', (req, res) => {
    res.send({ username: 'prantik', password: 'abcd1234' })
})

app.get('/signup', (req, res) => {
    res.send('<h1>Welcome to signup page</h1>')
})

app.get('/error', (req, res) => {
    res.status(404).send('<h1>Error! 404 not found.</h1>')
})

app.get('/githubuserdata', (req, res) => {
    res.json(githubUserData)
})

app.listen(PORT, () => {
    console.log(`Your server is running at: https://localhost:${PORT}`);
})