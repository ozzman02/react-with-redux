import { getPackage } from "../../api/queries/getPackages";
import { Params } from "react-router-dom";
import type { PackageDetails } from "../../api/types/packageDetails";

interface LoaderArgs {
    params: Params;
}

export interface DetailsLoaderResult {
    details: PackageDetails;
}

/* 
    - We need to connect the loader with the Router that we created in App.tsx 

    - LoaderArgs can be replaced with an inline annotation as we did in searchLoader.ts 

        export async function detailsLoader({ params }: {params: Params}) {}
*/
export async function detailsLoader({ params }: LoaderArgs): Promise<DetailsLoaderResult> {

    const { name } = params;

    if (!name) { throw new Error('Name must be provided'); }

    const details = await getPackage(name);

    /* We do not need to return an object but we might think on adding a new request to the loader */

    return {
        details
    };

}