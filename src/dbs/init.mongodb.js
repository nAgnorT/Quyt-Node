'use strict'

const mongoose = require('mongoose')
const {db: {host, name, port}} = requrie('../configs/config.mongodb.js')
const connectString = `mongodb://${host}:${port}/${name}`

//dev
class Database{
    constructor(){
        this.connect()
    }
    //connect
    connect(type='mongodb'){
        if(1 === 1 ) {
            mongoose.set('debug', true)
            mongoose.set('debug', {color: true})
        }
        mongoose.connect(connectString).then(_ => console.log(`Connected Mongodb Success`)).catch(err => console.log(`Error Connect`))

    }

    static getInstance(){
        if(!Database.instance){
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb