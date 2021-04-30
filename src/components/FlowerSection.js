import React from 'react';
import '../styles/FlowerSection.css';
import FlowerCard from './FloweCard';


class FlowerSection extends React.Component {
    state = {
        productos: [
            {
                name:"Rosa Roja",
                src:"https://images.unsplash.com/photo-1548094967-e25a127d1f6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGJvdXF1ZXQlMjByb3NlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Están reservadas para la pareja o persona que ocupa nuestro corazón, hermoso detalle.",
                precio:"$499.00",
                info:"Ver producto"               
                
            },
            {
                name:"Dahlia",
                src:"https://images.unsplash.com/photo-1568613440101-c4f248d147e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1281&q=80",
                description:"Una hermosa flor cargada de pétalos, representan la pasión y el impulso.",
                precio:"$349.00",
                info:"Ver producto"
            },
            {
                name:"Iris ",
                src:"https://images.unsplash.com/photo-1602008903362-c8647f986df5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGFzdHJvbWVsaWElMjBmbG93ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Es un símbolo de poder, soberanía, honor y lealtad, y también de pureza de cuerpo y alma.",
                precio:"$319.00",
                info:"Ver producto"

            },
            {
                name:"Geranio",
                src:"https://images.unsplash.com/photo-1593373846058-2baa65cd3e0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGFzdHJvbWVsaWElMjBmbG93ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Puede ser usada como regalo para alguien con quien has planeado un encuentro.",
                precio:"$299.00",
                info:"Ver producto"
            },
            {
                name:"Margarita",
                src:"https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpc3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Son el símbolo de la pureza, la inocencia, la amistad incondicional y el amor puro.",
                precio:"$359.00",
                info:"Ver producto"
            },
            {
                name:"Orquidea Blanca",
                src:"https://cdn.pixabay.com/photo/2018/07/06/04/31/orquidea-3519739__340.jpg",
                description:"El blanco se asocia con la pureza es la mejor forma de expresar el amor puro.",
                precio:"$599.00",
                info:"Ver producto"
            },
            {
                name:"Orquidea Morada",
                src:"https://cdn.pixabay.com/photo/2018/07/06/04/31/orquidea-3519739__340.jpg",
                description:"Simbolizan justicia, prudencia y sabiduría, ideales para decoración de iglesias.",
                precio:"$539.00",
                info:"Ver producto"
            },
            {
                name:"Lirios",
                src:"https://cdn.pixabay.com/photo/2018/07/16/21/02/lirio-3542892__340.jpg",
                description:"También conocida como azucena, un símbolo de la inocencia y la pureza.",
                precio:"$289.00",
                info:"Ver producto"
            },
            {
                name:"Astromelia",
                src:"https://cdn.pixabay.com/photo/2020/01/16/22/41/astromelias-4771957__340.jpg",
                description:"Representan una faceta muy importante de la amistad, tienen variedad de color.",
                precio:"$309.00",
                info:"Ver producto"
            },
            {
                name:"Claveles",
                src:"https://cdn.pixabay.com/photo/2016/09/12/16/29/clavel-1665073__340.jpg",
                description:"Flor de los Dioses, simbolizan la belleza y el orgullo, ideales para regalo.",
                precio:"$275.00",
                info:"Ver producto"
            },
            {
                name:"Nochebuena",
                src:"https://cdn.pixabay.com/photo/2017/12/05/00/54/good-night-2998274__340.jpg",
                description:"Flor de pascua, simbolo de las festividades decembrinas que decoran tu hogar. ",
                precio:"$349.00",
                info:"Ver producto"
            },
            {
                name:"Girasoles",
                src:"https://cdn.pixabay.com/photo/2013/05/31/19/09/sunflowers-115061__340.jpg",
                description:"Es el simbolo del sol, simboliza el amor, la admiración y la felicidad, ideal para regalo.",
                precio:"$329.00",
                info:"Ver producto"
            }
        ]
    };

    render() {
        return (
            <div style={{display:"flex", justifyContent: "center"}}>
               <div className='flower-section' >
                {this.state.productos.map((flower) => (
                   <FlowerCard
                       name={flower.name}
                       src={flower.src}
                       description={flower.description}
                       precio={flower.precio}
                       info={flower.info}
                    />
                ))}    
              </div> 
            </div>
            
        );
    }
};

export default FlowerSection;