const { SearchClient, AzureKeyCredential, odata } = require("@azure/search-documents");

export const searchBooks = async (skip=0, top=20, searchString, orderby, rating, format) => {

    require("dotenv").config();

    const endpoint = process.env.SEARCH_API_ENDPOINT || "";
    const apiKey = process.env.SEARCH_API_KEY || "";
    const indexName = process.env.SEARCH_INDEX_NAME || "";

    
    // setting up an Azure Search client
    const searchClient = new SearchClient(endpoint, indexName, new AzureKeyCredential(apiKey));

    let orderByOption = [];
    if (orderby == "rating") {
        orderByOption.push("rating desc");
    }

    let filterOption = "";
    if (rating) {
        filterOption === "" ? filterOption+=`rating gt ${rating}` : filterOption+=` and rating gt ${rating}`;
    }
    if (format) {
        filterOption === "" ? filterOption+=`search.in(bookformat, '${format}')` : filterOption+=` and search.in(bookformat, '${format}')`
    }

    let searchOptions = {
        select: ["doc_id", "title", "author", "img"],
        skip: skip,
        top: top,
        orderBy: orderByOption,
        filter: odata(filterOption)
    };

    let searchResults = await searchClient.search(searchString, searchOptions);
    let books = [];
    
    for await (const result of searchResults.results) {
        books.push(result.document);
    }
    return books;
}
