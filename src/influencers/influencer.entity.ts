import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Influencer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: [String] })
  campaignIds: string[]; // List of campaign IDs the influencer is part of
}

export const InfluencerSchema = SchemaFactory.createForClass(Influencer);
