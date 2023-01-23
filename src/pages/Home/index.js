import Menu from "../../components/Menu";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import EmAlta from "../../components/EmALta";

export default function Home() {
    return (
        <div>
            <Header/>
            <Menu active="home"/>

            <Banner/>
            <EmAlta/>
        </div>
    );
}
