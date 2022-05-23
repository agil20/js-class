let user={
name:"Aqil",
age:20



}


delete user["namee"]
// for (let keybord in user) {
//   alert(keybord);
//   alert(user[keybord])
    
// }
let person={
salary:100

}
Object.assign(user,person);

let person2 =Object.assign({},user)
  console.log(person2.name);
  let menu = {
    en: 200,
    boy: 300,
    baslik: "Menü"
  };
  


  function ikivur(obj){
  for (let key in obj) {
    if (typeof obj[key]=="number")
     {

     obj[key]=    obj[key]*2
   
    }
    
  }console.log(obj);}
  
ikivur(menu)