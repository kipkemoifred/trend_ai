import { Module } from '@nestjs/common';

import { InfluencersService } from './influencers.service';
import { InfluencersController } from './influencers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Campaign, CampaignSchema } from 'src/campaigns/campaigns.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }])],
  providers: [InfluencersService, InfluencersService],
  controllers: [InfluencersController]
})
export class InfluencersModule {}
