const mongoose = require('mongoose')

mongoose.connection.on('open', () => {console.log('db connected')})

async function connectDb ({ dbUSER, dbPASSWORD }) {
    const uri = `mongodb://${dbUSER}:${dbPASSWORD}@rubbiolo-cluster-shard-00-00-4am8n.mongodb.net:27017,rubbiolo-cluster-shard-00-01-4am8n.mongodb.net:27017,rubbiolo-cluster-shard-00-02-4am8n.mongodb.net:27017/todo-project?ssl=true&replicaSet=rubbiolo-cluster-shard-0&authSource=admin&retryWrites=true&w=majority`

    await mongoose.connect(uri, { useNewUrlParser: true })
}

module.exports = connectDb