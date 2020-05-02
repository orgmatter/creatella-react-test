export const Endpoints = {
    host: 'http://localhost:3000',
    uri: '/products',
    queryParams: {
        paginate: {
            page: '_page',
            limit: '_limit',
            limitDefault: '_limit=15',
        },
        sorting: {
            sort: '_sort'
        }
    }
}