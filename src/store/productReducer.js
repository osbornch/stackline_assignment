const initialState = {
    productDetails: {},
    salesData: [],
    loading: false,
    error: null
};

function productReducer(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_PRODUCT_START':
            return { ...state, loading: true, error: null };
        case 'FETCH_PRODUCT_SUCCESS':
            return { ...state, loading: false, productDetails: action.payload.product, salesData: action.payload.sales };
        case 'FETCH_PRODUCT_ERROR':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
}

export default productReducer;
