import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://wo945555:949494ma@cluster0-wkcho.mongodb.net/test?retryWrites=true');

const notesSchema = new mongoose.Schema({
  id: Number,
  nbName: String,
  articles: [{
    id: Number,
    title: String,
    tag: String,
    content: String,
  }]
});

const Notes = mongoose.model('Notes', notesSchema); 

export {Notes}