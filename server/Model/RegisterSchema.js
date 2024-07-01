import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Define a schema for the user
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

// Middleware to hash the password before saving it to the database
userSchema.pre('save', async function(next) {
    const user = this;

    try {
        //Hash the plain password
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
        next();
    } catch (error) {
        return next(error);
    }

});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

export default User;