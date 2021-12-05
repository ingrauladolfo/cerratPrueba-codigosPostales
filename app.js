const url = "https://api.republicofdevs.com/api/v1/zipcodes/";
let element = document.getElementById("body");
fetch(url)
  .then((response) => response.json())
  .then((data) => showData(data))
  .catch((error) => {
    console.error(error);
  });

const showData = (data) => {
  let content = data.content;
  content.map((item) => {
    const {
      id,
      codigoPostal,
      asentamiento,
      tipoAsentamiento,
      municipio,
      estado,
      ciudad,
    } = item;
    element.innerHTML += `
        <tr>
            <th>${id}</th>
            <th>${codigoPostal}</th>
            <th>${asentamiento}</th>
            <th>${tipoAsentamiento}</th>
            <th>${municipio}</th>
            <th>${ciudad}</th>
            <th>${estado}</th>
        </tr>
      `;
  });
};
