const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

let ReviewSchema = new mongoose.Schema({
    bookId: {
        type :ObjectId, 
        require : true ,
        ref :'bookList'},
  reviewedBy: {
    type : String,
    require : true ,
    default :  'Guest',
    trim : true
      },
  reviewedAt: {
    type :Date, 
    require : true , trim:true}
    ,
  rating: {
    type :Number,
     min : 1, max: 5, 
     require : true },
  review: {
    type : String ,
  trim : true },
  isDeleted: {
    type :   Boolean, default: false},
},{timestamps: true})

module.exports = mongoose.model('reviewList', ReviewSchema)