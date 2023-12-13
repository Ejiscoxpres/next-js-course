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
    return {props:{
        products: [{id: 'p1', title: 'product1'}],
    },
};
} 