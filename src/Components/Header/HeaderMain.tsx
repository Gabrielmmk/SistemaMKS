import React from "react";
import './HeaderMain.scss';

const Header = () => {
    return (
        <>
            <nav className="navbar header mb-5">
                <div className="container-fluid" id="name">
                    <a className="navbar-brand" id="MKS">MKS<span>Sistemas</span></a>
                    <form className="d-flex">
                        <button 
                            className="btn bg-white botao" 
                            type="button"
                            data-bs-toggle="offcanvas" 
                            data-bs-target="#offcanvasRight" 
                            aria-controls="offcanvasRight"
                        >
                            <i className="fas fa-shopping-cart"></i> 0
                        </button>
                    </form>
                </div>
            </nav>

            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrinho de compras</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    Conteúdo do offcanvas
                </div>
            </div>
        </>
    );
};

export default Header;
