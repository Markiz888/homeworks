function first(a) {
    for (let i = 0; i < a.length; i++) {
        if (3<a[i] && 10>a[i]) {
            console.log(a[i])
            
        }
        
    }
}


function second(a) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] === 4) {
            document.write('Наявний!');
            break
        }
        
    }
}

function third(a) {
    b = 0
    for (let i = 0; i < a.length; i++) {
           b += a[i]
        }   
    console.log(b / a.length);
}
function fourth(a) {
    b = 0
    for (let i = 0; i < a.length; i++) {
        b += a[i].length
    }
    console.log(b);
}
function fifth(a) {
    b = []
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] == 'string') {
            b.push(a[i])
        }
    }
    console.log(b);
}

let a = [0,1,2,2,3,3,8,2,4,134,131,5]
let b = [1, 2, 5, 9, 4, 13, 4, 10]
let c = [42, 2, 33, 11, 12, 10, 0]
let d = ["parrot", "bull", "bear", "monkey"]
let f = ["parrot", 140,"bull",true, 0, "bear", 47, "monkey"]
first(a)
second(b)
third(c)
fourth(d)
fifth(f)
