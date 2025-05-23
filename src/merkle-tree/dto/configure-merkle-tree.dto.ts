export class ConfigureMerkleTreeDto {
  tokenAddress: `0x${string}`;
  merkleTreeAddress: `0x${string}`;
  blockchain: 'ethereum' | 'mantle' | 'arbitrum';
  transferAmount: bigint;
}
