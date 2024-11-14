const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
  //when any user create a note so another user does not see that notes. so we have to link notes with particular user. it insures which user has its own notes
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    defualt: "General"
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('notes', NotesSchema)