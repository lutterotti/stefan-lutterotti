import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import InformationCard from '../components/InformationCard';
import PhotoSpotlight from '../components/PhotoSpotlight';
import Wave from 'react-wavify'
import './Home.scss';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-page">
          <div className="home-content">
            <InformationCard></InformationCard>
            <PhotoSpotlight></PhotoSpotlight>
          </div>
          <div className="wave-content">
          <Wave className="first-wave" fill='#4DD9B9' paused={false} options={{height: 10,amplitude: 30,speed: 0.10,points: 3}}/>
          <Wave className="second-wave" fill='#2F4858' paused={false} options={{height: 10,amplitude: 30,speed: 0.10,points: 3}}/>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
