# Algorand Tracker (Experiment)

Algo Tracker is a monorepo containing a backend service (API) and a frontend application for tracking Algorand addresses and their activities.

## Packages
This monorepo contains the following packages:

- backend: A Node.js API for tracking Algorand addresses
- frontend: A simple Vue frontend application for managing the addresss

### Backend
The backend service is responsible for tracking specified Algorand addresses, fetching their details, and storing the data.

- Technology Stack: Node.js, TypeScript, Express
- Main Dependencies: algosdk, express, axios

### Frontend
The frontend application provides a user interface to interact with the backend service, displaying tracked Algorand addresses and their activities.

- Technology Stack: React, TypeScript, Tailwind CSS

## Prerequisites
Node.js and npm installed

## Installation
To install this project, follow these steps:

1. Clone the repo
`git clone https://github.com/mafrasil/algo.git`

2. Navigate to the repository directory
`cd algo`

3. Install
`yarn install`

## Running the Applications
`yarn dev` or `yarn start`

- Backend: `http://localhost:3000`
- Frontend: `http://localhost:5173`

Alternatively you can start the backend or frontend services individually `yarn dev:backend` or `yarn dev:frontend`

## Testing
To run tests for the API
`yarn test`