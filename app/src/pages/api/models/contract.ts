import { Status } from '@/models/Status';
import { Schema, model, models } from 'mongoose';

const contractSchema = new Schema({
  name: String,
  date: Date,
  parties: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  status: {
    type: String,
    enum: Status,
    default: Status.NEW,
    required: true
  },  
  clauses: [
    {
      text: {
        type: String,
        required: true    
      },
      number: {
        type: Number,
        required: true
      }
    }
  ],
});

const Contract = models.Contract || model('Contract', contractSchema);

export default Contract;