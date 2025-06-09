/**
Numbers to Objects
Mubashir needs your help in a simple task.

Given an array of numbers arr:

Create an object for each given number.
The object key will be the number converted to a string.
The value will be the corresponding character code converted to a string (check ASCII table).
Return an array of the resulting objects.
Examples

numObj([118, 117, 120]) ➞ [{'118':'v'}, {'117':'u'}, {'120':'x'}]

numObj([101, 121, 110, 113, 103]) ➞ [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]

numObj([118, 103, 110]) ➞ [{"118":"v"}, {"103":"g"}, {"110":"n"}]

Notes
All inputs will be an array of numbers.
All character codes are valid lower case letters.
The input array will not be empty.
 */
function numObj(ar: number[]) : {[key: string]: string}[] {

    return ar.map( num => ({ [num] : String.fromCharCode(num)}) );
}


console.log(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}])
console.log(numObj([101,121,110,113,113,103]), [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}])
console.log(numObj([118,103,110,109,104,106]),[{"118":"v"},{"103":"g"},{"110":"n"},{"109":"m"},{"104":"h"},{"106":"j"}])
console.log(numObj([107,99,110,107,118,106,112,102]),[{"107":"k"},{"99":"c"},{"110":"n"},{"107":"k"},{"118":"v"},{"106":"j"},{"112":"p"},{"102":"f"}])
console.log(numObj([100,100,116,105,117,121 ]) , [{"100":"d"},{"100":"d"},{"116":"t"},{"105":"i"},{"117":"u"},{"121":"y"}])
