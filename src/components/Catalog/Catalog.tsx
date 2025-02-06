import { produtos } from "../../data/data";

import { Card } from "../Card/Card";

export function Catalog() {
    return (
        <div className="catalog">
            <div className="catalogText">
                <h4 className="catalogTitle">Os melhores em um só lugar</h4>
                <p className="catalogParagraph">
                    A marca Jordan na JordanShoes é a escolha certa para os amantes de
                    sneakers que buscam estilo e conforto.
                </p>
            </div>

            <div className="containerCards">
                {produtos.map((produto) => (
                    <Card
                        name={produto.name}
                        description={produto.description}
                        value={produto.value}
                        image={produto.image}
                    />
                ))};
            </div>
        </div>
    )
};