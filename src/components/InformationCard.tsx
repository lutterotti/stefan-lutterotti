import './InformationCard.scss';
import IconContainer from './IconContainer';
interface ContainerProps { }

const InformationCard: React.FC<ContainerProps> = () => {

  return (
    <div className="info-card">
      <h6 className="info-card__title">Stefani Lutterotti</h6>
      <h6 className="info-card__sub-title">Front-End Developer</h6>
      <div className="quote-container">
        <p className="info-card__quote">“K-I-S-S, keep it simple stupid. Great advice, hurts my feelings every time.”</p>
        <p className="info-card__quote-author">-Dwight Schrute</p>
      </div>
      <IconContainer></IconContainer>
    </div>
  );
};

export default InformationCard;
