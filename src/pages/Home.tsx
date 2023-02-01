import { IonContent, IonPage, } from '@ionic/react';
import './Home.css';
import 'leaflet/dist/leaflet.css'
import * as L from "leaflet"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet" ;
import { useEffect, useLayoutEffect, useState } from 'react';
import { service } from '../services/Service';
import { DataModel } from '../components/DataModel';

const Home: React.FC = () => {

  const [renderMap, setRenderMap] = useState(false);
  const [data, setData] = useState<DataModel[]>();

  const iconLoaded = L.icon({iconUrl: "/assets/images/marker-icon-2x.png", iconSize: new L.Point(20, 35)})

  useEffect(() => {
    service.findAllMarkers().then((res) => setData(res.data.records))
  })

  useLayoutEffect(() => {
    setTimeout(() => setRenderMap(true), 1000);
  }, [])

  return (
    <IonPage>
      <IonContent fullscreen>
        {renderMap && 
          <MapContainer style={{width: "100%", height: "100%"}} center={[50.62972, 3.133873]} zoom={14}>
            <TileLayer 
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
            />
            {data && data.map((marker) => (
              <Marker 
                position={[marker.fields.geo[0], marker.fields.geo[1]]} 
                icon={iconLoaded}>
                <Popup>
                  <span><b>Adresse:</b> {marker.fields.libelle} {marker.fields.nom}</span><br/>
                  <span><b>Nombre de vélos dispos:</b> {marker.fields.nbvelosdispo} </span><br/>
                  <span><b>Nombre de places restantes:</b> {marker.fields.nbplacesdispo}</span>
                </Popup>
              </Marker>
            ) )}
          </MapContainer> 
        }
      </IonContent>
    </IonPage>
  );
};

export default Home;
