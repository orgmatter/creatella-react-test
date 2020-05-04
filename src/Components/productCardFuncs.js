export const cardParamFormat = (cardParam) => {

    const { type, value } = cardParam;
    if(type === 'price') {
        var price = (value/100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
        return price;


    }else if(type === 'date') {
        
        var date = new Date(value);
        var productDateSec = (date.getTime()/1000);
        var dateNowSec = (Date.now()/1000);
        var dayDiff = (Math.ceil((dateNowSec/3600)/24) - Math.ceil((productDateSec/3600)/24));

        const oneDay = 1;
        const oneWeek = 7;
        const overOneWeek = date.toDateString();
        
        if(dayDiff == oneDay) {
            return `${dayDiff} day ago`;
        }
        else if(dayDiff < oneWeek) {
            return `${dayDiff} days ago`;
        }else if(dayDiff == oneWeek) {
            return `1 week`;
        }else if(dayDiff > oneWeek) {
            return `${overOneWeek}`;
        }
    } 
}