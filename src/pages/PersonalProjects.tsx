import { IonContent, IonLabel, IonPage, IonSegment, IonSegmentButton } from '@ionic/react';
import Wave from 'react-wavify';
import '../pages/Home.scss';
import ProjectCard from '../components/project/ProjectsCard';
import { useHistory } from 'react-router-dom';
import { useCallback } from 'react';
interface ContainerProps {}

export interface Quote {
  text?: string;
  author?: string;
}

const PersonalProjects: React.FC<ContainerProps> = () => {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/home'), [history]);
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="home-page">
          <div className="home-content">
            <ProjectCard></ProjectCard>
            <div className="navigate-text--project" onClick={handleOnClick}><p>Home</p></div>
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

export default PersonalProjects;