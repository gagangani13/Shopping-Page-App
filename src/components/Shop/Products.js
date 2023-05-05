import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const Products = () => {
  const products = [
    {
      title: "Gears",
      price: 60,
      description: "This is a first riding gears - amazing!",
    },
    {
      title: "Chocalates",
      price: 6,
      description: "This is a first chocalate - amazing!",
    },
    {
      title: "Books",
      price: 10,
      description: "This is a first book - amazing!",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((item) => {
          return (
            <ProductItem
              title={item.title}
              description={item.description}
              price={item.price}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
