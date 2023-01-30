import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";

import HighlightCards from "../../components/HighlightCards";
import Footer from "../../components/Footer";
import EmAlta from "../../components/EmALta";
import OfertaEspecial from "../../components/OfertaEspecial";

export default function Home() {
    return (
        <div>
            <Header/>
            
            <Menu active="home"/>

            <Banner/>

            <HighlightCards/>

            <Footer/>

            <EmAlta/>
            
            <OfertaEspecial/>

        </div>
    );
}
