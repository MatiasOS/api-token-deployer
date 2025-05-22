export class DeployMerkletreeDto {
  blockchain: 'ethereum' | 'mantle' | 'arbitrum';
  root: `0x${string}`;
  oftAddress: `0x${string}`;
}
