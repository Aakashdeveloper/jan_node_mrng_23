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
> (POST) Place Order

// Page5 (OrderListing Page)
> (Get) List All order placed
> (Get) Order wrt to email
> (Delete) Delete order
> (Put) Update Order