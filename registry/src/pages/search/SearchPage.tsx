import PackageListItem from "../../components/PackageListItem";
import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";

export default function SearchPage() {

    /* 
        const data = useLoaderData() as SearchLoaderResult;

        data has a searchResults property, again using destructuring ...

        const { searchResults } = useLoaderData() as SearchLoaderResult;

    */
    const { searchResults } = useLoaderData() as SearchLoaderResult;

    //console.log(data.searchResults);

    const renderedResults = searchResults.map((result) => {
        return <PackageListItem pack={result} key={result.name} />
    });

    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Search Results</h1>
            <div className="space-y-4 mt-4">{renderedResults}</div>
        </div>
    );
}