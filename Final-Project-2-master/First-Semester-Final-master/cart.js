class Cart{
  //What is the first part of every class? Type it below
constructor(itemList, itemQuantity){
 this.itemList = [];
 this.itemQuantity = [];
}


  //Type the instance functions below this comment.
addItem(i, q){
let i = this.itemList.push(i);
let q = this.itemQuantity.push(q);
}

totalCart(){
  let total = 0
  for(var c=0;c < this.itemList[].length;c++)
   total = total+this.itemList[c]+this.itemQuantity[c];
}
 return total;
}
subCart(days){
 let subCart = new Cart();
  for(var f=0;f < this.itemList[].length;a++)
    if(this.itemList[f].shipping == days){
      subCart.itemList.push(this.itemList[f]);
      subCart.itemQuantity.push(this.itemQuantity[f]);
    }

}
return subCart;
}
