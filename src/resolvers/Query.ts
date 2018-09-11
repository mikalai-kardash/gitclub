import { searchRepositories } from '../api/search/search-repositories'

const resolveRepositories = async (_root: any, args: any, _context: any, _info: any) => {
    const {
        search: {
            query: { query, language }
        }
    } = args;

    const repositories = await searchRepositories({
        query: {
            query,
            language,
        }
    })

    return repositories.items.map(r => ({
        id: r.id,
        name: r.name,
        owner: {
            id: r.owner.id,
            login: r.owner.login
        }
    }));
}

export default {
    repositories: resolveRepositories,
}
