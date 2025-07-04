import express from 'express'

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Data Modelling of Todo App with Mongoose')
})

app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
})