function Restaurant({ name, img }) {
    return(
        <div className="restaurant">
            <h3>{name}</h3>
            <img src={img} alt="" />
        </div>
    )
}

export default Restaurant;