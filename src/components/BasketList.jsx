import { BasketItem } from "./BasketItem";

function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    deleteBasketItem = Function.prototype,
    changeAmount = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.regularPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Basket</li>
      {order.length ? (
        order.map((el) => (
          <BasketItem
            key={el.mainId}
            {...el}
            deleteBasketItem={deleteBasketItem}
            changeAmount={changeAmount}
          />
        ))
      ) : (
        <li className="collection-item">Nothing</li>
      )}
      <li className="collection-item active">Sum: {totalPrice} rub</li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
      <button className="secondery-content btn-small right">Buy</button>
    </ul>
  );
}
export { BasketList };
