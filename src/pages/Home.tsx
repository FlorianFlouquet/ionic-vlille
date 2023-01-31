import { IonContent, IonPage, } from '@ionic/react';
import './Home.css';
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from "react-leaflet" ;
import { useLayoutEffect, useState } from 'react';

const Home: React.FC = () => {

  const [renderMap, setRenderMap] = useState(false);


  useLayoutEffect(() => {
    setTimeout(() => setRenderMap(true), 1000);
  }, [])

  return (
    <IonPage>
      <IonContent fullscreen>
        {renderMap && 
          <MapContainer style={{width: "100%", height: "100%"}} center={[50.62972, 3.133873]} zoom={12}>
            <TileLayer 
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
          </MapContainer> 
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
