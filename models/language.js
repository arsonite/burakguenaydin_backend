import mongoose, { Schema } from 'mongoose';

const LanguageModel = new Schema({
  name: {
    type: String
  },
  proficiency: {
    type: Number
  },
  projects: {
    type: Array
  }
});

export default mongoose.model('Language', LanguageModel);
