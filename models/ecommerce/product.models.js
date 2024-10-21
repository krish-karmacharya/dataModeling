import mongoose, { mongo } from 'mongoose';
const productSchema = new mongoose.Schema(
  {
    description: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
    },
    //Image can be stored in db in buffer format but its not recommende as it makes heavey
    //Use third party services eg aws bucket it gives url then we use those image
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      defautl: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    catagory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);
export const Product = mongoose.model('Product', productSchema);
