import * as request from 'request-promise-native'
import { GetCollaboratorsRequest, GetCollaboratorsResponse } from './models'
import { getAuthorizationHeader } from '../../utils'
import { HOST, USER_AGENT } from '../../constants'

const getCollaborators = async (criteria: GetCollaboratorsRequest): Promise<GetCollaboratorsResponse> => {
    const { repository, owner } = criteria
    const uri = `${HOST}/repos/${owner}/${repository}/collaborators`

    console.log(uri)

    const collaborators = await request({
        uri,
        method: 'GET',
        headers: {
            'Authorization': getAuthorizationHeader(),
            'User-Agent': USER_AGENT
        },
        json: true,
        strictSSL: false
    })
    return { items: collaborators }
}

export {
    getCollaborators,
    GetCollaboratorsRequest,
    GetCollaboratorsResponse
}
