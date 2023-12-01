import { Schema, model} from 'mongoose';

const userSchema = new Schema({

    password: {
        type: String,
        minlength: [8, 'Password must be at least 8 characters.'],
        maxlength: [32, 'Password must be less than 32 characters.'],
        required: [true, 'Email is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        lowercase: true,
        trim: true
    }
    });

const UserModel = model('User', userSchema);

export default UserModel;
