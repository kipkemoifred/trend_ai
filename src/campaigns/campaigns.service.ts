import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign, CampaignDocument } from './campaigns.schema';
import { Model } from 'mongoose';
import { CreateCampaignDto } from './dto/create-campaign.dto';

@Injectable()
export class CampaignsService {
    constructor(@InjectModel(Campaign.name) private campaignModel: Model<CampaignDocument>) {}

    async getCampaignsByInfluencer(influencerId: string): Promise<Campaign[]> {
      return this.campaignModel.find({ influencers: influencerId }).exec();
    }
 
    async findAll(): Promise<Campaign[]> {
        const result = await this.campaignModel.find().exec();
        console.log('findAll Result:', JSON.stringify(result, null, 2)); 
        return result;
      }

      async create(createCampaignDto: CreateCampaignDto): Promise<Campaign> {
        const campaign = new this.campaignModel(createCampaignDto);
        return await campaign.save();
      }

      async findOne(id: string): Promise<Campaign> {
        const campaign = await this.campaignModel.findById(id).exec();
        if (!campaign) {
          throw new NotFoundException(`Campaign with ID ${id} not found`);
        }
        return campaign;
      }
    

    //   async update(
    //     id: string,
    //     updateCampaignDto: UpdateCampaignDto,
    //   ): Promise<Campaign> {
    //     const updatedCampaign = await this.campaignModel
    //       .findByIdAndUpdate(id, updateCampaignDto, { new: true })
    //       .exec();
    //     if (!updatedCampaign) {
    //       throw new NotFoundException(`Campaign with ID ${id} not found`);
    //     }
    //     return updatedCampaign;
    //   }
    
    
      async remove(id: string): Promise<Campaign> {
        const deletedCampaign = await this.campaignModel.findByIdAndDelete(id).exec();
        if (!deletedCampaign) {
          throw new NotFoundException(`Campaign with ID ${id} not found`);
        }
        return deletedCampaign;
      }
}
