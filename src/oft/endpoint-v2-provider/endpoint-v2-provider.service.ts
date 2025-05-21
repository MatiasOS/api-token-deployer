import { Injectable } from '@nestjs/common';

/**
 * Network: arbitrum-sepolia
 * EndpointV2 address: 0x6EDCE65403992e310A62460808c4b910D972f10f
 *
 * Network: mantle-sepolia
 * EndpointV2 address: 0x6EDCE65403992e310A62460808c4b910D972f10f
 *
 * Network: sepolia
 * EndpointV2 address: 0x6EDCE65403992e310A62460808c4b910D972f10f
 **/
@Injectable()
export class EndpointV2ProviderService {
  endpointV2Address(
    chain: 'mantleSepoliaTestnet' | 'arbitrumSepolia' | 'sepolia',
  ): `0x${string}` {
    const addressMap: Record<string, `0x${string}`> = {
      mantleSepoliaTestnet: '0x6EDCE65403992e310A62460808c4b910D972f10f',
      arbitrumSepolia: '0x6EDCE65403992e310A62460808c4b910D972f10f',
      sepolia: '0x6EDCE65403992e310A62460808c4b910D972f10f',
    };

    return addressMap[chain];
  }
}
