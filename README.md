# Overview

Performance Test Bed for GraphQL Nest Queries

## Setup Details

MySQL Server - AWS RDS db.m4.large 
 
## GraphQL Schema

```graphql
type Level1 { 
  id: ID! @unique
  name: String!
  description: String
  active: Boolean @default(value: "true")
  children: [Level2!]!
}

type Level2 { 
  id: ID! @unique
  name: String!
  description: String
  active: Boolean @default(value: "true")

  parent: Level1
  children: [Level3!]!
}

type Level3 { 
  id: ID! @unique
  name: String!
  description: String
  active: Boolean @default(value: "true")

  parent: Level2
  children: [Level4!]!
}

type Level4 { 
  id: ID! @unique
  name: String!
  description: String
  active: Boolean @default(value: "true")

  parent: Level3
  children: [Level5!]!
}

type Level5 { 
  id: ID! @unique
  name: String!
  description: String
  active: Boolean @default(value: "true")

  parent: Level4
  children: [Level5!]!
}

type Level6 {
  id: ID! @unique
  name: String!
  description: String
  active: Boolean @default(value: "true")

  parent: Level5
}
```

## Test Data Generator
```bash
$>cd test-data-generator
$>npm install
$>node index.js > ../database/seed.graphql

```

## Prisma Deploy

```bash
$>prisma login
...
# Modify database/prisma.yaml file with proper cluster info

$>prisma deploy
```

## Run application
```bash
$>npm install
$>npm start
```

## Load Test Prerequistes
```bash
$>npm install loadtest -g
```

## Run Load Test Again App
```bash
$>loadtest -c 10 --rps 10 -n 1  --data '{"operationName":null,"variables":{},"query":"{\n  level1s {\n    name\n    description\n    active\n    children {\n      name\n      description\n      active\n      children {\n        name\n        description\n        active\n        children {\n          name\n          description\n          active\n          children {\n            name\n            description\n            active\n            children {\n              name {\n                level1s {\n                  name\n                  description\n                  active\n                  children {\n                    name\n                    description\n                    active\n                    children {\n                      name\n                      description\n                      active\n                      children {\n                        name\n                        description\n                        active\n                        children {\n                          name\n                          description\n                          active\n                          children {\n                            name\n                            description\n                            active\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n              description\n              active\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"}' http://localhost:4000
```  


## Run Load Test Again Prisma End Point
```bash  
$>loadtest -c 1 --rps 1 -n 1  --data '{"operationName":null,"variables":{},"query":"{\n  level1s {\n    name\n    description\n    active\n    children {\n      name\n      description\n      active\n      children {\n        name\n        description\n        active\n        children {\n          name\n          description\n          active\n          children {\n            name\n            description\n            active\n            children {\n              name {\n                level1s {\n                  name\n                  description\n                  active\n                  children {\n                    name\n                    description\n                    active\n                    children {\n                      name\n                      description\n                      active\n                      children {\n                        name\n                        description\n                        active\n                        children {\n                          name\n                          description\n                          active\n                          children {\n                            name\n                            description\n                            active\n                          }\n                        }\n                      }\n                    }\n                  }\n                }\n              }\n              description\n              active\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"}' https://design-board-dev_centric.prisma.sh/resolver-forwarding-example/dev

```
