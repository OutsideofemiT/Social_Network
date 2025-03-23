import mongoose from 'mongoose';
import dayjs from 'dayjs';

const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
    },
    username: {
      type: String,
      required: true,
    },

    reactions: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,  // Enable virtuals in JSON output
      getters: true,   // Enable getters in JSON output
    },
    id: false,  // Disable the default '_id' field
  }
);

// Virtual to get the count of reactions
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// Create the Thought model
const Thought = mongoose.model('Thought', thoughtSchema);

export default Thought;
