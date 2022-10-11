import { useState, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import { Preloader } from "./Preloader";
import { GoodsList } from "./GoodsList";
import { Cart } from "./Cart";
import { BasketList } from "./BasketList";
import { Alert } from "./Alert";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alert, setAlert] = useState("");

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((date) => {
        date.shop && setGoods(date.shop);
        setLoading(false);
      });
  }, []);

  function handleBasketShow() {
    setBasketShow(!isBasketShow);
  }

  function deleteBasketItem(item) {
    const newOrder = order.filter((el) => {
      return el.mainId !== item;
    });
    setOrder(newOrder);
  }

  function changeAmount(flag, item) {
    const newOrder = order.map((el) => {
      if (el.mainId === item) {
        if (flag) {
          return { ...el, quantity: el.quantity + 1 };
        } else {
          const min = el.quantity - 1;
          if (min > 0) {
            return { ...el, quantity: min };
          }
        }
      }
      return el;
    });
    setOrder(newOrder);
  }

  function addCart(item) {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );
    console.log(item.mainId);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      console.log("ok");
      const newItem = order.map((el, index) => {
        if (itemIndex === index) {
          return {
            ...el,
            quantity: el.quantity + 1,
          };
        } else {
          return el;
        }
      });
      setOrder(newItem);
    }
    setAlert(item.displayName);
  }

  function closeAlert() {
    setAlert("");
  }

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? <Preloader /> : <GoodsList goods={goods} add={addCart} />}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          deleteBasketItem={deleteBasketItem}
          changeAmount={changeAmount}
        />
      )}
      {alert && <Alert displayName={alert} closeAlert={closeAlert} />}
    </main>
  );
}

export { Shop };
