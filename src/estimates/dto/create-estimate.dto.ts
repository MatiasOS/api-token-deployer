export type EstimateItem = {
  blockchain: 'ethereum' | 'mantle' | 'arbitrum';
  amount: string;
  contractCreation: number;
  wiring: number;
};

export class CreateEstimateDto {
  estimates: EstimateItem[];
}
