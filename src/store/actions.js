export const fetchProductDetails = () => {
    return (dispatch) => {
        dispatch({ type: 'FETCH_PRODUCT_START' });

        // Simulate fetching data
        fetch('/mock_data/small_data.json')
            .then(res => res.json())
            .then(data => {
                dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: { product: data.product, sales: data.sales } });
            })
            .catch(error => {
                dispatch({ type: 'FETCH_PRODUCT_ERROR', payload: error });
            });
    };
};
