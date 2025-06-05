export interface DistributionItem {
  address: `0x${string}`;
  amount: string;
}

export class CreateMerkleTreeDto {
  distribution: DistributionItem[];
}
