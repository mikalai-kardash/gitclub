import { searchRepositories } from '../api/search/search-repositories'

const search_repositories = async (_root: any, _args: any, _context: any, _info: any) => {
    const repositories = await searchRepositories()
    return repositories.items.map(r => ({
        id: r.node_id,
        name: r.full_name
    }));
}

export default {
    search_repositories,
}
