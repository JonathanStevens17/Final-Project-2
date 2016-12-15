class Cart{
  //What is the first part of every class? Type it below
constructor(itemList, itemQuantity){
 this.itemList = [];
 this.itemQuantity = [];
}


  //Type the instance functions below this comment.
addItem(i, q){
this.itemList.push(i);
this.itemQuantity.push(q);
}

totalCart(){
  let total = 0
  for(var c=0;c < this.itemList[].length;c++)
   total = total+this.itemList[c].price+this.itemQuantity[c];
}
 return total;
}
subCart(days){
 let subCart = new Cart();
  for(var c=0;c < this.itemList[].length;a++)
    if(this.itemList[c].shipping == days){
      subCart.itemList.push(this.itemList[c]);
      subCart.itemQuantity.push(this.itemQuantity[c]);
    }
return subCart;
}
