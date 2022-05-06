import GenResponse from "./common/IGenResponse";

declare module ISwapi {

    export interface SwapiContent {
        name: string;
        height: string;
        mass: string;
        hair_Color: string;
        skin_Color: string;
        eye_Color: string;
        birth_Year: string;
        gender: string;
        homeworld: string;
        films: string[];
        species: string[];
        vehicles: string[];
        starships: string[];
        created: Date;
        edited: Date;
        url: string;
    }

    export interface Data {
        count: number;
        next: string;
        previous?: any;
        results: SwapiContent[];
    }

    export interface Swapi extends GenResponse<Data> { }

}
export default ISwapi;