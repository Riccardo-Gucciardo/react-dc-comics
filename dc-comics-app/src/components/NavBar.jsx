const NavBar = ( props ) =>{



    
    return (
        <nav>
        <ul>


            {
                props.links.map((link) =>{
                    return(
                        <li key={link.id}>{link.text}</li>
                    )
                })
            }
            {/* <li ><a href="#">link</a></li> 
            <li className="active"><a href="#">link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li> */}
        </ul>
    </nav>
    )
    
};

export default NavBar