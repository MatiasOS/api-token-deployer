export class CreateMerkleTreeDto {
  distribution: {
    address: `0x${string}`;
    amount: number;
    blockchain: 'ethereum' | 'mantle' | 'arbitrum';
  }[];
}
