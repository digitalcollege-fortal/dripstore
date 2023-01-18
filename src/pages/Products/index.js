import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import HighlightIcon from "../../components/HighlightIcon";

export default function Products() {
    return (
        <div>
            <Header/>
            <Menu active="products"/>
            <Banner/>
            <HighlightIcon/>

            Pagina de Produtos
        </div>
    );
}
