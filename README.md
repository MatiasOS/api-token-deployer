# AL TOKE TOKEN API

Al Toke token API allows deploying tokens to third parties without the need for native tokenization of the blockchain. It is ideal for non-technical web3 users and end users.

Considerations to be taken into account due to time constraints of the hackathon duration:

- No type validations are performed.
- The control and waiting of the txs is done in the frontend. Multiple parallel calls may fail
- If a txs fails in a configuration, it is not reattempted, and in some cases the failure is reported in the response.

## Key features

- Deployment and configuration cost estimates in USD
- OFT (LayerZero) deployment and configuration
- Merkle Trees build and deployments on chain for airdrop and/or distribution

## Run

- Install dependencies `$ npm i`
- Run in developer mode `$ npm run start:dev`

## Docker Setup

You can run the entire application including PostgreSQL and pgAdmin using Docker Compose:

## Database Migrations

The API uses database migrations to manage the database schema evolution over time. This ensures consistent database states across different environments.

### Run Migrations

To apply all pending migrations to the database:

```bash
npm run migration:run
```

This command will execute all migrations that haven't been applied yet, bringing your database schema up to date.

### Create a new Migration

To create a new migration file:

```bash
npm run migration:create --name=migration-name
```

Replace de <b>migration-name</b> with a descriptive name for your migration. This will generate a new timestamped migration file in the migrations directory that you can edit to define the changes to the database schema.

Example:

```bash
npm run migration:create --name=create-user-table
```

The generated migration file will contain up() and down() methods that you can implement to apply and revert your database changes.

### Prerequisites

Docker and Docker compose installed on your machine

### Setup and Run

1. Build and start containers
`docker compose up -d`
2. Access to pgAdmin: http://localhost:5050
    - Login with the email and password defined on the `.env` file
    - Connect to the PostgreSQL server using the host, port, username and password defined on the `.env` file


## Endpoints

### IA Help

Uses [Nebula by Third Web](https://thirdweb.com/nebula) to explain users what is each field.

```bash
curl --request POST \
  --url http://localhost:3000/nebula \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{
    "message": "What is Ethereum? Give me a short answer"
}'
```

### Estimates

Get U$D estimates for OFT contract deployment and configurations.
contractCreation & wiring is tx fee in native token

```bash
curl --request POST \
  --url http://127.0.0.1:3000/estimates \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{}'
```

### OFT

Deploy OFT on blockchain. Support only for sepolia testnets.  

```bash
curl --request POST \
  --url http://127.0.0.1:3000/oft \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '```
{
  "name": "TEST-M-01",
  "symbol": "TM1",
  “chains”: [1,5003, 11122111],
  “distributions”: {
  "1": [{
    "address": "0x3bc8dE4CF6c075Fb8e24A954EC1D1B12bDcbF336",
    "amount": "100"
  },
  {
    "address": "0x3bc8dE4CF6c075Fb8e24A954EC1D1B12bDcbF336",
    "amount": "200"
  },
  {
    "address": "0x3bc8dE4CF6c075Fb8e24A954EC1D1B12bDcbF336",
    "amount": "300"
  }]
 }
}
```'
```

### OFT configure

Wire OFT contracts. For more info visit [Layer Zero OFT docs](https://docs.layerzero.network/v2/developers/evm/oft/quickstart#deployment-workflow)

```bash
curl --request POST \
  --url http://127.0.0.1:3000/oft/configure \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{}'
```

### Merkle tree

Builds a merkle Tree with the token distribution for each chain. The root is for the Merkle Distributor Smart contract.

```bash
curl --request POST \
  --url http://127.0.0.1:3000/merkle-tree \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{}'
```

### Deploy Merkle tree

Deploy a Merkle tree in a blockchain.

```bash
curl --request POST \
  --url http://127.0.0.1:3000/merkle-tree/deploy \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{}'
```

### Configure Merkle Tree

Transfer tokens to Merkle tree that should be claimed later.

```bash
curl --request POST \
  --url http://127.0.0.1:3000/merkle-tree/configure \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/11.1.0' \
  --data '{}'
```

## Flows

### API entry

```mermaid
sequenceDiagram
  actor User
  participant API
  participant DB
  participant DeployQueue as Deploy Queue

  User ->> API: Data
  activate API
  API ->> DB: Data
  activate DB
  DB ->> API: tokenID
  deactivate DB
  loop For each chain
    API ->> DeployQueue: { ChainId, tokenId }
  end
  deactivate API
```

### OFT Deploy queue

```mermaid
sequenceDiagram
  participant DeployQueue as Deploy Queue
  participant DeployProcessor as Deploy Processor
  participant DB as DB
  participant Chain as Blockchain

  DeployQueue ->> DeployProcessor: OFT.id
  activate DeployProcessor
  DeployProcessor ->> DB: Get token by OFT.id
  activate DB
  DB -->> DeployProcessor: OFT.data
  deactivate DB
  DeployProcessor ->> Chain: Deploy OFT
  Chain -->> DeployProcessor: Deploy TxHash
  DeployProcessor ->> DB: Store deploy TxHash
  deactivate DeployProcessor
```

### Deploy indexing

```mermaid
sequenceDiagram
  participant Chain as Blockchain
  participant Indexer
  participant DB
  participant ConfigQueue
  
  Chain ->> Indexer: deploy tx hash
  activate Indexer
  Indexer ->> DB: Update OFT deploy address
  opt Si se completaron todos los deploys (query en db)
      Indexer->>ConfigQueue: Start OFT config
  end
  deactivate Indexer
```

### OFT Configure queue

```mermaid
sequenceDiagram
  participant ConfigQueue as Config Queue
  participant OFTConfigProcessor as Config Processor
  participant DB
  participant Chain as Blockchain

  ConfigQueue ->> OFTConfigProcessor: OFT.id
  activate OFTConfigProcessor
  OFTConfigProcessor ->> DB: Get all OFT peers
  DB -->> OFTConfigProcessor: OFT peers
  
  loop Para cada chainId, configurar con el resto
    OFTConfigProcessor ->> Chain: "Config eid tx"
    Chain -->> OFTConfigProcessor: Config tx
    OFTConfigProcessor ->> DB: Store TxId
  end
  deactivate OFTConfigProcessor
```

## Queues

### Deploy Queue

name: deployQueue

```json
{
  "OFTId": 123
}
```

### Config Queue

name: configQueue

```json
{
  "OFTId": 123
}

```
