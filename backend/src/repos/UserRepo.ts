import { IUser } from '@src/models/User';
import { getRandomInt } from '@src/util/misc';
import orm from './MockOrm';
import connectDB from './MongoDbOrm';
import { userSchema } from '@src/schemas/UserSchema';
import { model } from 'mongoose';

// **** Functions **** //

const User = model<IUser>('User', userSchema);
connectDB();

/**
 * Get one user.
 */
async function getOne(email: string): Promise<IUser | null> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.email === email) {
      return user;
    }
  }
  return null;
}

/**
 * See if a user with the given id exists.
 */
async function persists(id: number): Promise<boolean> {
  const db = await orm.openDb();
  for (const user of db.users) {
    if (user.id === id) {
      return true;
    }
  }
  return false;
}

/**
 * Get all users.
 */
async function getAll(): Promise<IUser[]> {
  // const mongodb =  await connectDB();
  // mongodb.Collection('users')
  return await User.find({})
  const db = await orm.openDb();
  return db.users;
}

/**
 * Add one user.
 */
async function add(user: IUser): Promise<void> {
  const db = await orm.openDb();
  // const mongodb =  await connectDB();

  const newUser = new User({
    name: user.name,
    email: user.email
  });
  await newUser.save();

  user.id = getRandomInt();
  db.users.push(user);
  return orm.saveDb(db);
}

/**
 * Update a user.
 */
async function update(user: IUser): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].id === user.id) {
      db.users[i] = user;
      return orm.saveDb(db);
    }
  }
}

/**
 * Delete one user.
 */
async function delete_(id: number): Promise<void> {
  const db = await orm.openDb();
  for (let i = 0; i < db.users.length; i++) {
    if (db.users[i].id === id) {
      db.users.splice(i, 1);
      return orm.saveDb(db);
    }
  }
}


// **** Export default **** //

export default {
  getOne,
  persists,
  getAll,
  add,
  update,
  delete: delete_,
} as const;
