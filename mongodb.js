// CRUD create read update delete

const { MongoClient, ObjectID, ObjectId} = require('mongodb')

const connectionUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

     const db = client.db(databaseName)

    // db.collection('users').deleteOne({
    //     age: 27
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').deleteOne({
        description: 'Do the dishes'
    }).then((result) => {
    console.log(result)
    }).catch((error) => {
    console.log(error)
    })

})

// cmd to start 
// /Users/shock/mongodb/bin/mongod.exe --dbpath=/Users/shock/mongodb-data