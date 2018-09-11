import { getCollaborators } from '../api/repositories/collaborators/get-collaborators'

const resolveCollaborators = async (root: any, _args: any, _context: any, _info: any) => {   
    const collaborators = await getCollaborators({
        repository: +root.id,
        owner: +root.owner.id
    })

    return collaborators.items.map(c => ({
        id: c.id,
        login: c.login
    }));
}

export default {
    collaborators: resolveCollaborators
}
