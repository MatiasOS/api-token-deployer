export class CreateOftDto {
  blockchain: ('ethereum' | 'mantle' | 'arbitrum')[];
  protocol: 'OFT';
  name: string;
  symbol: string;
  distributions: {
    blockchain: string;
    address: string;
    amount: string;
  }[];
}
