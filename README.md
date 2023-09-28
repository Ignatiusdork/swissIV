# ERC20 Token Deployment on Swisstronik Network

This README provides a step-by-step guide on how to deploy an ERC20 token on the Swisstronik network, mint tokens, transfer tokens, and interact with the smart contract using SwisstronikJS.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:
- Node.js and npm
- SwisstronikJS

## Installation

To install the project, follow these steps:

1. Open your terminal.
2. You can install SwisstronikJS using npm::

    ```
    npm i @swisstronik/swisstronik.js
    ```

## Usage

To use the project, follow these steps to deploy, mint, transfer and burn tokens using the swisstronikJS to intract with the contract:

1. Open the terminal and paste the following code:

    ```
2.    npx hardhat run scripts/deploy.js --network swisstronik
    ```

    ```
3.    npx hardhat run scripts/mintMorts.js --network swisstronik
    ```

4.   ```
    npx hardhat run scripts/transferMorts.js --network swisstronik
    ```

5.   ```
    npx hardhat run scripts/burntMorts.js --network swisstronik
    ```


## Contributing

Contributions are welcome. If you're interested in contributing to this project, please fork the repository and make your changes, and then submit a pull request.

## Contact

If you want to contact me, you can reach me at `littignatius@gmail.com`.

## License

This project uses the following license: [MIT](https://opensource.org/licenses/MIT).
