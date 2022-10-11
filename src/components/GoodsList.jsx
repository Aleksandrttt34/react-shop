import { GoodsItem } from "./GoodsItem";

function GoodsList(props) {
  const { goods = [] } = props;

  if (!goods.length) {
    return <h3>Nothing</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.mainId} {...item} add={props.add} />
      ))}
    </div>
  );
}

export { GoodsList };
