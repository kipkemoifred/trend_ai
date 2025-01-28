import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Controller('campaigns')
export class CampaignsController {
    constructor(private readonly campaignService: CampaignsService) {
    
    }

    @Get()
    async getCampaigns(@Query('influencerId') influencerId: string) {
      return this.campaignService.getCampaignsByInfluencer(influencerId);
    }

    @Get('getAllCampaigns')
    async getAllCampaigns() {
      return this.campaignService.findAll();
    }

    @Post('campaigns')
async createCampaign(@Body() createCampaignDto: CreateCampaignDto) {
    return await this.campaignService.create(createCampaignDto);
}

}
