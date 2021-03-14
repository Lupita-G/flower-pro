import React from 'react';
import '../styles/FlowerSection.css';
import FlowerCard from './FloweCard';


class FlowerSection extends React.Component {
    state = {
        productos: [
            {
                name:"Rosa Roja",
                src:"https://images.unsplash.com/photo-1548094967-e25a127d1f6d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGJvdXF1ZXQlMjByb3NlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Están reservadas para la pareja o persona que ocupa nuestro corazón. Además de amor, las rosas rojas también representan la pasión."
            },
            {
                name:"Dahlia",
                src:"https://images.unsplash.com/photo-1568613440101-c4f248d147e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1281&q=80",
                description:"Una hermosa flor cargada de pétalos que realza por sus múltiples colores, representan la pasión y el impulso."
            },
            {
                name:"Iris ",
                src:"https://images.unsplash.com/photo-1602008903362-c8647f986df5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGFzdHJvbWVsaWElMjBmbG93ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Es un símbolo de poder, soberanía, honor y lealtad, y también de pureza de cuerpo y alma."
            },
            {
                name:"Geranio",
                src:"https://images.unsplash.com/photo-1593373846058-2baa65cd3e0b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzR8fGFzdHJvbWVsaWElMjBmbG93ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Puede ser usada como regalo para alguien con quien has planeado un encuentro. Esta simple flor no enviará un mensaje particularmente fuerte al receptor, pero será un buen regalo para sorprender a alguien."
            },
            {
                name:"Margarita",
                src:"https://images.unsplash.com/photo-1508784411316-02b8cd4d3a3a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFpc3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
                description:"Son el símbolo de la pureza, la inocencia, la amistad incondicional y el amor puro desligado de aquellas connotaciones que apunten hacia pasiones o romances entre personas. Simbolizan la alegría, la sencillez y la sofisticación natural"
            },
            {
                name:"Orquidea Blanca",
                src:"https://cdn.pixabay.com/photo/2018/07/06/04/31/orquidea-3519739__340.jpg",
                description:"El blanco se asocia siempre con la pureza y la eternidad. Por esta razón, regalar una orquídea blanca es la mejor forma de expresar el amor puro, incondicional y duradero a nuestros seres queridos."
            },
            {
                name:"Orquidea Morada",
                src:"https://cdn.pixabay.com/photo/2018/07/06/04/31/orquidea-3519739__340.jpg",
                description:"Simbolizan justicia, prudencia y sabiduría; suelen obsequiarse a los abogados, Psiquiatras y sacerdotes."
            },
            {
                name:"Lirios",
                src:"https://cdn.pixabay.com/photo/2018/07/16/21/02/lirio-3542892__340.jpg",
                description:"También conocida como azucena, del arábico as-susa-na, es una flor conocida ampliamente como un símbolo de la inocencia, la pureza y la virginidad.",
            },
            {
                name:"Astromelia",
                src:"https://cdn.pixabay.com/photo/2020/01/16/22/41/astromelias-4771957__340.jpg",
                description:"Cada uno de sus seis pétalos representan una faceta muy importante de la amistad. Entendimiento, humor, paciencia, empatía, compromiso y respeto dan forma a una flor colorida y llena de vida, perfecta para regalar a tus amigos."
            }
        ]
    };

    render() {
        return (
            <div className='flower-section'>
            {this.state.productos.map((flower) => (
                <FlowerCard
                    name={flower.name}
                    src={flower.src}
                    description={flower.description}
                />
            ))}    
            </div>
        );
    }
};

export default FlowerSection;