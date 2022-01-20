import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';
import '../styles/custom-styles.css';
import { Product } from '../interfaces/interfaces';

import { products } from '../data/products';
const product =products[0];

export const ShoppingPage = () => {
    
    

    
    
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

             
 

                    <ProductCard 
                    key={product.id}
                    product={ product}
                    initialValues={{count:0,
                                    maxCount:10}}
                    className="bg-dark text-white">
                        {   
                            (arg)=>(
                                <>
                                
                                <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                                <ProductTitle className="text-bold" />
                                <ProductButtons className="custom-buttons" />
                                <button onClick={arg.reset}>reset</button>
                                {arg.count>=2 &&<button onClick={()=>arg.increaseBy(-2)}>-2</button>}
                                {!arg.isMaxCountReached && <button onClick={()=>arg.increaseBy(2)}>+2</button>}
                                <span>{arg.count} - {arg.maxCount}</span>
                                </>
                                )

                        }
                    </ProductCard>
             

             
 

            </div>
        
           
            
        </div>
    )
}