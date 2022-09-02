function Timer(){
    let date1 = new Date('April 18, 2023');
    let date2 = new Date();
    let delDate = (date1 - date2)/1000/60/60/24;
    return(parseInt(delDate))
}
export default Timer;