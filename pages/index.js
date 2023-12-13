import path from 'path';
import fs from 'fs/promises';
import { cwd } from 'process';
export default function HomePage(props){

    const {products } = props; 
    return(
        <ul>
        {products.map(products => (<li key = {products.id}>
            {products.title}</li>
        ))}
        </ul>
    )
}

export async function getStaticProps(){
    console.log('(Re-)Generating...');
    const filePath  = path.join(process.cwd(), 'data', 'dummy-backend.json')
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return {props:{
        products: data.products
    },
    revalidate:10
};
} 