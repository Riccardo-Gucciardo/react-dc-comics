
function Header(){
    return(
        <>
        <header>
            <div className="container">
                <figure>
                    <img src="src/assets/img/dc-logo.png" alt="" />
                </figure>
                <nav>
                    <ul>
                        <li ><a href="#">link</a></li> 
                        <li className="active"><a href="#">link</a></li>
                        <li><a href="#">Caracter</a></li>
                        <li><a href="#">Comics</a></li>
                        <li><a href="#">Movies</a></li>
                        <li><a href="#">Tv</a></li>
                        <li><a href="#">Games</a></li>
                        <li><a href="#">Collectables</a></li>
                        <li><a href="#">Videos</a></li>
                        <li><a href="#">Fans</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>

    );

}

export default Header;