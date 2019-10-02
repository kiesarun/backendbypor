import express from 'express'
import router from './routes'
import bodyParser from 'body-parser'
import { connectDB } from './db'
import session from 'express-session'
import connectMongo from 'connect-mongo'
import mongoose from 'mongoose'

const dbCfg = {
    dbHost: 'localhost:27017',
    bdUser: '',
    dbPass: '',
    dbDatabase: 'testDB',
    poolSize: 5,
    authdb: ''
}

const MongoStore = connectMongo(session)

const app = express()

app.use(session({
  secret: 'foo',
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())
app.use(router)

connectDB(dbCfg, err => {
    if (err) {
      console.error("Can't connect to DB")
    } else {
      app.listen(8080, () => {
        console.log('Server started at port 8080')
      })
    }
  })