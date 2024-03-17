import mongoose from "mongoose";



const DBConnection = async () => {
    const DB_URL= `mongo db url`;
    try {
       await mongoose.connect(DB_URL, {
            useNewUrlParser: true
        });
        console.log('Database connected.');        
    } catch (error) {
        console.error('Error in Database Connection', error.message);
    }
}

export default DBConnection;