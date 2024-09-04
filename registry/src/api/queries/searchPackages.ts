import type { PackageSummary } from "../types/packageSummary";

interface SearchResponse {
    objects: {
        package: {
            name: string;
            description: string;
            version: string;
            keywords: string[];
        }
    } []
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {

    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    );
    
    const data: SearchResponse = await res.json();
    
    /*
        Try to use destructuring !

        return data.objects.map((searchResult) => {
            return {
                name: searchResult.package.name,
                description: searchResult.package.description,
                version: searchResult.package.version,
                keywords: searchResult.package.keywords
            }
        })
    */

    /*
        More destructuring !

        return data.objects.map(({ package: { name, description, version, keywords } }) => {
            return {
                name: name,
                description: description,
                version: version,
                keywords: keywords
            }
        });
    */

    return data.objects.map(({ package: { name, description, version, keywords } }) => {
        return { name, description, version, keywords }
    });

}