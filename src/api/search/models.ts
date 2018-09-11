import { Repository } from '../models';

export interface SearchRepositoriesRequest {
    query: {
        query: string
        language?: string
    }
}

export interface SearchRepositoriesResponse {
    total_count: number
    incomplete_results: boolean
    items: Array<Repository>
}
