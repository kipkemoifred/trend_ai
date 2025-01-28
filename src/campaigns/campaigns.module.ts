import { Module } from '@nestjs/common';

import { CampaignsController } from './campaigns.controller';
import { CampaignsService } from './campaigns.service';
import { Campaign, CampaignSchema } from './campaigns.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }])],
  providers: [CampaignsService, CampaignsService],
  controllers: [CampaignsController, CampaignsController]
})
export class CampaignsModule {}
