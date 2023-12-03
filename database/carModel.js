import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  dpp_class: {
    type: String,
    required: true
  },
  manufactured_by: {
    owner_id: {
      type: Number,
      required: true
    },
    owner_name: {
      type: String,
      required: true
    },
    privacy: {
      type: String,
      required: true
    }
  },
  created_at: {
    creation_time: {
      type: Date,
      required: true
    },
    privacy: {
      type: String,
      required: true
    }
  }
});

const Car = mongoose.model('Car', carSchema);

export default Car;