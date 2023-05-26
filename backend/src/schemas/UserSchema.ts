import { Schema } from 'mongoose';
import {IUser, UserRoles} from '../models/User';

export const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    pwdHash:{ type: String, require: true},
    // role: { type: UserRoles, default: UserRoles.Standard, required: true}
  });