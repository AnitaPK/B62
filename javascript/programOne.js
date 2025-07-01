console.log("Hello world")

// string 

str1 = "Wisdom" 
str2 = "Sprouts"
console.log(str1,str2)
str3 = str1+ " " +str2
console.log(str3)
str4 = str1.concat(" ",str2, " IT Training Hub")
console.log(str4)
console.log(str1.length)

x = 5;
y = "5"
z = 6
add = x+z+y
console.log(add)    

sub = x-y        //5 -  "10"
console.log(sub)
// x = x+5        x+=5           x = x+1        x++
// * / %  **             3**5 
// arithmentic              assignment            logical                    comparison
// + - * / %               = += -= /= *= %=   and or not  && || !          == === > < <= >=  !=
                                                                        // only value, value with datatype
        

console.log(typeof(x), "x type of")
console.log(typeof(y), "y type of")

if(x === y){
    console.log("x and y are same")
}else{
    console.log("x and y are not same")
}

console.log(str4.toUpperCase())
console.log(str4.toLowerCase())
    str5 = "      6           "
    console.log(str5.length)
    console.log(str5.trim())

str6 = '123456789'
arr1 = str6.split('')

console.log(arr1)

console.log(arr1.length)

str7 = arr1.join("*")

console.log(str7)

arr2 = [1, 2, "apple", true, null, "", ]
arr3 = ["Apple", "Mango","Chickoo"]
len = arr3.length
for(i=0; i<len; i++){
    console.log("I love to eat ",arr3[i])
}

// 23 table 

1 - 10
x = 1;
while(x<=10){
    console.log("17 * " + x + " " + 17 * x)
    x++; 
}

// do{}while()
Age = 0
switch(Age){
 case 15:
    console.log("15 is your age")
    break;
 case 20:
    console.log("20 is your age")
    break;
 default:
    console.log("Invalid input")
}

// obj1 = {key:Value}

const student = {
    name:"Anup",
    address:{
        city:"Chiplun",
        pincode:123123
    },
    Degree:"BCA",
    Grade:9.9
}

console.log(student.name + " gots " + student.Grade + " in " +student.Degree)
console.log(student.address.city)


students = [
    {name:"Anup",
    address:{
        city:"Chiplun",
        pincode:123123
    },
    Degree:"BCA",
    Grade:9.9},{name:"Rahul",
    address:{
        city:"Chiplun",
        pincode:123123
    },
    Degree:"BCA",
    Grade:9.9},{name:"Shreya",
    address:{
        city:"Chiplun",
        pincode:123123
    },
    Degree:"BCA",
    Grade:9.9},
    {name:"Kirti",
    address:{
        city:"Chiplun",
        pincode:123123
    },
    Degree:"BCA",
    Grade:9.9}]


    // add new student, average grade, highest grade, filter city, grade wise sort 

// methods 
// for logic 


function greet(name){
    console.log("Hello ", name)
}

greet("Simran");
greet("Harsh");
greet("Darpan")


const greet1 =  (n) => {
    console.log("Hello from arrow: ", n)
}

greet1("Omkar")
greet1("Divya")

(function(){})()

(()=>{})()


