export class ConfigureOftDto {
  configurations: {
    blockchain: 'ethereum' | 'mantle' | 'arbitrum';
    address: `0x${string}`;
  }[];
}
