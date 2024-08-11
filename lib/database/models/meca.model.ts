import { Document, Schema, model, models } from "mongoose";

export interface IMeca extends Document {
  _id: string;
  title: string;
  description?: string;
  creatorName?: string;
  createdAt: Date;
  imageUrl: string;
  note?: number;
  voteNumbers?: number;
  url?: string;
  level?: {_id: string, name: string}
  youtubeLinks?: string[];
  packs?: string[];
  workshops?: string[];
  typeMeca?: {_id: string, name: string}
  creator?: {_id: string, firstName: string, lastName: string}
}

const MecaSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  creatorName: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  note: { type: Number },
  voteNumbers: { type: Number },
  url: { type: String },
  level: { type: Schema.Types.ObjectId, ref: 'Level' },
  youtubeLinks: [String],
  packs: [String],
  workshops: [String],
  typeMeca: { type: Schema.Types.ObjectId, ref: 'Type' },
  creator: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Meca = models.Meca || model('Meca', MecaSchema);

export default Meca;