import * as mongoose from 'mongoose';

export const GuestSchema = new mongoose.Schema({
  name: String,
  brings: String,
});
