"use strict";
let guest = ['Usama', 'Kamil', 'Jaseem'];
for (let i = 0; i < guest.length; i++) {
    console.log('Hi Mr ' + guest[i] + ' I Am Invite In PC Hotel For Dinner\n\nThank You\n\n');
}
let absent_guest = 'Usama';
let new_guest = 'Umair';
guest[0] = new_guest;
for (let i = 0; i < guest.length; i++) {
    console.log('Hi Mr ' + guest[i] + ' I Am Invite In PC Hotel For Dinner\n\nThank You\n\n');
}
console.log('Mr ' + absent_guest + ' Is Not Coming For Dinner');
