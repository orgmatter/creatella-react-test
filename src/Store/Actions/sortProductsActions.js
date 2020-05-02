export const sortProductAction = (sortParams) => dispatch => {

    const { btnClickStatus } = sortParams;
    const sortType = btnClickStatus && btnClickStatus.length > 0 ? btnClickStatus.find(btn => btn.isClick === true): false;
    
    dispatch({
        type: 'SEND_SORT_PARAMS',
        payload: btnClickStatus,
        isSortable: sortType ? sortType.btnName : sortType,
    })
    
}