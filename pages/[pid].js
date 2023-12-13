import path from 'path';
import fs from 'fs/promises';
import { Fragment,  } from "react";

export default function ProductDetailPage(){
    const {loadedproduct} = props;


    return(
        <Fragment>
            <h1>{loadedproduct.title}</h1>
            <p>{loadedproduct.description}</p>
        </Fragment>
    )
}

export async function getStaticProps(context){
    const{params} = context;
    const productId = params.product.id;

    const filePath  = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const product = data.product.find(product => product.id ===productId);

    return{
        props:{
            loadedproduct:product
        }
    }


}