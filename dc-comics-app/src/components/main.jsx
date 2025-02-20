import ProdctList from "./product/ProductList";

function Main(){
    return(
        <>
        <main>
        <section id="fumetti">
                <div className="containerBackground">
                </div>
            </section>
            <section id="fumetti">
                <div className="container">
                    <ProdctList />
                </div>
            </section>
            <section id="icons">
                <div className="container">
                    <ul>
                        <li>
                            <figure><img src="src/assets/img/buy-comics-digital-comics.png" alt="icon" /></figure>
                            <span>DIGITAL COMIX</span>
                        </li>
                        <li>
                            <figure><img src="src/assets/img/buy-comics-merchandise.png" alt="icon" /></figure>
                            <span>DC MERCHANDISE</span>
                        </li>
                        <li>
                            <figure><img src="src/assets/img/buy-comics-shop-locator.png" alt="icon" /></figure>
                            <span>SUBCRIPTION</span>
                        </li>
                        <li>
                            <figure><img src="src/assets/img/buy-comics-subscriptions.png" alt="icon" /></figure>
                            <span>COMIC SHOP LOCATION</span>
                        </li>
                        <li>
                            <figure><img src="src/assets/img/buy-dc-power-visa.svg" alt="icon" /></figure>
                            <span>DC POWER VISA</span>
                        </li>
                    </ul>
                </div>
            </section>

        </main>
        </>

    );

}

export default Main;