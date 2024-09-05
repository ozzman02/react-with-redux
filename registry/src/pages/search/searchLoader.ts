import { PackageSummary } from "../../api/types/packageSummary";
import { searchPackages } from "../../api/queries/searchPackages";

export interface SearchLoaderResult {
    searchResults: PackageSummary[];
}

/* 
    = This request argument represents a user trying to navigate to a page, url property.
    = We are also using inline annotation to avoid creating a new Interface.
    - It's a good practice to return an object that contains the result of your request from the loader functions.
*/
export async function searchLoader({ request }: { request: Request } ): Promise<SearchLoaderResult> {
    
    const { searchParams } = new URL(request.url);
    
    const term =  searchParams.get('term');
    
    if (!term) { throw new Error('Search term must be provided'); }

    const results = await searchPackages(term);

    return {
        searchResults: results
    };
   
  }