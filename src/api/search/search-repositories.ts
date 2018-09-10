import * as request from 'request-promise-native'
import { getAuthorizationHeader } from '../utils'
import { Repository } from '../models'
import { HOST, USER_AGENT } from '../constants'

const api = '/search/repositories';

interface SearchRepositoriesResponse {
    total_count: number;
    incomplete_results: boolean;
    items: Array<Repository>;
}

interface SearchRepositoriesRequest {

}

const searchRepositories = async () => {
    const response = await request({
        uri: `${HOST}${api}`,
        qs: {
            q: 'tetris',
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
    SearchRepositoriesResponse,
}
