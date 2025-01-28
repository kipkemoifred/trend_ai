import { Body, Controller, Get, Param, Patch } from '@nestjs/common';

@Controller('influencers')
export class InfluencersController {
    influencerService: any;
    @Get('campaign-participants/:campaignId')
    async getCampaignParticipants(@Param('campaignId') campaignId: string) {
      return this.influencerService.findCampaignParticipants(campaignId);
    }
  
    @Patch('approve-submission/:submissionId')
    async approveSubmission(
      @Param('submissionId') submissionId: string,
      @Body('status') status: 'approved' | 'rejected'
    ) {
      return this.influencerService.updateSubmissionStatus(submissionId, status);
    }
}
