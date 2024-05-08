
let guest :string[] = ['Usama','Kamil','Jaseem'];

let absent_guest :string = 'Usama';

let new_guest :string = 'Umair';

guest[0] = new_guest;

for(let i=0; i<guest.length; i++){
    console.log('Hi Mr ' + guest[i] + ' I Am Invite In PC Hotel For Dinner\n\nThank You\n\n');
}

console.log('Mr ' + absent_guest + ' Is Not Coming For Dinner')

console.log('Find A Big Tabel, So I Am Inviting 3 More Guest');

 guest.unshift('Moiz Ansari');
 guest.splice(2 , 0 , 'Moiz Khan');
 guest.push('Haris')

for(let i=0; i<guest.length; i++){
    console.log('Hi Mr ' + guest[i] + ' I Am Invite In PC Hotel For Dinner\n\nThank You\n\n');
}
