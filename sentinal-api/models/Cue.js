import mongoose, { Schema } from 'mongoose';

const CueSchema = new Schema(
  {
    picture: {
      type: String,
      required: true,
    },
    model: {
        type: String,
        required: true,
    },
    cameraIp: {
        type: String,
        required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model('cue', CueSchema);
