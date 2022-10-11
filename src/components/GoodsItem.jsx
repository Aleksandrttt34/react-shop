function GoodsItem(props) {
  const { mainId, displayName, displayDescription, price, displayAssets } =
    props;
  const regularPrice = price.regularPrice;

  return (
    <div className="card" id={mainId}>
      <div className="card-image">
        <img
          src={displayAssets.map((item) => item.full_background)}
          alt={displayName}
        />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() => props.add({ mainId, displayName, regularPrice })}
        >
          Buy
        </button>
        <span className="right" style={{ fontSize: "1.8rem" }}>
          {price.regularPrice} RUB
        </span>
      </div>
    </div>
  );
}

export { GoodsItem };
