import './InformationQuote.scss';

export interface Quote {
  text?: string;
  author?: string;
}

const InformationQuote: React.FC<Quote> = (props: Quote) => {
  const { text, author } = props;
  return (
    <div className="quote-container">
      <p className="info-card__quote">{text}</p>
      <p className="info-card__quote-author">-{author}</p>
    </div>
  );
};

export default InformationQuote;