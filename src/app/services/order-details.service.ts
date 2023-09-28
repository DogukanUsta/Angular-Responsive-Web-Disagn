import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id: 1,
      foodName: "Grilled chicken",
      foodPrice: 200,
      foodImg: "assets/img/chickengrilled.jpg",
      foodDetails: "Delicious grilled chicken. It is served with fried potatoes on the side."
    },
    {
      id: 2,
      foodName: "Grilled meat balls",
      foodPrice: 300,
      foodImg: "assets/img/meat grilled.jpg",
      foodDetails: "Meatballs with the consistency of Turkish delight. It is served with fried potatoes on the side."
    },
    {
      id: 3,
      foodName: "Observation",
      foodPrice: 150,
      foodImg: "https://media.istockphoto.com/id/1463802808/tr/foto%C4%9Fraf/traditional-turkish-flatbread-or-gozleme-with-tomatoes-olives-and-tea-on-dark-stone-table.jpg?s=2048x2048&w=is&k=20&c=4-yd_p_eAUHdHXK3Zy8CRhoRW8Yf5zECeQ7tcT6-F4w=",
      foodDetails: "Delicious pancake as a snack. Served with cucumber and tomato."
    },
    {
      id: 4,
      foodName: "Hamburger",
      foodPrice: 180,
      foodImg: "assets/img/hamburger.jpg",
      foodDetails: "Delicious hamburger menu that you can't get enough of. French fries and coke are a must."
    },
    {
      id: 5,
      foodName: "Toast",  
      foodPrice: 130,
      foodImg: "https://media.istockphoto.com/id/1254184564/tr/foto%C4%9Fraf/patates-k%C4%B1zartmas%C4%B1-ile-amerikan-kul%C3%BCp-sandvi%C3%A7.jpg?s=612x612&w=0&k=20&c=zRreDdo80SzKyIRtRN9RNV-RmbM--5DXhmPmum7FYBM=",
      foodDetails: "A perfect snack with melted kashar cheese and fried sausage. The famous Toast served with cucumber and tomato."
    },
    {
      id: 6,
      foodName: "Cheesecake",
      foodPrice: 100,
      foodImg:"https://media.istockphoto.com/id/157750686/tr/foto%C4%9Fraf/chestnut-cake.jpg?s=2048x2048&w=is&k=20&c=eIMn1JjhLhWpw0vkG8L2XIBb4aHt4v9yl1-8X804jrs=",
      foodDetails: "Chessecake with tea on top of the meal. Dreamy..."  
    },
    {
      id: 7,
      foodName: "Mosaic Cake",
      foodPrice: 60,
      foodImg:"https://media.istockphoto.com/id/1170038736/tr/foto%C4%9Fraf/mozaik-pasta.jpg?s=612x612&w=0&k=20&c=9Bq2OE1ocLO5mwWFCr4UvWAwIliWyJMPCoJdIs8_Y4M=",
      foodDetails: "A homemade taste for chocolate and biscuit lovers. Mosaic cake..." 
    },
  ]
}
