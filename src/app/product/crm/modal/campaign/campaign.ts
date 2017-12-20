export class Campaign {
    CampaignId: number;
    CampaignName: string;
    CampaignOwner: string;
    Status: string;
    ParentCampign: string;
    StartDate: Date;
    EndDate: Date;
    Type: string;
    Description: string;
    NumSent: number;
    BudgetCost: number;
    ExpectedResponse: number;
    ActualCost: number;
    ExpectedRevenue: number;
}
