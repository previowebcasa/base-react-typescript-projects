import { useState } from 'react';
import { Product } from '../interfaces/interfaces';




interface ProductInCart extends Product {
    count:number
}

export const useShoppingCard=()=>{

    const [shoppingCart, setShoppingCart] = useState<{[key:string]:ProductInCart}>({})

    const onProductCountChange = ({count,product}:{count:number,product:Product}) =>{ 
        
        setShoppingCart(oldShoppingCart => {
            
            const productInCard:ProductInCart=oldShoppingCart[product.id]|| {...product,count:0};
            
            if (Math.max(productInCard.count + count, 0)> 0) {
                productInCard.count += count;
                return{
                        ...oldShoppingCart,
                        [product.id]:productInCard
                    }    
            }
                else{
                    const {[product.id]:toDelete, ...rest}= oldShoppingCart;
                       return rest;
                }
            
            // if(count===0){
            //     const {[product.id]:toDelete, ...rest}= oldShoppingCart;
            //     return rest;
            // }

            // console.log(shoppingCart);
            // return{
            //     ...oldShoppingCart,
            //     [product.id]:{...product,count}
            // }
        })
    }
    return {
        shoppingCart,onProductCountChange
    }
}