import './PhotoSpotlight.scss';

interface ContainerProps { }

const PhotoSpotlight: React.FC<ContainerProps> = () => {

  return (
    <div className="photo-container">
      <div className="inner-circle"></div>
    </div>
  );
};

export default PhotoSpotlight;