import mongoose from "mongoose";

let iSconnected = false

const connectionDB = async () => {
    if (iSconnected) {
        console.log('Database is already connected!');
        return 
    }

    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log('Database is connected!');
        iSconnected = true
        
        return conn

    } catch (error) {
        console.log('Error: ' + error);
    }
}

export default connectionDB