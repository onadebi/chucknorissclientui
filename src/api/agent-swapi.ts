import axios, { AxiosResponse } from 'axios';
import appsettings from '../config/appsettings';
import ICategories from '../interfaces/ICategories'
import ISearch from '../interfaces/ISearch';
import ISwapi from '../interfaces/ISwapi';


axios.defaults.baseURL = appsettings.baseUrl;



const responseBody = <T> (response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T> (url: string)=> axios.get<T>(url).then(responseBody)
}

const ChuckCall ={
    list: () => requests.get<ICategories.Categories>('Chuck/categories'),
    random: (category: string) => requests.get<ICategories.RandomJoke>(`/Chuck/randomjoke/${category}`)
}

const SearchCall ={
    list: (search: string) => requests.get<ISearch.Search>(`Search?query=${search}`),
}

const SwapiCall ={
    list: () => requests.get<ISwapi.Swapi>(`Swapi/people`),
}

const agent = {
    ChuckCall, SearchCall,SwapiCall
}

export default agent;