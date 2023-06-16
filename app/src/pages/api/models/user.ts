import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: String,
  password: String,
  contracts: [{
    type: Schema.Types.ObjectId,
    ref: 'Contract'
  }],  
});

const User = models.User || model('User', userSchema);

export default User;