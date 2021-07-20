const { SearchClient, AzureKeyCredential, odata } = require("@azure/search-documents");

export const searchBooks = async (skip=0, top=20, searchString) => {

    require("dotenv").config();

    const endpoint = process.env.SEARCH_API_ENDPOINT || "";
    const apiKey = process.env.SEARCH_API_KEY || "";
    const indexName = process.env.SEARCH_INDEX_NAME || "";

    
    // setting up an Azure Search client
    const searchClient = new SearchClient(endpoint, indexName, new AzureKeyCredential(apiKey));

    let searchOptions = {
        select: ["doc_id", "title", "author", "img"],
        skip: skip,
        top: top
    };

    let searchResults = await searchClient.search(searchString, searchOptions);
    let books = [];
    
    for await (const result of searchResults.results) {
        books.push(result.document);
    }
    return books;
}
