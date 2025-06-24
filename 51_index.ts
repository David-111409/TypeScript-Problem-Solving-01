/**Write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there is 1 person, return "user1 online".
If there are 2 people, return "user1 and user2 online".
If there are n>2 people, return the first two names and add "and n-2 more online".
For example, if there are 5 users, return:

"user1, user2 and 3 more online"
Examples

chatroomStatus([]) ➞ "no one online"

chatroomStatus(["paRIE_to"]) ➞ "paRIE_to online"

chatroomStatus(["s234f", "mailbox2"]) ➞ "s234f and mailbox2 online"

chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
➞ "pap_ier44, townieBOY and 4 more online" */

export const chatroomStatus = (names:string[]) : string => {
    let l = names.length;

    if (l === 0) return "no one online";
    else if (l === 1){
        let [name] = names;
        return `${name} online`;
    }
    else if (l === 2){
        let [name1, name2] = names;
        return `${name1} and ${name2} online`;
    }
    else {
        let [name1, name2] = names;
        return `${name1}, ${name2} and ${l-2} more online`;
    }
};


console.log(chatroomStatus([]) === "no one online")
console.log(chatroomStatus(["becky325"]) === "becky325 online")
console.log(chatroomStatus(["becky325", "malcolm888"]) === "becky325 and malcolm888 online")
console.log(chatroomStatus(["becky325", "malcolm888", "fah32fa"]) === "becky325, malcolm888 and 1 more online")
console.log(chatroomStatus(["paRIE_to"]) === "paRIE_to online")
console.log(chatroomStatus(["s234f", "mailbox2"]) === "s234f and mailbox2 online")
console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"]) === "pap_ier44, townieBOY and 4 more online")
