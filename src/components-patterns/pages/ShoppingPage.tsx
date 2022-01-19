import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';
import { useState } from 'react';
import { useShoppingCard } from '../hooks/useShoppingCard';
import { products } from '../data/products';


export const ShoppingPage = () => {
    
    
     const {shoppingCart,onProductCountChange}=useShoppingCard()
    
    
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

             
                {products.map((product:Product)=>( 

                    <ProductCard 
                    key={product.id}
                    product={ product}
                    value={shoppingCart[product.id]?.count || 0}
                    onChange={(evento)=> onProductCountChange(evento)}
                    className="bg-dark text-white">
                        <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                        <ProductTitle className="text-bold" />
                        <ProductButtons className="custom-buttons" />
                    </ProductCard>
                    ))
                }

             


            </div>
            <div className='shopping-cart'>
            {Object.entries(shoppingCart).map(([key,product])=>( 

                            <ProductCard 
                             key={key}
                             style={{width:'100px'}}
                             value={product.count}
                            product={ product}
                            onChange={(evento)=> onProductCountChange(evento)}
                            className="bg-dark text-white">
                                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                               
                                <ProductButtons className="custom-buttons" style={{ display:'flex', justifyContent:'center'}} />
                            </ProductCard>
                            ))}
              


            </div>
           
            
        </div>
    )
}