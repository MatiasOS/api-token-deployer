export class CreateMerkleTreeDto {
  distribution: {
    address: string;
    amount: number;
    blockchain: string;
  }[];
}
