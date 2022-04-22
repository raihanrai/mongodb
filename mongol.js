const { MongoClient } = require("mongodb");
const { resourceLimits } = require("worker_threads");

const uri = `mongodb://127.0.0.1:27017`;

const dbName = `games`

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
client.connect((error, client) => {
    if (error) {
        return console.log(`Koneksi Gagal :<`)
    }

    //pilih database (games)
    const db = client.db(dbName)

    // db.collection(`games`).insertOne({
    //         nama: "EVE Online",
    //         genre: "mmoRPG"
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log(`Gagal menambahkan Data`)
    //         }
    //         console.log(result);
    //     }
    // )




    // db.collection(`abc`).insertMany(
    //     [{
    //             nama: " warframe",
    //             genre: "sci-fi fps"
    //         },
    //         {
    //             nama: "warface",
    //             genre: "fps"
    //         }

    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log(`gagal menambahkan data`)
    //         }
    //         console.log(result);
    //     }

    // )




    // console.log(
    //     db.collection(`abc`).find().toArray((error, result) => {

    //         console.log(result);
    //     })
    // )
    // console.log(
    //     db.collection(`games`).find({ nama: "EVE Online" }).toArray((error, result) => {

    //         console.log(result);
    //     })
    // )
    //---MENGUBAH DATA
    // db.collection(`games`).updateOne({
    //     nama: "EVE Online",

    // }, {
    //     $set: {
    //         nama: "Toram",

    //     }
    // })
    //----MENGEDELTE DATA
    db.collection(`games`).deleteOne({
        _id: ObjectId("625b05f0fff7b998636493c5"),
    }).then((result) => {
        console.log(result);
    })
})