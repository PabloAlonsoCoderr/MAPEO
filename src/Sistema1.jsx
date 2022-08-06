function Sistema1() {
  const stock = [
    { producto: "remera", marca: "adidas", precio: 250 },
    { producto: "remera", marca: "adidas", precio: 250 },
    { producto: "remera", marca: "nike", precio: 250 },
    { producto: "remera", marca: "nike", precio: 250 },
    { producto: "remera", marca: "puma", precio: 250 },
    { producto: "remera", marca: "puma", precio: 250 },
  ];

  const nike = stock.filter((item) => item.marca == "nike");

  const adidas = stock.filter((item) => item.marca == "adidas");

  return (
    <div>
      <p>MATEO VARIABLES YA FILTRADAS</p>
      {nike.map((item_map) => (
        <>
          <p>{item_map.producto}</p>
          <p>{item_map.marca}</p>
          <p>{item_map.precio}</p>
        </>
      ))}
    </div>
  );
}

export default Sistema1;
