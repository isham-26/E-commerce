import Card from "../card_item/Card";
const Ccard = (props) => {
  return (
    <div className="flex justify-between flex-wrap">
      {props.items.map((item, index) => {
        if (item.category === props.cat) {
          return <Card item={item} key={index} />;
        } else if (props.cat === "All products") {
          return <Card item={item} key={index} />;
        }else{
            return null;
        }
      })}
    </div>
  );
};

export default Ccard;
