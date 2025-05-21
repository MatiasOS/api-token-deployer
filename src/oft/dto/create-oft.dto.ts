export class CreateOftDto {
  blockchain: ('ethereum' | 'mantle' | 'arbitrum')[];
  protocol: string;
  name: string;
  symbol: string;
  initialSupply: number;
  distributionType: string;
  distributions: {
    blockchain: string;
    address: string;
    amount: string;
  }[];
  reserveAmount: number;
  owneable: boolean;
  ownAddress: string;
}
