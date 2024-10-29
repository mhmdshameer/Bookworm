import mongoose, {Schema, Document, Model} from "mongoose";

interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role: "admin" | "member";
}

const userSchema: Schema<IUser> = new Schema({
    username:{type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type:String, required: true},
    role: {type: String, enum: ['admin', 'member'], default: 'member'}
})

const User: Model<IUser> = mongoose.models.user || mongoose.model<IUser>('User',userSchema);
export default User;