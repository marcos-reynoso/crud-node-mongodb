import { Schema, model } from 'mongoose';

const task = new Schema(
	{
		title: { type: String, required: true, trim: true },
		description: { type: String, required: true, trim: true },
		completed: { type: Boolean, default: false },
	},
	{ timestamps: true }
);

export default model('Task', task);
