const { SearchClient, AzureKeyCredential, odata } = require("@azure/search-documents");

export const searchBooks = async (skip=0, top=20, searchString, orderby, rating, format, genre) => {

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
    if (genre) {
        const genreList = Array.isArray(genre) ? genre : genre.split(",");
        if (genreList.length === 1) {
            filterOption === "" ? filterOption+=`search.ismatch('${genreList}', 'genre')` : filterOption+=` and search.ismatch('${genreList}', 'genre')`
        }
        else {
            if (filterOption === "") {
                filterOption+=`search.ismatch('${genreList}', 'genre')`;
            }
            else {
                filterOption+="and ( ";
                for (let i=0; i<genreList.length; i++) {
                    filterOption+=`search.ismatch('${genreList[i]}', 'genre')`;
                    if (i !== genreList.length-1) {
                        filterOption+=" or ";
                    }
                }
                filterOption+=" )";
            }
        }
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
