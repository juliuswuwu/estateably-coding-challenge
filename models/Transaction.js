const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    // date: {
    //   type: Date,
    //   required: true
    // },
    description: {
      type: String,
      required: true
    },
    // account: {
    //   type: String,
    //   required: true
    // },
    category: {
      type: String,
      required: true
    },
    value: {
      type: Number,
      required: true
    },
  },
  {
    timestamps: true
  }
);

module.exports = Transaction = mongoose.model('Transaction', TransactionSchema);