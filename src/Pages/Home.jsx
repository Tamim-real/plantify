import React, { useEffect, useState } from 'react';
import PlantSlider from './PlantSlider';
import LogInRegForm from './LoginForm';
import Cards from '../Components/Cards';
import Tips from '../Components/Tips';
import GreenExperts from '../Components/GreenExperts';
import Plants from './Plants';
import MyProfile from './MyProfile';



const Home = () => {

    const [plants, setPlants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/plantsApi.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  

  if (loading) return <p>Loading...</p>;
    return (
        <div>
            <PlantSlider />
            <section>
                <h1 className='text-4xl font-black text-center my-3'>Indoor Plants</h1>
                <div className='max-w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-3 space-y-3'>
                    {
                        plants.map(plant => <Cards plants={plant}></Cards>)
                    }
                </div>
            </section>
            <div>
                <Tips />
            </div>
            <section>
                <GreenExperts></GreenExperts>
            </section>
            
           
        </div>
    );
};

export default Home;