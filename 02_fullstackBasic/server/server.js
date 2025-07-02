import express from 'express';

const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello from server');
// });

app.get('/api/githubuserdata', (req, res) => {
    const githubUserData = [
        {
            "login": "TBS96",
            "id": 118633815,
            "avatar_url": "https://avatars.githubusercontent.com/u/118633815?v=4",
            "url": "https://api.github.com/users/TBS96",
            "html_url": "https://github.com/TBS96",
            "followers_url": "https://api.github.com/users/TBS96/followers",
            "name": "Prantik Ghosh",
            "blog": "https://prantikghosh.vercel.app/",
            "location": "Kolkata",
        },
        {
            "login": "DEEP24",
            "id": 112633816,
            "avatar_url": "https://avatars.githubusercontent.com/u/112633816?v=4",
            "url": "https://api.github.com/users/DEEP24",
            "html_url": "https://github.com/DEEP24",
            "followers_url": "https://api.github.com/users/DEEP24/followers",
            "name": "Deep Raj",
            "blog": "https://deepraj.vercel.app/",
            "location": "Mumbai",
        },
    ];
    res.send(githubUserData);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});