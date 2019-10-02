import mongoose, { Schema } from 'mongoose'

const AddressSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  province: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },
}, {
    timestamps: true
  })

export default mongoose.model('address', AddressSchema)