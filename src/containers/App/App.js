import axios from 'axios';
import { useState, useEffect } from 'react';
import Card  from '../../components/Card/Card';

const App = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/hotels').then(hotelsList => {
      setHotels(hotelsList.data);
      console.log(hotelsList.data);
    }).catch(err => {
      console.error(err);
    })
  }, []);

  return (
    <main>
      <div className='container'>
        <div className='row'>
          {
            hotels.map(hotel => (
              <Card {...hotel} key={hotel.id}/>
            ))
          }
        </div>
      </div>    
    </main>
   
  );
}

export default App;
