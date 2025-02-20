const ProductCard = (props) => {

    const {product} = props
    
    return(
        <div className="card" key={product.id}>
            <img src={product.thumb} alt="" />
            <h3>{product.title}</h3>
        </div>
    )

}

export default ProductCard