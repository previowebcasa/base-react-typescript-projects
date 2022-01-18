import { useContext } from "react";
import { ProductContext } from './ProductCard';
import no_img from '../assets/no-image.jpg' 
import styles from '../styles/styles.module.css'






export const ProductImage =({img=''})=>{
    const {product} = useContext(ProductContext)
    let imgToShow:string;
    if(img){
        imgToShow=img
    }else if(product.img){
        imgToShow=product.img
    }else{
        imgToShow=no_img
    }

    return(
        <img className={styles.productImg} src={imgToShow} alt="Not Image" />
    )
}