## Cosmos Bookstore
Cosmos Bookstore is a sample books catalog application that demonstrates the capabilities of Cosmos DB API for MongoDB.

Some of the functionalities being demonstrated are:
- Connecting to the database & the client configuration
- Reads & Queries
- Sorting & Indexing
- Updates
- Using different operators
- Checking RU cost of the previous operation
- Regex queries
- Aggregation pipelines
- Azure Search integration

### One-click deploy of the application & database to Azure

### Import the sample dataset into the Cosmos DB API for MongoDB account
Step 1 : Navigate to deployment folder using Git Bash 

Step 2 : Make sure you have the environment variable .env created and the values are set for "COSMOS_DB_ACCOUNT" and "RESOURCE_GROUP" based on your resources

Step 3 : Execute the shell script as './seed_data.sh'
