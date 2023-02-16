// Page1 (search Page)
> List of city
(GET) http://localhost:1009/location

> List of restaurants
(GET) http://localhost:1009/restaurants

> Restaurants wrt City
(Get) http://localhost:1009/restaurants?stateId=1

> List of MealTypes
(Get) http://localhost:1009/mealTypes

// Page2 (listing Page)
> (Get) Restaurants wrt to meal
* http://localhost:1009/restaurants?mealId=5
* http://localhost:1009/restaurants?mealId=1&stateId=3

> (Get) Restaurants wrt to meal + cuisine
* http://localhost:1009/filter/2?cuisineId=4

> (Get) Restaurants wrt to meal + cost
* http://localhost:1009/filter/1?lcost=500&hcost=1000

> (Get) Restaurants sort wrt to cost
* http://localhost:1009/filter/1?cuisineId=2&sort=-1

> (Get) Pagination
* http://localhost:1009/filter/1?cuisineId=2&skip=2&limit=2

// Page3 (details Page)
> (Get) Restaurants Details
* http://localhost:1009/details/6288d22dbb17b75750d11ca5
> (Get) Menu Wrt to restaurants
* http://localhost:1009/menu/3

// Page4 (placeOrder Page)
> (POST) Menu details
* http://localhost:1009/menuItem
 {
 	"id":[4,7,33]
 }

> (POST) Place Order
* http://localhost:1009/placeOrder
{
	"orderId" : 1,
	"name" : "Isha",
	"email" : "isha@gmail.com",
	"address" : "Hom 65",
	"phone" : 8934645457,
	"cost" : 811,
	"menuItem" : [
		23,56,78
	]
}

// Page5 (OrderListing Page)
> (Get) List All order placed
* http://localhost:1009/orders
> (Get) Order wrt to email
* http://localhost:1009/orders?email=isha@gmail.com

> (Delete) Delete order
* http://localhost:1009/removeOrder

> (Put) Update Order
* http://localhost:1009/orders
{
	 "_id": "63a853ea0e78b8c74289445b",
	 "status":"Cancelled"
}