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
[![Deploy to Azure](https://aka.ms/deploytoazurebutton)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fsajeetharan%2Fcosmos-deploy%2Fmaster%2Fdeployment%2Fseed%2Fazuredeploy.json)


### Import the sample dataset into the Cosmos DB API for MongoDB account
Step 1 : Navigate to deployment folder using Git Bash 

Step 2 : Make sure you have the environment variable .env created and the values are set for "COSMOS_DB_ACCOUNT" and "RESOURCE_GROUP" based on your resources

Step 3 : Execute the shell script as './seed_data.sh'


### Dataset Credits
The dataset used in this application is ["GoodReads 100k books"](https://www.kaggle.com/mdhamani/goodreads-books-100k) dataset from Kaggle.
