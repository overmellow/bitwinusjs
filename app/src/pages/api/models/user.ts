import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: String,
  password: String  
});

const User = models.User || model('User', userSchema);

export default User;