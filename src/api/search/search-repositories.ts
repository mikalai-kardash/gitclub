import * as request from 'request-promise-native'
import { getAuthorizationHeader } from '../utils'
import { HOST, USER_AGENT } from '../constants'
import { SearchRepositoriesRequest, SearchRepositoriesResponse } from './models'

const api = '/search/repositories';

const searchRepositories = async (criteria: SearchRepositoriesRequest) => {

    const { query } = criteria;

    let searchQuery = criteria.query.query;
    if (query.language) {
        searchQuery += ` language:${query.language}`
    }

    const response = await request({
        uri: `${HOST}${api}`,
        qs: {
            q: searchQuery,
            sort: 'stars'
        },
        headers: {
            'Authorization': getAuthorizationHeader(),
            'User-Agent': USER_AGENT
        },
        method: 'GET',
        json: true,
        strictSSL: false,
    }) as SearchRepositoriesResponse

    return response;
}

export {
    searchRepositories,
    SearchRepositoriesRequest,
    SearchRepositoriesResponse,
}
