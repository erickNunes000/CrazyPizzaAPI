/*---------------------------------------------------CRAZY PIZZA API--------------------------------------- */
/*
Author: Erico Fernandes Nunes
Description: Exerciting my studies on api/promises and async/await
*/
//test location fake location
let testLocation = {
  lat:"123.123",
  long:"456.456"
}
//Nearby pizza shops
let pizzaShops = [
                        {id:"123a",add:"Rua JJ Dourado",menu:["carne de sol","veg","frango"]},
                        {id:"321a",add:"Rua Monsenhor Dourado",menu:["4 queijos","veg","frango com catupiry"]},
                        {id:"456a",add:"Rua Maria Calado",menu:["calabresa","doc de leite","mussarela"]}
                      ]

//Returning menu from a list os pizza shops
const seek = (givenId,arr)=>{
  for(let i=0;i<arr.length;i++){
    if(arr[i].id==givenId){
      return arr[i].menu
    }
  }
  return "Not found"
}
//Looking for a near PizzaShop given long and lat
let nearPizzaShop = async ({lat, long})=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let givenId = "456a";
      if(lat==="123.123" && long==="456.456"){
        resolve(givenId)
      }else{
        reject(new Error("Counldnt find any"));
      }
    },1000)
  })
}
//Returning a menu from a list os pizza shops
let pizzaShop = async (givenId)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      let pizzaShops = [//list os pizza shops nearby
                        {id:"123a",add:"Rua JJ Dourado",menu:["carne de sol","veg","frango"]},
                        {id:"321a",add:"Rua Monsenhor Dourado",menu:["4 queijos","veg","frango com catupiry"]},
                        {id:"456a",add:"Rua Maria Calado",menu:["calabresa","doce de leite","mussarela"]}
                      ]
      let gotPizzaShop = seek(givenId,pizzaShops)
      if(gotPizzaShop){
        resolve(gotPizzaShop)
      }
    },2000)
  })
}
//implementing ...
//nearPizzaShop(testLocation).then( (res)=>{return pizzaShop(res)}).then((result)=>console.log(result)) .catch((error)=>console.log(error.message))

/*--------------------------------------------------IMPLEMENTING API---------------------------------------- */
//LINKS
let source = "https://crazyPizza/api/nearbyPizzaShop/searchAPI.com"//SEARCHING FOR A NEARBY PIZZA SHOP
let source2 = "https://crazyPizza/api/PizzaShop/searchAPI/id=456a.com"//LISTING MENU GIVEN A PIZZA ID
//FETCHING DATA
let seekApi = async(url)=>{
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      if(url.includes("https://crazyPizza/api/nearbyPizzaShop/searchAPI.com")){
        resolve( nearPizzaShop(testLocation).then((res)=>{return pizzaShop(res)}))
      }else if(url.includes("https://crazyPizza/api/PizzaShop/searchAPI/id=456a.com")){
        resolve( pizzaShop("456a"))
      }
      else{
        reject(new Error("Fetch failed"))
      }
    },1000)
  })
}
//TESTING...
seekApi(source2).then((res)=>console.log(res)).catch((e)=>console.log(e.message))
