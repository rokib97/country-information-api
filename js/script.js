const loadDetails = () => {
  const inputElement = document.getElementById("input-field");
  const inputInText = inputElement.value;
  inputElement.value = "";
  if (inputInText == "") {
    return alert("Wrong Input");
  }
  const url = `https://restcountries.com/v3.1/name/${inputInText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showDetails(data[0]));
};

const showDetails = (data) => {
  //   console.log(data);
  //   console.log(data.currencies[Object.keys(data.currencies)[0]].name);
  const detailContainer = document.getElementById("details");
  detailContainer.textContent = "";
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="card mx-auto" style="width: 18rem">
            <img src="${data.flags.png}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${data.name.common}</h5>
                <p class="card-text">
                Population: ${data.population} <br>
                Capital: ${data.capital} <br>
                Region: ${data.region} <br>
                Timezone: ${data.timezones[0]} <br>
                Currency: ${
                  data.currencies[Object.keys(data.currencies)[0]].name
                } <br>
                </p>
                <a href="${
                  data.maps.googleMaps
                }" class="btn btn-primary">Located</a>
             </div>
        </div>
  `;
  detailContainer.appendChild(div);
};
