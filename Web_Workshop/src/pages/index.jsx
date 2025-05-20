import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

import { WorkshopIntro } from '../components/WorkshopIntro';
import { Venue } from '../components/Venue';
import { Instructor } from '../components/Instructor';


//získání dat z API (předpokládá se, že běží druhé okno VS s API serverem)
const response = await fetch('http://localhost:4000/api/workshops');
const retData = await response.json();

//pro kontrolu vypíšu do konzole
const indx=0;
const nazevWorkshopu = retData.data[indx].title;
const jmenoInstruktora = retData.data[indx].instructor.name;
const mistoKonani = retData.data[indx].venue.street + ', ' + retData.data[indx].venue.city;
console.info(nazevWorkshopu);
console.info(jmenoInstruktora);
console.info(mistoKonani);


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace Workshop</h1>
    </header>
    <main>
      <WorkshopIntro
        title={retData.data[indx].title}
        description={retData.data[indx].description}
      />

      <Venue
        street={retData.data[indx].venue.street}
        city={retData.data[indx].venue.city}
      />

      <Instructor
        name={retData.data[indx].instructor.name}
        profession={retData.data[indx].instructor.profession}
      />            
    </main>

    <footer>
      <p>Klára Ročková M.B.A, Czechitas / JavaScript 2, domácí úkol 2</p>
    </footer>
  </div>
);
