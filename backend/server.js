const express = require('express')
const mysql = require('mysql')
const path = require('path')

const app = express()
app. use(express.static(path.join(__dirname, 'build')))
app. use(express.json())

const port = 8000 //change port in frontend package.json "proxy" if needed

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "sern"
})
    
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})