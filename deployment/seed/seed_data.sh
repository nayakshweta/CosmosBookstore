 
 #!/bin/sh
    . .env

    echo "Preparing to import data..." 

    echo "Installing Node modules..."

    npm i --silent
    #     echo "Getting connection string..."
    endpoint=$(az cosmosdb keys list -g $RESOURCE_GROUP -n $COSMOS_DB_ACCOUNT --type connection-strings    --query connectionStrings[0].connectionString --output json)

    echo "Populating database..."
    node ./populate_data.js --endpoint $endpoint

    echo "Finished! Seeding, $COSMOS_DB_ACCOUNT, is now ready to play around!"

# fi