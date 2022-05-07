import GenResponse from "./common/IGenResponse";

export interface SearchContent {
    content: string;
    metadata: string;
}

declare module ISearch {
    interface Search extends GenResponse<SearchContent[]> {}
}

export default ISearch;