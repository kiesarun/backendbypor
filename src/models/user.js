import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  address: {
      type: Schema.Types.ObjectId,
      ref: 'address'
  }
}, {
    timestamps: true
  })

export default mongoose.model('user', UserSchema)