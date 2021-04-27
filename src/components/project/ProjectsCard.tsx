import '../home/InformationCard.scss';
import '../../pages/PersonalProjects.scss';
import { IonSegmentButton, IonLabel, IonSegment } from '@ionic/react';
import builderVideo from '../../assets/demo-videos/AngularBuilder.mp4';
import { projectSelectors, update } from '../../store/stateReducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
interface ContainerProps {}

interface DemoReel {
  title: string;
  text: string;
  href: string;
  video_ref?: string;
}

const demoReel: DemoReel[] = [
  {
    title: `What's This Demo About?`,
    text: 'Parse through angular components, extract the HTML and translate the targeted content using a custom Azure route. It then Inserts the updated translated text back into the components with minimal noise',
    href: 'https://github.com/lutterotti/translate-html-snippets',
    video_ref: builderVideo
  },
  {
    title: null,
    text: `Looks like the video isn't quite ready yet. Don't fret, you can still check out the code!`,
    href: 'https://github.com/lutterotti/translate-html-snippets'
  },
  {
    title: null,
    text: `Looks like the video isn't quite ready yet. Don't fret, you can still check out the code!`,
    href: 'https://github.com/lutterotti/translate-html-snippets'
  }
]

const ProjectCard: React.FC<ContainerProps> = () => {
  const dispatch = useAppDispatch();
  const selected_tab = useAppSelector(projectSelectors.selectedProject);

  function updateCard(selected_segment: string) {
    const segment_number = parseInt(selected_segment, 10);
    dispatch(update(segment_number));
  }

  function displayDemoVideo(demo_reel: DemoReel) {
    if (demo_reel.video_ref) {
      return (<video width="450" controls><source src={demo_reel.video_ref} type="video/mp4" /></video>);
    }
  }

  function selectedProjectDemo(index: number, demo_reel: DemoReel) {
    if (index === selected_tab) {
      return (
        <div className="video-container project--display" key={index}>
          {displayDemoVideo(demo_reel)}
          <p className={ demo_reel.video_ref ? 'video-title' : 'video-title text-center'}>{demo_reel.title}</p>
          <p className={ demo_reel.video_ref ? 'video-text' : 'video-text text-center'}>{demo_reel.text}</p>
          <a className={demo_reel.video_ref ? 'align-self--start' : ''} href={demo_reel.href}><p>Check Out the Code!</p></a>
        </div>
      );
    } else {
      return (
        <div className="video-container project--hide" key={index}>
          {displayDemoVideo(demo_reel)}
          <p className={ demo_reel.video_ref ? 'video-title' : 'video-title text-center'}>{demo_reel.title}</p>
          <p className={ demo_reel.video_ref ? 'video-text' : 'video-text text-center'}>{demo_reel.text}</p>
          <a className={demo_reel.video_ref ? 'align-self--start' : ''} href={demo_reel.href}><p>Check Out the Code!</p></a>
        </div>
      )
    }
  }
  return (
    <div className="info-card--projects">
      <h6 className="info-card__title--projects">Project Demos</h6>
      <div className="flex-row">
        <div className="project-list-container">
          <IonSegment onIonChange={event => updateCard(event.detail.value)} value={selected_tab.toString()}>
            <IonSegmentButton value="0">
              <IonLabel>
                <h2 className="list-title--project">Angular Builder for Translation</h2>
              </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="1">
              <IonLabel>
                <h2 className="list-title--project">Finance Application</h2>
              </IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="2">
              <IonLabel>
                <h2 className="list-title--project">Custom Carousel</h2>
              </IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <div className="project-video-container">
          {demoReel.map((reel: DemoReel, index: number) => selectedProjectDemo(index, reel))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
