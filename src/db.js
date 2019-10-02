import mongoose from 'mongoose'

export const connectDB = (dbCfg, callback) => {
  let mongoDBURL
  const connCfg = {
    poolSize: dbCfg.poolSize,
    auth: null,
    useNewUrlParser: true
  }
  if (dbCfg.dbUser) {
    mongoDBURL = `mongodb://${dbConfig.dbUser}:${dbConfig.dbPass}@${dbConfig.dbHost}/${dbConfig.dbDatabase}`
    connCfg.auth = { authdb: dbConfig.authdb }
  } else {
    mongoDBURL = `mongodb://${dbCfg.dbHost}/${dbCfg.dbDatabase}`
  }

  mongoose.connect(mongoDBURL, connCfg)
  const db = mongoose.connection

  db.on('error', err => {
    callback(err)
  });

  db.once('open', () => {
    callback()
  })

}