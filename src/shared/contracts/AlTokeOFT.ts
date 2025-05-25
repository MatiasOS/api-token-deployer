import { Contract } from './contracts.service';

export const AlTokeOFT: Contract = {
  contractName: 'AlTokeOFT',
  abi: [
    {
      inputs: [
        {
          internalType: 'string',
          name: '_name',
          type: 'string',
        },
        {
          internalType: 'string',
          name: '_symbol',
          type: 'string',
        },
        {
          internalType: 'address',
          name: '_lzEndpoint',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_delegate',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_distributor',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_amount',
          type: 'uint256',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'allowance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'needed',
          type: 'uint256',
        },
      ],
      name: 'ERC20InsufficientAllowance',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'needed',
          type: 'uint256',
        },
      ],
      name: 'ERC20InsufficientBalance',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'approver',
          type: 'address',
        },
      ],
      name: 'ERC20InvalidApprover',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'receiver',
          type: 'address',
        },
      ],
      name: 'ERC20InvalidReceiver',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'ERC20InvalidSender',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'ERC20InvalidSpender',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidDelegate',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidEndpointCall',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidLocalDecimals',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'options',
          type: 'bytes',
        },
      ],
      name: 'InvalidOptions',
      type: 'error',
    },
    {
      inputs: [],
      name: 'LzTokenUnavailable',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: 'eid',
          type: 'uint32',
        },
      ],
      name: 'NoPeer',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'msgValue',
          type: 'uint256',
        },
      ],
      name: 'NotEnoughNative',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'addr',
          type: 'address',
        },
      ],
      name: 'OnlyEndpoint',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: 'eid',
          type: 'uint32',
        },
        {
          internalType: 'bytes32',
          name: 'sender',
          type: 'bytes32',
        },
      ],
      name: 'OnlyPeer',
      type: 'error',
    },
    {
      inputs: [],
      name: 'OnlySelf',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'OwnableInvalidOwner',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'OwnableUnauthorizedAccount',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'token',
          type: 'address',
        },
      ],
      name: 'SafeERC20FailedOperation',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'result',
          type: 'bytes',
        },
      ],
      name: 'SimulationResult',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'amountLD',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'minAmountLD',
          type: 'uint256',
        },
      ],
      name: 'SlippageExceeded',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'eid',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'msgType',
              type: 'uint16',
            },
            {
              internalType: 'bytes',
              name: 'options',
              type: 'bytes',
            },
          ],
          indexed: false,
          internalType: 'struct EnforcedOptionParam[]',
          name: '_enforcedOptions',
          type: 'tuple[]',
        },
      ],
      name: 'EnforcedOptionSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'inspector',
          type: 'address',
        },
      ],
      name: 'MsgInspectorSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'guid',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint32',
          name: 'srcEid',
          type: 'uint32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'toAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amountReceivedLD',
          type: 'uint256',
        },
      ],
      name: 'OFTReceived',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'guid',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint32',
          name: 'dstEid',
          type: 'uint32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'fromAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amountSentLD',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'amountReceivedLD',
          type: 'uint256',
        },
      ],
      name: 'OFTSent',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint32',
          name: 'eid',
          type: 'uint32',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'peer',
          type: 'bytes32',
        },
      ],
      name: 'PeerSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'preCrimeAddress',
          type: 'address',
        },
      ],
      name: 'PreCrimeSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'SEND',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'SEND_AND_CALL',
      outputs: [
        {
          internalType: 'uint16',
          name: '',
          type: 'uint16',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'srcEid',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'sender',
              type: 'bytes32',
            },
            {
              internalType: 'uint64',
              name: 'nonce',
              type: 'uint64',
            },
          ],
          internalType: 'struct Origin',
          name: 'origin',
          type: 'tuple',
        },
      ],
      name: 'allowInitializePath',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'approvalRequired',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: '_eid',
          type: 'uint32',
        },
        {
          internalType: 'uint16',
          name: '_msgType',
          type: 'uint16',
        },
        {
          internalType: 'bytes',
          name: '_extraOptions',
          type: 'bytes',
        },
      ],
      name: 'combineOptions',
      outputs: [
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimalConversionRate',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'endpoint',
      outputs: [
        {
          internalType: 'contract ILayerZeroEndpointV2',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: 'eid',
          type: 'uint32',
        },
        {
          internalType: 'uint16',
          name: 'msgType',
          type: 'uint16',
        },
      ],
      name: 'enforcedOptions',
      outputs: [
        {
          internalType: 'bytes',
          name: 'enforcedOption',
          type: 'bytes',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'srcEid',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'sender',
              type: 'bytes32',
            },
            {
              internalType: 'uint64',
              name: 'nonce',
              type: 'uint64',
            },
          ],
          internalType: 'struct Origin',
          name: '',
          type: 'tuple',
        },
        {
          internalType: 'bytes',
          name: '',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: '_sender',
          type: 'address',
        },
      ],
      name: 'isComposeMsgSender',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: '_eid',
          type: 'uint32',
        },
        {
          internalType: 'bytes32',
          name: '_peer',
          type: 'bytes32',
        },
      ],
      name: 'isPeer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'srcEid',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'sender',
              type: 'bytes32',
            },
            {
              internalType: 'uint64',
              name: 'nonce',
              type: 'uint64',
            },
          ],
          internalType: 'struct Origin',
          name: '_origin',
          type: 'tuple',
        },
        {
          internalType: 'bytes32',
          name: '_guid',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: '_message',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: '_executor',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: '_extraData',
          type: 'bytes',
        },
      ],
      name: 'lzReceive',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              components: [
                {
                  internalType: 'uint32',
                  name: 'srcEid',
                  type: 'uint32',
                },
                {
                  internalType: 'bytes32',
                  name: 'sender',
                  type: 'bytes32',
                },
                {
                  internalType: 'uint64',
                  name: 'nonce',
                  type: 'uint64',
                },
              ],
              internalType: 'struct Origin',
              name: 'origin',
              type: 'tuple',
            },
            {
              internalType: 'uint32',
              name: 'dstEid',
              type: 'uint32',
            },
            {
              internalType: 'address',
              name: 'receiver',
              type: 'address',
            },
            {
              internalType: 'bytes32',
              name: 'guid',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'value',
              type: 'uint256',
            },
            {
              internalType: 'address',
              name: 'executor',
              type: 'address',
            },
            {
              internalType: 'bytes',
              name: 'message',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'extraData',
              type: 'bytes',
            },
          ],
          internalType: 'struct InboundPacket[]',
          name: '_packets',
          type: 'tuple[]',
        },
      ],
      name: 'lzReceiveAndRevert',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'srcEid',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'sender',
              type: 'bytes32',
            },
            {
              internalType: 'uint64',
              name: 'nonce',
              type: 'uint64',
            },
          ],
          internalType: 'struct Origin',
          name: '_origin',
          type: 'tuple',
        },
        {
          internalType: 'bytes32',
          name: '_guid',
          type: 'bytes32',
        },
        {
          internalType: 'bytes',
          name: '_message',
          type: 'bytes',
        },
        {
          internalType: 'address',
          name: '_executor',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: '_extraData',
          type: 'bytes',
        },
      ],
      name: 'lzReceiveSimulate',
      outputs: [],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'msgInspector',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'nextNonce',
      outputs: [
        {
          internalType: 'uint64',
          name: 'nonce',
          type: 'uint64',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oApp',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oAppVersion',
      outputs: [
        {
          internalType: 'uint64',
          name: 'senderVersion',
          type: 'uint64',
        },
        {
          internalType: 'uint64',
          name: 'receiverVersion',
          type: 'uint64',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'oftVersion',
      outputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
        {
          internalType: 'uint64',
          name: 'version',
          type: 'uint64',
        },
      ],
      stateMutability: 'pure',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: 'eid',
          type: 'uint32',
        },
      ],
      name: 'peers',
      outputs: [
        {
          internalType: 'bytes32',
          name: 'peer',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'preCrime',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'dstEid',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'to',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'amountLD',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'minAmountLD',
              type: 'uint256',
            },
            {
              internalType: 'bytes',
              name: 'extraOptions',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'composeMsg',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'oftCmd',
              type: 'bytes',
            },
          ],
          internalType: 'struct SendParam',
          name: '_sendParam',
          type: 'tuple',
        },
      ],
      name: 'quoteOFT',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'minAmountLD',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'maxAmountLD',
              type: 'uint256',
            },
          ],
          internalType: 'struct OFTLimit',
          name: 'oftLimit',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'int256',
              name: 'feeAmountLD',
              type: 'int256',
            },
            {
              internalType: 'string',
              name: 'description',
              type: 'string',
            },
          ],
          internalType: 'struct OFTFeeDetail[]',
          name: 'oftFeeDetails',
          type: 'tuple[]',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'amountSentLD',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountReceivedLD',
              type: 'uint256',
            },
          ],
          internalType: 'struct OFTReceipt',
          name: 'oftReceipt',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'dstEid',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'to',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'amountLD',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'minAmountLD',
              type: 'uint256',
            },
            {
              internalType: 'bytes',
              name: 'extraOptions',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'composeMsg',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'oftCmd',
              type: 'bytes',
            },
          ],
          internalType: 'struct SendParam',
          name: '_sendParam',
          type: 'tuple',
        },
        {
          internalType: 'bool',
          name: '_payInLzToken',
          type: 'bool',
        },
      ],
      name: 'quoteSend',
      outputs: [
        {
          components: [
            {
              internalType: 'uint256',
              name: 'nativeFee',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lzTokenFee',
              type: 'uint256',
            },
          ],
          internalType: 'struct MessagingFee',
          name: 'msgFee',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'dstEid',
              type: 'uint32',
            },
            {
              internalType: 'bytes32',
              name: 'to',
              type: 'bytes32',
            },
            {
              internalType: 'uint256',
              name: 'amountLD',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'minAmountLD',
              type: 'uint256',
            },
            {
              internalType: 'bytes',
              name: 'extraOptions',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'composeMsg',
              type: 'bytes',
            },
            {
              internalType: 'bytes',
              name: 'oftCmd',
              type: 'bytes',
            },
          ],
          internalType: 'struct SendParam',
          name: '_sendParam',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'nativeFee',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'lzTokenFee',
              type: 'uint256',
            },
          ],
          internalType: 'struct MessagingFee',
          name: '_fee',
          type: 'tuple',
        },
        {
          internalType: 'address',
          name: '_refundAddress',
          type: 'address',
        },
      ],
      name: 'send',
      outputs: [
        {
          components: [
            {
              internalType: 'bytes32',
              name: 'guid',
              type: 'bytes32',
            },
            {
              internalType: 'uint64',
              name: 'nonce',
              type: 'uint64',
            },
            {
              components: [
                {
                  internalType: 'uint256',
                  name: 'nativeFee',
                  type: 'uint256',
                },
                {
                  internalType: 'uint256',
                  name: 'lzTokenFee',
                  type: 'uint256',
                },
              ],
              internalType: 'struct MessagingFee',
              name: 'fee',
              type: 'tuple',
            },
          ],
          internalType: 'struct MessagingReceipt',
          name: 'msgReceipt',
          type: 'tuple',
        },
        {
          components: [
            {
              internalType: 'uint256',
              name: 'amountSentLD',
              type: 'uint256',
            },
            {
              internalType: 'uint256',
              name: 'amountReceivedLD',
              type: 'uint256',
            },
          ],
          internalType: 'struct OFTReceipt',
          name: 'oftReceipt',
          type: 'tuple',
        },
      ],
      stateMutability: 'payable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_delegate',
          type: 'address',
        },
      ],
      name: 'setDelegate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'eid',
              type: 'uint32',
            },
            {
              internalType: 'uint16',
              name: 'msgType',
              type: 'uint16',
            },
            {
              internalType: 'bytes',
              name: 'options',
              type: 'bytes',
            },
          ],
          internalType: 'struct EnforcedOptionParam[]',
          name: '_enforcedOptions',
          type: 'tuple[]',
        },
      ],
      name: 'setEnforcedOptions',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_msgInspector',
          type: 'address',
        },
      ],
      name: 'setMsgInspector',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint32',
          name: '_eid',
          type: 'uint32',
        },
        {
          internalType: 'bytes32',
          name: '_peer',
          type: 'bytes32',
        },
      ],
      name: 'setPeer',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_preCrime',
          type: 'address',
        },
      ],
      name: 'setPreCrime',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'sharedDecimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'token',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  bytecode:
    '0x60c06040523480156200001157600080fd5b50604051620038fb380380620038fb833981016040819052620000349162000458565b85858585838360128484818181818f6001600160a01b0381166200007357604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6200007e81620001ad565b506001600160a01b038083166080528116620000ad57604051632d618d8160e21b815260040160405180910390fd5b60805160405163ca5eb5e160e01b81526001600160a01b0383811660048301529091169063ca5eb5e190602401600060405180830381600087803b158015620000f557600080fd5b505af11580156200010a573d6000803e3d6000fd5b505050505050505062000122620001fd60201b60201c565b60ff168360ff16101562000149576040516301e9714b60e41b815260040160405180910390fd5b6200015660068462000518565b6200016390600a62000637565b60a05250600891506200017990508382620006e0565b506009620001888282620006e0565b50505050505050620001a182826200020260201b60201c565b505050505050620007c2565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600690565b6001600160a01b0382166200022e5760405163ec442f0560e01b8152600060048201526024016200006a565b6200023c6000838362000240565b5050565b6001600160a01b0383166200026f578060076000828254620002639190620007ac565b90915550620002e39050565b6001600160a01b03831660009081526005602052604090205481811015620002c45760405163391434e360e21b81526001600160a01b038516600482015260248101829052604481018390526064016200006a565b6001600160a01b03841660009081526005602052604090209082900390555b6001600160a01b038216620003015760078054829003905562000320565b6001600160a01b03821660009081526005602052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516200036691815260200190565b60405180910390a3505050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200039b57600080fd5b81516001600160401b0380821115620003b857620003b862000373565b604051601f8301601f19908116603f01168101908282118183101715620003e357620003e362000373565b81604052838152602092508660208588010111156200040157600080fd5b600091505b8382101562000425578582018301518183018401529082019062000406565b6000602085830101528094505050505092915050565b80516001600160a01b03811681146200045357600080fd5b919050565b60008060008060008060c087890312156200047257600080fd5b86516001600160401b03808211156200048a57600080fd5b620004988a838b0162000389565b97506020890151915080821115620004af57600080fd5b50620004be89828a0162000389565b955050620004cf604088016200043b565b9350620004df606088016200043b565b9250620004ef608088016200043b565b915060a087015190509295509295509295565b634e487b7160e01b600052601160045260246000fd5b60ff828116828216039081111562000534576200053462000502565b92915050565b600181815b808511156200057b5781600019048211156200055f576200055f62000502565b808516156200056d57918102915b93841c93908002906200053f565b509250929050565b600082620005945750600162000534565b81620005a35750600062000534565b8160018114620005bc5760028114620005c757620005e7565b600191505062000534565b60ff841115620005db57620005db62000502565b50506001821b62000534565b5060208310610133831016604e8410600b84101617156200060c575081810a62000534565b6200061883836200053a565b80600019048211156200062f576200062f62000502565b029392505050565b60006200064860ff84168362000583565b9392505050565b600181811c908216806200066457607f821691505b6020821081036200068557634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620006db576000816000526020600020601f850160051c81016020861015620006b65750805b601f850160051c820191505b81811015620006d757828155600101620006c2565b5050505b505050565b81516001600160401b03811115620006fc57620006fc62000373565b62000714816200070d84546200064f565b846200068b565b602080601f8311600181146200074c5760008415620007335750858301515b600019600386901b1c1916600185901b178555620006d7565b600085815260208120601f198616915b828110156200077d578886015182559484019460019091019084016200075c565b50858210156200079c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b8082018082111562000534576200053462000502565b60805160a0516130cd6200082e6000396000818161061e01528181611aa101528181611b160152611d1a0152600081816104dd01528181610a4d0152818161109d015281816113140152818161167f01528181611e1201528181611f82015261203901526130cd6000f3fe6080604052600436106102515760003560e01c80637d25a05e11610139578063bb0b6a53116100b6578063d045a0dc1161007a578063d045a0dc14610755578063d424388514610768578063dd62ed3e14610788578063f2fde38b146107ce578063fc0c546a14610461578063ff7bd03d146107ee57600080fd5b8063bb0b6a53146106b4578063bc70b354146106e1578063bd815db014610701578063c7c7f5b314610714578063ca5eb5e11461073557600080fd5b8063963efcaa116100fd578063963efcaa1461060c5780639f68b96414610640578063a9059cbb14610654578063b731ea0a14610674578063b98bd0701461069457600080fd5b80637d25a05e1461056a57806382413eac146105a5578063857749b0146105c55780638da5cb5b146105d957806395d89b41146105f757600080fd5b806323b872dd116101d25780635535d461116101965780635535d461146104745780635a0dfe4d146104945780635e280f11146104cb5780636fc1b31e146104ff57806370a082311461051f578063715018a61461055557600080fd5b806323b872dd146103d2578063313ce567146103f25780633400288b146104145780633b6f743b1461043457806352ae28791461046157600080fd5b8063134d4f2511610219578063134d4f251461032d578063156a0d0f1461035557806317442b701461037c57806318160ddd1461039e5780631f5e1334146103bd57600080fd5b806306fdde0314610256578063095ea7b3146102815780630d35b415146102b1578063111ecdad146102e057806313137d6514610318575b600080fd5b34801561026257600080fd5b5061026b61080e565b60405161027891906121b1565b60405180910390f35b34801561028d57600080fd5b506102a161029c3660046121d9565b6108a0565b6040519015158152602001610278565b3480156102bd57600080fd5b506102d16102cc36600461221d565b6108ba565b60405161027893929190612251565b3480156102ec57600080fd5b50600454610300906001600160a01b031681565b6040516001600160a01b039091168152602001610278565b61032b610326366004612344565b610a4b565b005b34801561033957600080fd5b50610342600281565b60405161ffff9091168152602001610278565b34801561036157600080fd5b506040805162b9270b60e21b81526001602082015201610278565b34801561038857600080fd5b5060408051600181526002602082015201610278565b3480156103aa57600080fd5b506007545b604051908152602001610278565b3480156103c957600080fd5b50610342600181565b3480156103de57600080fd5b506102a16103ed3660046123e3565b610b0b565b3480156103fe57600080fd5b5060125b60405160ff9091168152602001610278565b34801561042057600080fd5b5061032b61042f36600461243d565b610b31565b34801561044057600080fd5b5061045461044f366004612467565b610b47565b60405161027891906124b8565b34801561046d57600080fd5b5030610300565b34801561048057600080fd5b5061026b61048f3660046124e1565b610bae565b3480156104a057600080fd5b506102a16104af36600461243d565b63ffffffff919091166000908152600160205260409020541490565b3480156104d757600080fd5b506103007f000000000000000000000000000000000000000000000000000000000000000081565b34801561050b57600080fd5b5061032b61051a366004612514565b610c53565b34801561052b57600080fd5b506103af61053a366004612514565b6001600160a01b031660009081526005602052604090205490565b34801561056157600080fd5b5061032b610cb0565b34801561057657600080fd5b5061058d61058536600461243d565b600092915050565b6040516001600160401b039091168152602001610278565b3480156105b157600080fd5b506102a16105c0366004612531565b610cc4565b3480156105d157600080fd5b506006610402565b3480156105e557600080fd5b506000546001600160a01b0316610300565b34801561060357600080fd5b5061026b610cd9565b34801561061857600080fd5b506103af7f000000000000000000000000000000000000000000000000000000000000000081565b34801561064c57600080fd5b5060006102a1565b34801561066057600080fd5b506102a161066f3660046121d9565b610ce8565b34801561068057600080fd5b50600254610300906001600160a01b031681565b3480156106a057600080fd5b5061032b6106af3660046125db565b610cf6565b3480156106c057600080fd5b506103af6106cf36600461261c565b60016020526000908152604090205481565b3480156106ed57600080fd5b5061026b6106fc366004612637565b610d10565b61032b61070f3660046125db565b610eb8565b610727610722366004612697565b611042565b604051610278929190612704565b34801561074157600080fd5b5061032b610750366004612514565b611076565b61032b610763366004612344565b6110fc565b34801561077457600080fd5b5061032b610783366004612514565b61112b565b34801561079457600080fd5b506103af6107a3366004612756565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205490565b3480156107da57600080fd5b5061032b6107e9366004612514565b611181565b3480156107fa57600080fd5b506102a1610809366004612784565b6111bf565b60606008805461081d906127a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610849906127a0565b80156108965780601f1061086b57610100808354040283529160200191610896565b820191906000526020600020905b81548152906001019060200180831161087957829003601f168201915b5050505050905090565b6000336108ae8185856111f5565b60019150505b92915050565b604080518082019091526000808252602082015260606108ed604051806040016040528060008152602001600081525090565b600080306001600160a01b031663fc0c546a6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561092e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095291906127d4565b6001600160a01b03166318160ddd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561098f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b391906127f1565b60408051808201825284815260208082018490528251600080825291810190935290975091925090610a08565b6040805180820190915260008152606060208201528152602001906001900390816109e05790505b509350600080610a2d604089013560608a0135610a2860208c018c61261c565b611207565b60408051808201909152918252602082015296989597505050505050565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03163314610a9b576040516391ac5e4f60e01b81523360048201526024015b60405180910390fd5b60208701803590610ab590610ab0908a61261c565b611243565b14610af357610ac7602088018861261c565b60405163309afaf360e21b815263ffffffff909116600482015260208801356024820152604401610a92565b610b028787878787878761127f565b50505050505050565b600033610b198582856113e6565b610b24858585611465565b60019150505b9392505050565b610b396114c4565b610b4382826114f1565b5050565b60408051808201909152600080825260208201526000610b7760408501356060860135610a28602088018861261c565b915050600080610b878684611546565b9092509050610ba4610b9c602088018861261c565b838388611669565b9695505050505050565b600360209081526000928352604080842090915290825290208054610bd2906127a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610bfe906127a0565b8015610c4b5780601f10610c2057610100808354040283529160200191610c4b565b820191906000526020600020905b815481529060010190602001808311610c2e57829003601f168201915b505050505081565b610c5b6114c4565b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527ff0be4f1e87349231d80c36b33f9e8639658eeaf474014dee15a3e6a4d4414197906020015b60405180910390a150565b610cb86114c4565b610cc2600061174a565b565b6001600160a01b03811630145b949350505050565b60606009805461081d906127a0565b6000336108ae818585611465565b610cfe6114c4565b610b43610d0b82846128c1565b61179a565b63ffffffff8416600090815260036020908152604080832061ffff87168452909152812080546060929190610d44906127a0565b80601f0160208091040260200160405190810160405280929190818152602001828054610d70906127a0565b8015610dbd5780601f10610d9257610100808354040283529160200191610dbd565b820191906000526020600020905b815481529060010190602001808311610da057829003601f168201915b505050505090508051600003610e0d5783838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929450610cd19350505050565b6000839003610e1d579050610cd1565b60028310610e9b57610e6484848080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506118a192505050565b80610e7284600281886129d6565b604051602001610e8493929190612a00565b604051602081830303815290604052915050610cd1565b8383604051639a6d49cd60e01b8152600401610a92929190612a51565b60005b81811015610fc15736838383818110610ed657610ed6612a65565b9050602002810190610ee89190612a7b565b9050610f1b610efa602083018361261c565b602083013563ffffffff919091166000908152600160205260409020541490565b610f255750610fb9565b3063d045a0dc60c08301358360a0810135610f44610100830183612a9c565b610f55610100890160e08a01612514565b610f636101208a018a612a9c565b6040518963ffffffff1660e01b8152600401610f859796959493929190612af7565b6000604051808303818588803b158015610f9e57600080fd5b505af1158015610fb2573d6000803e3d6000fd5b5050505050505b600101610ebb565b50336001600160a01b0316638e9e70996040518163ffffffff1660e01b8152600401600060405180830381865afa158015611000573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526110289190810190612b7d565b604051638351eea760e01b8152600401610a9291906121b1565b61104a61211a565b60408051808201909152600080825260208201526110698585856118cd565b915091505b935093915050565b61107e6114c4565b60405163ca5eb5e160e01b81526001600160a01b0382811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063ca5eb5e190602401600060405180830381600087803b1580156110e157600080fd5b505af11580156110f5573d6000803e3d6000fd5b5050505050565b33301461111c5760405163029a949d60e31b815260040160405180910390fd5b610b0287878787878787610af3565b6111336114c4565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fd48d879cef83a1c0bdda516f27b13ddb1b3f8bbac1c9e1511bb2a659c242776090602001610ca5565b6111896114c4565b6001600160a01b0381166111b357604051631e4fbdf760e01b815260006004820152602401610a92565b6111bc8161174a565b50565b60006020820180359060019083906111d7908661261c565b63ffffffff1681526020810191909152604001600020541492915050565b61120283838360016119c8565b505050565b60008061121385611a9d565b91508190508381101561106e576040516371c4efed60e01b81526004810182905260248101859052604401610a92565b63ffffffff8116600090815260016020526040812054806108b45760405163f6ff4fb760e01b815263ffffffff84166004820152602401610a92565b600061129161128e8787611ad4565b90565b905060006112bd826112ab6112a68a8a611aec565b611b0f565b6112b860208d018d61261c565b611b44565b905060288611156113845760006112fa6112dd60608c0160408d01612bea565b6112ea60208d018d61261c565b846112f58c8c611b6c565b611bb7565b604051633e5ac80960e11b81529091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690637cb59012906113509086908d906000908790600401612c07565b600060405180830381600087803b15801561136a57600080fd5b505af115801561137e573d6000803e3d6000fd5b50505050505b6001600160a01b038216887fefed6d3500546b29533b128a29e3a94d70788727f0507505ac12eaf2e578fd9c6113bd60208d018d61261c565b6040805163ffffffff9092168252602082018690520160405180910390a3505050505050505050565b6001600160a01b0383811660009081526006602090815260408083209386168352929052205460001981101561145f578181101561145057604051637dc7a0d960e11b81526001600160a01b03841660048201526024810182905260448101839052606401610a92565b61145f848484840360006119c8565b50505050565b6001600160a01b03831661148f57604051634b637e8f60e11b815260006004820152602401610a92565b6001600160a01b0382166114b95760405163ec442f0560e01b815260006004820152602401610a92565b611202838383611be9565b6000546001600160a01b03163314610cc25760405163118cdaa760e01b8152336004820152602401610a92565b63ffffffff8216600081815260016020908152604091829020849055815192835282018390527f238399d427b947898edb290f5ff0f9109849b1c3ba196a42e35f00c50a54b98b910160405180910390a15050565b60608060006115a3856020013561155c86611d13565b61156960a0890189612a9c565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611d3f92505050565b90935090506000816115b65760016115b9565b60025b90506115d96115cb602088018861261c565b826106fc60808a018a612a9c565b6004549093506001600160a01b0316801561165f5760405163043a78eb60e01b81526001600160a01b0382169063043a78eb9061161c9088908890600401612c38565b602060405180830381865afa158015611639573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061165d9190612c5d565b505b5050509250929050565b60408051808201909152600080825260208201527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663ddc28c586040518060a001604052808863ffffffff1681526020016116cc89611243565b8152602001878152602001868152602001851515815250306040518363ffffffff1660e01b8152600401611701929190612c7a565b6040805180830381865afa15801561171d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117419190612d23565b95945050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60005b8151811015611871576117cc8282815181106117bb576117bb612a65565b6020026020010151604001516118a1565b8181815181106117de576117de612a65565b6020026020010151604001516003600084848151811061180057611800612a65565b60200260200101516000015163ffffffff1663ffffffff168152602001908152602001600020600084848151811061183a5761183a612a65565b60200260200101516020015161ffff1661ffff16815260200190815260200160002090816118689190612d8f565b5060010161179d565b507fbe4864a8e820971c0247f5992e2da559595f7bf076a21cb5928d443d2a13b67481604051610ca59190612e4e565b600281015161ffff8116600314610b435781604051639a6d49cd60e01b8152600401610a9291906121b1565b6118d561211a565b604080518082019091526000808252602082015260008061190c33604089013560608a013561190760208c018c61261c565b611db9565b9150915060008061191d8984611546565b909250905061194961193260208b018b61261c565b8383611943368d90038d018d612ed9565b8b611ddf565b60408051808201909152858152602080820186905282519298509096503391907f85496b760a4b7f8d66384b9df21b381f5d1b1e79f229a47aaf4c232edc2fe59a90611997908d018d61261c565b6040805163ffffffff909216825260208201899052810187905260600160405180910390a350505050935093915050565b6001600160a01b0384166119f25760405163e602df0560e01b815260006004820152602401610a92565b6001600160a01b038316611a1c57604051634a1406b160e11b815260006004820152602401610a92565b6001600160a01b038085166000908152600660209081526040808320938716835292905220829055801561145f57826001600160a01b0316846001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92584604051611a8f91815260200190565b60405180910390a350505050565b60007f0000000000000000000000000000000000000000000000000000000000000000611aca8184612f21565b6108b49190612f43565b6000611ae360208284866129d6565b610b2a91612f5a565b6000611afc6028602084866129d6565b611b0591612f78565b60c01c9392505050565b60006108b47f00000000000000000000000000000000000000000000000000000000000000006001600160401b038416612f43565b60006001600160a01b038416611b5a5761dead93505b611b648484611eea565b509092915050565b6060611b7b82602881866129d6565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929695505050505050565b606084848484604051602001611bd09493929190612fa8565b6040516020818303038152906040529050949350505050565b6001600160a01b038316611c14578060076000828254611c099190612ff7565b90915550611c869050565b6001600160a01b03831660009081526005602052604090205481811015611c675760405163391434e360e21b81526001600160a01b03851660048201526024810182905260448101839052606401610a92565b6001600160a01b03841660009081526005602052604090209082900390555b6001600160a01b038216611ca257600780548290039055611cc1565b6001600160a01b03821660009081526005602052604090208054820190555b816001600160a01b0316836001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051611d0691815260200190565b60405180910390a3505050565b60006108b47f000000000000000000000000000000000000000000000000000000000000000083612f21565b8051606090151580611d88578484604051602001611d7492919091825260c01b6001600160c01b031916602082015260280190565b604051602081830303815290604052611daf565b84843385604051602001611d9f949392919061300a565b6040516020818303038152906040525b9150935093915050565b600080611dc7858585611207565b9092509050611dd68683611f20565b94509492505050565b611de761211a565b6000611df68460000151611f56565b602085015190915015611e1057611e108460200151611f7e565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316632637a450826040518060a001604052808b63ffffffff168152602001611e608c611243565b81526020018a815260200189815260200160008960200151111515815250866040518463ffffffff1660e01b8152600401611e9c929190612c7a565b60806040518083038185885af1158015611eba573d6000803e3d6000fd5b50505050506040513d601f19601f82011682018060405250810190611edf919061304d565b979650505050505050565b6001600160a01b038216611f145760405163ec442f0560e01b815260006004820152602401610a92565b610b4360008383611be9565b6001600160a01b038216611f4a57604051634b637e8f60e11b815260006004820152602401610a92565b610b4382600083611be9565b6000813414611f7a576040516304fb820960e51b8152346004820152602401610a92565b5090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e4fe1d946040518163ffffffff1660e01b8152600401602060405180830381865afa158015611fde573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061200291906127d4565b90506001600160a01b03811661202b576040516329b99a9560e11b815260040160405180910390fd5b6040805133602482018190527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0381811660448501526064808501889052855180860390910181526084909401909452602080840180516001600160e01b03166323b872dd60e01b1781528451610b4396881695899361145f93889360009283929091839182885af1806120cc576040513d6000823e3d81fd5b50506000513d915081156120e45780600114156120f1565b6001600160a01b0384163b155b1561145f57604051635274afe760e01b81526001600160a01b0385166004820152602401610a92565b60405180606001604052806000801916815260200160006001600160401b0316815260200161215c604051806040016040528060008152602001600081525090565b905290565b60005b8381101561217c578181015183820152602001612164565b50506000910152565b6000815180845261219d816020860160208601612161565b601f01601f19169290920160200192915050565b602081526000610b2a6020830184612185565b6001600160a01b03811681146111bc57600080fd5b600080604083850312156121ec57600080fd5b82356121f7816121c4565b946020939093013593505050565b600060e0828403121561221757600080fd5b50919050565b60006020828403121561222f57600080fd5b81356001600160401b0381111561224557600080fd5b610cd184828501612205565b8351815260208085015190820152600060a08201604060a0604085015281865180845260c08601915060c08160051b8701019350602080890160005b838110156122cc5788870360bf190185528151805188528301518388018790526122b987890182612185565b975050938201939082019060010161228d565b50508751606088015250505060208501516080850152509050610cd1565b60006060828403121561221757600080fd5b60008083601f84011261230e57600080fd5b5081356001600160401b0381111561232557600080fd5b60208301915083602082850101111561233d57600080fd5b9250929050565b600080600080600080600060e0888a03121561235f57600080fd5b61236989896122ea565b96506060880135955060808801356001600160401b038082111561238c57600080fd5b6123988b838c016122fc565b909750955060a08a013591506123ad826121c4565b90935060c089013590808211156123c357600080fd5b506123d08a828b016122fc565b989b979a50959850939692959293505050565b6000806000606084860312156123f857600080fd5b8335612403816121c4565b92506020840135612413816121c4565b929592945050506040919091013590565b803563ffffffff8116811461243857600080fd5b919050565b6000806040838503121561245057600080fd5b6121f783612424565b80151581146111bc57600080fd5b6000806040838503121561247a57600080fd5b82356001600160401b0381111561249057600080fd5b61249c85828601612205565b92505060208301356124ad81612459565b809150509250929050565b8151815260208083015190820152604081016108b4565b803561ffff8116811461243857600080fd5b600080604083850312156124f457600080fd5b6124fd83612424565b915061250b602084016124cf565b90509250929050565b60006020828403121561252657600080fd5b8135610b2a816121c4565b60008060008060a0858703121561254757600080fd5b61255186866122ea565b935060608501356001600160401b0381111561256c57600080fd5b612578878288016122fc565b909450925050608085013561258c816121c4565b939692955090935050565b60008083601f8401126125a957600080fd5b5081356001600160401b038111156125c057600080fd5b6020830191508360208260051b850101111561233d57600080fd5b600080602083850312156125ee57600080fd5b82356001600160401b0381111561260457600080fd5b61261085828601612597565b90969095509350505050565b60006020828403121561262e57600080fd5b610b2a82612424565b6000806000806060858703121561264d57600080fd5b61265685612424565b9350612664602086016124cf565b925060408501356001600160401b0381111561267f57600080fd5b61268b878288016122fc565b95989497509550505050565b600080600083850360808112156126ad57600080fd5b84356001600160401b038111156126c357600080fd5b6126cf87828801612205565b9450506040601f19820112156126e457600080fd5b5060208401915060608401356126f9816121c4565b809150509250925092565b600060c082019050835182526001600160401b036020850151166020830152604084015161273f604084018280518252602090810151910152565b5082516080830152602083015160a0830152610b2a565b6000806040838503121561276957600080fd5b8235612774816121c4565b915060208301356124ad816121c4565b60006060828403121561279657600080fd5b610b2a83836122ea565b600181811c908216806127b457607f821691505b60208210810361221757634e487b7160e01b600052602260045260246000fd5b6000602082840312156127e657600080fd5b8151610b2a816121c4565b60006020828403121561280357600080fd5b5051919050565b634e487b7160e01b600052604160045260246000fd5b604051606081016001600160401b03811182821017156128425761284261280a565b60405290565b604080519081016001600160401b03811182821017156128425761284261280a565b604051601f8201601f191681016001600160401b03811182821017156128925761289261280a565b604052919050565b60006001600160401b038211156128b3576128b361280a565b50601f01601f191660200190565b60006001600160401b03808411156128db576128db61280a565b8360051b60206128ec81830161286a565b86815291850191818101903684111561290457600080fd5b865b848110156129ca5780358681111561291e5760008081fd5b880160603682900312156129325760008081fd5b61293a612820565b61294382612424565b81526129508683016124cf565b86820152604080830135898111156129685760008081fd5b929092019136601f84011261297d5760008081fd5b823561299061298b8261289a565b61286a565b81815236898387010111156129a55760008081fd5b818986018a830137600091810189019190915290820152845250918301918301612906565b50979650505050505050565b600080858511156129e657600080fd5b838611156129f357600080fd5b5050820193919092039150565b60008451612a12818460208901612161565b8201838582376000930192835250909392505050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b602081526000610cd1602083018486612a28565b634e487b7160e01b600052603260045260246000fd5b6000823561013e19833603018112612a9257600080fd5b9190910192915050565b6000808335601e19843603018112612ab357600080fd5b8301803591506001600160401b03821115612acd57600080fd5b60200191503681900382131561233d57600080fd5b6001600160401b03811681146111bc57600080fd5b63ffffffff612b0589612424565b1681526020880135602082015260006040890135612b2281612ae2565b6001600160401b03811660408401525087606083015260e06080830152612b4d60e083018789612a28565b6001600160a01b03861660a084015282810360c0840152612b6f818587612a28565b9a9950505050505050505050565b600060208284031215612b8f57600080fd5b81516001600160401b03811115612ba557600080fd5b8201601f81018413612bb657600080fd5b8051612bc461298b8261289a565b818152856020838501011115612bd957600080fd5b611741826020830160208601612161565b600060208284031215612bfc57600080fd5b8135610b2a81612ae2565b60018060a01b038516815283602082015261ffff83166040820152608060608201526000610ba46080830184612185565b604081526000612c4b6040830185612185565b82810360208401526117418185612185565b600060208284031215612c6f57600080fd5b8151610b2a81612459565b6040815263ffffffff8351166040820152602083015160608201526000604084015160a06080840152612cb060e0840182612185565b90506060850151603f198483030160a0850152612ccd8282612185565b60809690960151151560c08501525050506001600160a01b039190911660209091015290565b600060408284031215612d0557600080fd5b612d0d612848565b9050815181526020820151602082015292915050565b600060408284031215612d3557600080fd5b610b2a8383612cf3565b601f821115611202576000816000526020600020601f850160051c81016020861015612d685750805b601f850160051c820191505b81811015612d8757828155600101612d74565b505050505050565b81516001600160401b03811115612da857612da861280a565b612dbc81612db684546127a0565b84612d3f565b602080601f831160018114612df15760008415612dd95750858301515b600019600386901b1c1916600185901b178555612d87565b600085815260208120601f198616915b82811015612e2057888601518255948401946001909101908401612e01565b5085821015612e3e5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b600060208083018184528085518083526040925060408601915060408160051b87010184880160005b83811015612ecb57888303603f190185528151805163ffffffff1684528781015161ffff16888501528601516060878501819052612eb781860183612185565b968901969450505090860190600101612e77565b509098975050505050505050565b600060408284031215612eeb57600080fd5b612ef3612848565b82358152602083013560208201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082612f3e57634e487b7160e01b600052601260045260246000fd5b500490565b80820281158282048414176108b4576108b4612f0b565b803560208310156108b457600019602084900360031b1b1692915050565b6001600160c01b03198135818116916008851015612fa05780818660080360031b1b83161692505b505092915050565b6001600160401b0360c01b8560c01b16815263ffffffff60e01b8460e01b16600882015282600c82015260008251612fe781602c850160208701612161565b91909101602c0195945050505050565b808201808211156108b4576108b4612f0b565b8481526001600160401b0360c01b8460c01b1660208201528260288201526000825161303d816048850160208701612161565b9190910160480195945050505050565b60006080828403121561305f57600080fd5b613067612820565b82518152602083015161307981612ae2565b602082015261308b8460408501612cf3565b6040820152939250505056fea264697066735822122022b3e5a913535aeaca0aed0ae7ef451a1fe9a0598619a495f0d1ce8db1a5fe0d64736f6c63430008160033',
};
