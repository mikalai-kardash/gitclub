import { User } from '../../models'

export interface GetCollaboratorsRequest {
    owner: number
    repository: number
    affiliation?: 'outside' | 'direct' | 'all'
}

export interface GetCollaboratorsResponse {
    items: Array<User>
}
