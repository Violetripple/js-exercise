// Write a JavaScript program to display the current day and time in the following format.
// Today is : Friday. 
// Current time is : 4 PM : 50 : 22

const today = new Date();

    const day = today.getDay();
    const dayList = ["Sunday","Monday","Tuesday","Wednsday","Tursday","Friday","Saturday"];
    console.log(`Today is: ${dayList[day]}.`);

    let hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    let prepand = (hour >= 12)? ' PM ' : ' AM ';
    hour = (hour >= 12 )? hour - 12 : hour;
    if (prepand === ' PM ' && hour === 0) {
        if (minute === 0 && second === 0) {
            prepand = ' Noon';
            hour = 12;
        } else {
            prepand = ' PM';
            hour = 12;
        }
    }
    if (prepand === ' AM ' && hour === 0) {
        if (minute === 0 && second === 0) {
            prepand = ' Midnight';
            hour = 0;
        } else {
            prepand = ' AM';
            hour = 0;
        }
    } 

console.log(`Current time is : ${hour}${prepand} : ${minute} : ${second}`);