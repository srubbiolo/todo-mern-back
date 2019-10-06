const config = {
    appConfig: {
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    },
    dbConfig: {
        dbUSER: process.env.DB_USER,
        dbPASSWORD: process.env.DB_PASSWORD
    }
}

module.exports = config