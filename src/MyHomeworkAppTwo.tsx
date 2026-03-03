export function MyHomeworkAppTwo() {
  const firstName = "Gabriel José";
  const lastName = "García Márquez";

  const favoriteBooks = [
    "Bible",
    "Le Petit Prince",
    "La historia, los viajes y la abuela",
  ];

  const isActive = false;

  const address = {
    zipCode: "ABC-123",
    country: "Colombia",
  };

  return (
    <>
      <section>
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>

        <p>{favoriteBooks.join("; ")}</p>
        <p>{2 + 2}</p>
        <p>2 + 2</p>
      </section>

      <hr></hr>

      <section>
        <h1>{isActive ? "Active" : "Not active"}</h1>
      </section>

      <hr />

      <section>
        {/* <p>{address}</p> - React no permite colocar objetos */}
        <p>{JSON.stringify(address)}</p>
      </section>
    </>
  );
}
