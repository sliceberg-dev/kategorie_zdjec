
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


const poczatkoweDane = [
   {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
];

function App() {

  
  const [zdjecia, setZdjecia] = useState(poczatkoweDane);

  
  const [kategorie, setKategorie] = useState({
    1: true,
    2: true,
    3: true
  });

 
  const widoczneZdjecia = zdjecia.filter(
    (zdjecie) => kategorie[zdjecie.category]
  );

  
  const zmienKategorie = (numer) => {
    setKategorie({
      ...kategorie,
      [numer]: !kategorie[numer]
    });
  };

  
  const pobierzZdjecie = (id) => {
    setZdjecia((poprzednieZdjecia) =>
      poprzednieZdjecia.map((zdjecie) =>
        zdjecie.id === id
          ? {
              ...zdjecie,
              downloads: zdjecie.downloads + 1
            }
          : zdjecie
      )
    );
  };

  return (
    <div className="container-fluid">

      <h1>Kategorie zdjęć</h1>

      {/* PRZEŁĄCZNIKI */}

      <div className="d-flex gap-3">

        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="kwiaty"
            checked={kategorie[1]}
            onChange={() => zmienKategorie(1)}
          />
          <label className="form-check-label" htmlFor="kwiaty">
            Kwiaty
          </label>
        </div>

        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="zwierzeta"
            checked={kategorie[2]}
            onChange={() => zmienKategorie(2)}
          />
          <label className="form-check-label" htmlFor="zwierzeta">
            Zwierzęta
          </label>
        </div>

        <div className="form-check form-switch form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            id="samochody"
            checked={kategorie[3]}
            onChange={() => zmienKategorie(3)}
          />
          <label className="form-check-label" htmlFor="samochody">
            Samochody
          </label>
        </div>

      </div>

      {/* GALERIA ZDJĘĆ */}

      <div className="row">

        {widoczneZdjecia.map((zdjecie) => (

          <div className="col-md-4" key={zdjecie.id}>

            <img
              src={`/assets/${zdjecie.filename}`}
              alt={zdjecie.alt}
              className="zdjecie"
            />

            <h4>
              Pobrań: {zdjecie.downloads}
            </h4>

            <button
              className="btn btn-success"
              onClick={() => pobierzZdjecie(zdjecie.id)}
            >
              Pobierz
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;
