import React from "react";
import './ItemCardMain.scss';

interface ItemCardProps {
    name: string;
    description: string;
    photo: string;
    price: string;
}

const ItemCard: React.FC<ItemCardProps> = ({ name, description, photo, price }) => {
    return (
        <div className="container mt-5">
            <div id="CardItem">
                <img src={photo} alt="" />
                <div className="row" style={{padding: '0px'}}>
                    <div className="col-7 col-sm-7 col-md-7">
                        <p className="NameProduct">{name}</p>
                    </div>
                    <div className="col-4 col-sm-4 col-md-4">
                        <p className="Price">{price}</p>
                    </div>
                </div>
                <div>
                <p className="description">{description}</p>
                <button><i className="fas fa-shopping-bag"></i> COMPRAR</button>
                </div>
            </div>
        </div>
    );
};

export default ItemCard;
