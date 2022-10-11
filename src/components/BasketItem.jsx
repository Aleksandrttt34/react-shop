function BasketItem(props) {
  const {
    mainId,
    displayName,
    regularPrice,
    quantity,
    deleteBasketItem = Function.prototype,
    changeAmount = Function.prototype,
  } = props;

  return (
    <li className="collection-item">
      {displayName}
      <span className="amount" onClick={() => changeAmount(false, mainId)}>
        <i className="material-icons">remove</i>
      </span>
      x{quantity}
      <span className="amount" onClick={() => changeAmount(true, mainId)}>
        <i className="material-icons">add</i>
      </span>
      = {regularPrice * quantity} rub
      <span
        className="secondary-content"
        onClick={() => deleteBasketItem(mainId)}
      >
        <i className="material-icons delete">close</i>
      </span>
    </li>
  );
}
export { BasketItem };
