import { Injectable } from '@nestjs/common';
import { CreateEstimateDto, EstimateItem } from './dto/create-estimate.dto';
import { TokenValueService } from 'src/token-value/token-value.service';

type GroupedEstimates = Record<string, EstimateItem[]>;

export interface EstimateResultItem {
  blockchain: string;
  hiringEstimate: number;
  contractCreationEstimate: number;
}

@Injectable()
export class EstimatesService {
  constructor(private readonly coingreckoService: TokenValueService) {}

  private groupByBlockchain(dto: CreateEstimateDto): GroupedEstimates {
    return dto.estimates.reduce<GroupedEstimates>((acc, est) => {
      const key = est.blockchain;
      if (!acc[key]) acc[key] = [];
      acc[key].push(est);
      return acc;
    }, {} as GroupedEstimates);
  }

  async estimateByBlockchain(
    createEstimateDto: CreateEstimateDto,
  ): Promise<EstimateResultItem[]> {
    const grouped = this.groupByBlockchain(createEstimateDto);

    const items = await Promise.all(
      Object.entries(grouped).map(async ([blockchain, estimates]) => {
        const tokenValue =
          await this.coingreckoService.getTokenValue(blockchain);

        const { hiringEstimate, contractCreationEstimate } = estimates.reduce(
          (sums, est) => {
            const base = tokenValue * parseFloat(est.amount);
            return {
              hiringEstimate: sums.hiringEstimate + base * est.wiring,
              contractCreationEstimate:
                sums.contractCreationEstimate + base * est.contractCreation,
            };
          },
          { hiringEstimate: 0, contractCreationEstimate: 0 },
        );

        return { blockchain, hiringEstimate, contractCreationEstimate };
      }),
    );

    return items;
  }
}
