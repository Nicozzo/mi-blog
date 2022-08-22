import Link from "next/link";
import { useState } from "react";
import Layout from "./layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap";


export default function PrimerPost({ posts }) {

    //const [searchInput, setSearchInput] = useState('');
    //const [filteredResults, setFilteredResults] = useState([]);
    
   /* const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = posts.filter((post) => {
                return Object.values(post).join('').includes(searchInput)
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(post)
        }
    }*/

    return(
        <Layout>
       <div>
            <h1>All Posts</h1>
            <input type = "text" 
                id = "text" 
                placeholder="Select a UserId"
                onChange={(e) => searchItems(e.target.value)} 
                />
                {posts.map(post => (
                        <Link href={'/challenge/'+ post.id} key = {post.id}>
                            <Card style={{ width: '18rem' }} className = "box">
                            <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.title}</Card.Text>
                            </Card.Body>
                            </Card>
                            
                        </Link>
                        
                    
                ))}

        </div>
        </Layout>
    )
}
// Funcion que carga datos de forma dinamica en el blog 
export async function getStaticProps(){
    const data = await fetch ("https://jsonplaceholder.typicode.com/posts");

    const jsondata = await data.json(); // Solicitud HTTP o Request


    return {
        props : {posts : jsondata }, // Regresando a modo de props la info que tenemos ahi
    }
}
