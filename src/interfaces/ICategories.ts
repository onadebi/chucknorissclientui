import GenResponse from "./common/IGenResponse";

export interface Data {
    categories: string[];
    created_at: string;
    icon_url: string;
    id: string;
    updated_at: string;
    url: string;
    value: string;
}


export interface SearchContent {
    content: string;
    metadata: string;
}

declare module ICategories {

    interface Categories extends GenResponse<string[]> { }

    interface RandomJoke extends GenResponse<Data> { }
}

export default ICategories;