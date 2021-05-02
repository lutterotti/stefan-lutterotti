import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, useIonViewWillEnter } from '@ionic/react';
import InformationCard from '../components/home/InformationCard';
import PhotoSpotlight from '../components/home/PhotoSpotlight';
import Wave from 'react-wavify'
import { useHistory } from 'react-router-dom';
import './Home.scss';
import { useCallback } from 'react';

const Home: React.FC = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/projects'), []);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-page">
          <div className="home-content">
            <InformationCard></InformationCard>
            <PhotoSpotlight></PhotoSpotlight>
            <div className="navigate-text--home" onClick={handleOnClick}><p>Projects</p></div>
          </div>
          <p className="footer-text">Made in ReactJS | Hosted on AWS</p>
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
