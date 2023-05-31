import { Schema, model, models } from 'mongoose';
import User from './user';

const contractSchema = new Schema({
  name: String,
  date: Date,
  clauses: [String],
  parties: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],  
});

const Contract = models.Contract || model('Contract', contractSchema);

export default Contract;