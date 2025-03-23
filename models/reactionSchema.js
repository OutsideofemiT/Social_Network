import mongoose from 'mongoose';
import dayjs from 'dayjs';

const { Schema, Types } = mongoose;

const reactionSchema = new Schema(
	{
		reactionId : {
		type: Schema.Types.ObjectId(),
		default: () => new Types.PbjectId(),
		}, 
		reactionBody: {
			type: String,
			required: true,
			maxlength: 280,
		},
		username: {
			type: string,
			required: true,
		},
		createdAt: {
			Date: Date.now,
			get: (timestamp) => dayjs(timestamp).format('MMM DD, YYYY [at] hh:mm a'),
		}
	},
	{
	  toJSON: {
		getters: true, // ensures getters (like the date formatter) are included in JSON
	  },
	  id: false, // No virtual `id` field is needed
	}
  );
  
  export default reactionSchema;

		