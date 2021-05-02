import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import './HomePageNavigation.scss';
interface ContainerProps {}

export interface Quote {
  text?: string;
  author?: string;
}

const HomePageNavigation: React.FC<ContainerProps> = () => {
  return (
    <div className="navigation-container">
      <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
        <IonSegmentButton value="home">
          <IonLabel>Home</IonLabel>
        </IonSegmentButton>
        <IonSegmentButton value="projects">
          <IonLabel>Projects</IonLabel>
        </IonSegmentButton>
      </IonSegment>
    </div>
  );
};

export default HomePageNavigation;