import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { CampaignsModule } from './campaigns/campaigns.module';
import { InfluencersModule } from './influencers/influencers.module';
import { PerformanceModule } from './performance/performance.module';
import { ApprovalsModule } from './approvals/approvals.module';
import { Campaign, CampaignSchema } from './campaigns/campaigns.schema';


@Module({
  imports: [    
    MongooseModule.forRoot("mongodb+srv://fred:fred@students.6pebb.mongodb.net/?retryWrites=true&w=majority&appName=students"),
    MongooseModule.forFeature([{ name: Campaign.name, schema: CampaignSchema }]),
    // MongooseModule.forFeature([{ name: Performance.name, schema: PerformanceSchema }]),
    CampaignsModule,
    InfluencersModule,
    PerformanceModule,
    ApprovalsModule,
 ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
