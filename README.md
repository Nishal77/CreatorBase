Setup Instructions

Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://cloud.mongodb.com/)

Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Nishal77/CreatorBase.git
   cd CreatorBase

2. Add a .env.local file in the root directory with the following environment variables
   ```bash
   CLERK_API_KEY=<your-clerk-api-key>
   MONGODB_CLUSTER_URL=<your-mongodb-cluster-url>

3. Install the project dependencies:
    ```bash
   npm install

Running the Project
To start the project locally, use:

bash
Copy code
npm run dev
This will launch the development server. You can view the application in your browser at http://localhost:5173.
