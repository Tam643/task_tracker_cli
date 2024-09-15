# Task Tracker CLI (Node.js)

A simple, lightweight command-line tool built with Node.js for managing tasks. The CLI supports adding, listing, completing, and deleting tasks with JSON-based data persistence.

## Prerequisites

Before install the Task Tracker CLI, ensure you have the following installed:

1.  **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org/).
    
2.  **npm**: npm is included with Node.js, but make sure it’s updated to the latest version:
    ```bash
	npm install -g npm
    ``` 

## Installation

1. Clone the repository:
	```bash
	git clone https://github.com/Tam643/task_tracker_cli.git
	cd task-tracker-cli
	```
    
2.  **Install dependencies**:
    
    Navigate to the project directory and install the required dependencies using npm:
    ```bash
    npm install 
    ```
    
3.  **Build**:
    
    After the dependencies are installed, you can run build for complie typescript to commonJS:
    ```bash
    npm run build
    ```
4. **Installing Globally** (optinal):
	To use the Task Tracker CLI as a global command, you can install it globally on your system:
	```bash
	npm install -g .
	```
## Acknowledgments

-   [Building a TypeScript CLI with Node.js and Commander](https://blog.logrocket.com/building-typescript-cli-node-js-commander/)
-   [Build a Typescript based Command Line Interface (CLI) with Node.js](https://medium.hexlabs.io/typescript-based-command-line-interface-cli-with-node-js-e2d7a0db84d7)
