import Layout from "./layout"


// Aqui mapeo por id los datos del archivo json 
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
     
    const paths = data.map(post => {
        return{
            params: {id: post.id.toString()}
        }
    })

    return{
        paths,
        fallback: false
    }
}

//Aqui genero las props con el id como referencia
export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts/' + id);
    const data = await res.json();

    return {
        props: {post : data }
    }
}




const details = ({post}) => {
    return (
    <Layout>
        <div>
            <h1>Titulo : {post.title}</h1>
            <p>Id del post : {post.id}</p>
            <p>User Id del post : {post.userId}</p>
            <p>Contenido : {post.body}</p>

        </div>
    </Layout>
    )
}

export default details;