import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Campaign {
  @Prop()
  name: string;

  @Prop([String])
  influencers: string[];

  @Prop()
  deadline: Date;

  @Prop()
  status: string;
}

export const CampaignSchema = SchemaFactory.createForClass(Campaign);
export type CampaignDocument = Campaign & Document;
