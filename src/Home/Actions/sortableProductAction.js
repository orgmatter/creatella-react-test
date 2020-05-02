export const sortableProductAction = (productParams) => {

    const { url, productDispatch } = productParams;

    // productDispatch({
    //     type: 'FETCH_PRODUCT_BEGIN'
    // })
    fetch(url, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        productDispatch({
            type: 'FETCH_PRODUCT_SUCCESS',
            payload: data,
        })
    })
    .catch(e => {
        productDispatch({
            type: 'FETCH_PRODUCT_FAILED',
            message: e.message
        })
    })
}
