export const Endpoints = {
    host: 'http://localhost:3000',
    uri: '/api/products',
    queryParams: {
        paginate: {
            page: '_page',
            limit: {
                str: '_limit',
                default: '_limit=15'
            },
        },
        sorting: {
            sort: '_sort'
        }
    }
}