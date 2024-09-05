/*
    keywords?  means that we do not know if this property exists.
*/
export interface PackageSummary {
    name: string;
    version: string;
    description: string;
    keywords?: string[];

}