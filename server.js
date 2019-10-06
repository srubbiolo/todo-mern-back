require ('dotenv').config()
/* This up here is short version of this commented code
const dotenv = require('dotenv')
dotenv.config()
*/
const app = require('./app')
const {appConfig, dbConfig } = require('./config')
const connectDB = require('./db/mongodb')

async function initApp(appConfig, dbConfig) {
    try {
        await connectDB(dbConfig)
        app.listen(appConfig.port, () => console.log(`listen on ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
}

initApp(appConfig, dbConfig)