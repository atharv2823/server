import { Schema, model } from "mongoose";

const watchSchema = new Schema({
    brand : String,
    price : String,

},
{
    timestamps:true
})

const Watch = model("Watch", watchSchema)

export default Watch