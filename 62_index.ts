const damage = (damage: number, 
                speed: number, 
                time: "second" | "minute" | "hour") : 
                number|"invalid" => {

                if (damage < 0 || speed < 0) return "invalid";

                if (time === 'second') return damage * speed ;

                else if (time === 'minute') return damage * speed * 60;

                return damage * speed * 60 * 60;
    
}
export default damage;

console.log(damage(40, 5, "second"), 200)
console.log(damage(100, 1, "minute"), 6000)
console.log(damage(2, 100, "hour"), 720000)
console.log(damage(20, 0.5, "minute"), 600)
console.log(damage(2, 400, "hour"), 2880000)
console.log(damage(-23, 20, "second"), "invalid")
console.log(damage(-23, -5, "second"), "invalid")
console.log(damage(20, -492321, "hour"), "invalid")
