

const mongodb = require(`mongodb`)
const mongoClient = mongodb.MongoClient
const connectionUrl = `mongodb://127.0.0.1:27017`
const dbname ="project1"
mongoClient.connect( connectionUrl , (error, res1) =>{
    if (error) {
        return console.log(`error has occured`)
    }
    console.log(`All Perf`)
    const db = res1.db(dbname)
    ///////////////////////////////////////////////////
    db.collection('users').insertOne({
        name :`islam`,
        age : 26
    },
    
    (error , data) =>{
        if (error) {
           console.log(`Unable to insert data`) 
        }
        console.log(data.insertedId)
    })
///////////////////////////////////////////////////
db.collection('users').insertMany([
    {
    name :`islam`,
    age : 27
   },
   {
    name :`asmaa`,
    age : 24
   },
   {
    name :`ebrahiem`,
    age : 36
   },
   {
    name :`ahmed`,
    age : 27
   },
   {
    name :`reem`,
    age : 27
   },
   {
    name :`islam`,
    age : 26
   },
   {
    name :`asmaa`,
    age : 27
   },
   {
    name :`ebrahiem`,
    age : 36
   },
   {
    name :`ahmed`,
    age : 24
   },
   {
    name :`reem`,
    age : 27
   }
] ,
(error , data) =>{
    if (error) {
       console.log(`Unable to insert data`) 
    }
    console.log(data.insertedCount)
})

/////////////////////////////////////////////////////////////////////
db.collection(`users`).find({age :27}).limit(3).toArray((error , users) =>{
    if (error) {
       return console.log(`error has occured`) 
    }
    console.log(users)
})
///////////////////////////////////////////////////
db.collection('users').updateMany({} ,{
    $inc:{ age : 10}
} )
.then((data1) =>{console.log(data1.modifiedCount)})
.catch((error) =>{ console.log(error)})
///////////////////////////////////////////////////
db.collection('users').updateMany({} ,{
    $set:{ name :"osama"} ,
    $inc:{ age : 4}
},{limit:4} )
.then((data1) =>{console.log(data1.modifiedCount)})
.catch((error) =>{ console.log(error)})
// /////////////////////////////////////////////////////////
db.collection(`users`).deleteMany({age:41})
.then((data1) =>{ console.log(data1.deletedCount)})
.catch((error) => {console.log(error)})


})














