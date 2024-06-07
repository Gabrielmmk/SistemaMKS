import React, { useState, useEffect } from "react";
import './SectionMain.scss';
import ItemCard from "../ItemCard/ItemCardMain";

interface TodoItem {
    count: number;
    name: string;
    id: number;
    description: string;
    photo: string;
    price: number;
}

const SectionMain = () => {
    // Configuração do NumberFormat para moeda sem casas decimais
    const currencyFormatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 0, // Sem casas decimais
        maximumFractionDigits: 0  // Sem casas decimais
    });

    const [itens, setItens] = useState<TodoItem[]>([]);

    useEffect(() => {
        fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
            .then(res => res.json())
            .then(res => setItens(res.products as TodoItem[]))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="container">
            <div className="row">
                {itens.map((item) => (
                    <div key={item.id} className="col-sm-12 col-md-5 col-lg-3">
                        <ItemCard
                            name={item.name}
                            description={item.description}
                            photo={item.photo}
                            price={currencyFormatter.format(item.price)} // Removendo as casas decimais
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SectionMain;
