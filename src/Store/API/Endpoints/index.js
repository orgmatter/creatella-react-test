export const Endpoints = {
    host: 'https://localhost:3000',
    uri: {
        page: '/products',
        advert: '/ads',
    },
    queryParams: {
        paginate: {
            page: '_page',
            limit: '_limit',
            limitDefault: '_limit=20',
        },
        sorting: {
            sort: '_sort'
        },
        random: {
            key: '?r'
        }
    }
}