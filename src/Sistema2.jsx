const stock = [
  { producto: "remera", marca: "adidas", precio: 250 },
  { producto: "remera", marca: "adidas", precio: 250 },
  { producto: "remera", marca: "nike", precio: 250 },
  { producto: "remera", marca: "nike", precio: 250 },
  { producto: "remera", marca: "puma", precio: 250 },
  { producto: "remera", marca: "puma", precio: 250 },
];

function Sistema2() {
  return (
    <div>
      <p>FILTRO EL ARRAY Y LUEGO LO MAPEO</p>
      {stock
        .filter((item) => item.marca == "nike")

        .map((item_map) => (
          <>
            <p>{item_map.producto}</p>
            <p>{item_map.marca}</p>
            <p>{item_map.precio}</p>
          </>
        ))}
    </div>
  );
}

export default Sistema2;
