import './InformationCard.scss';
import IconContainer from './IconContainer';
import InformationQuote, { Quote } from './InformationQuote';
import { useEffect, useState } from 'react';
interface ContainerProps { }

const InformationCard: React.FC<ContainerProps> = () => {
  const [current_index, updateIndex] = useState(0);
  const quotes: Quote[] = [
    { text: `K-I-S-S, keep it simple stupid. Great advice, hurts my feelings every time.`, author: `Dwight Schrute` },
    { text: `An office is a place where dreams come true.`, author: `Michael Scott` },
    { text: `Whenever I'm about to do something, I think, 'Would an idiot do that?' and if they would, I do not do that thing.`, author: `Dwight Schrute` },
    { text: `Why waste time say lot word when few word do trick?`, author: `Kevin Malone` },
    { text: `You guys I'm like really smart now. You don't even know. You could ask me, Kelly what's the biggest company in the world? And I'd be like, 'blah blah blah, blah blah blah blah blah blah.' Giving you the exact right answer.`, author: `Kelly Kapoor` },
    { text: `ACTUALLY`, author: `Oscar Martinez` },
    { text: 'I am Beyonce always.', author: `Michael Scott` },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      let updated_index = current_index < quotes.length - 1 ? current_index + 1 : 0;
      updateIndex(updated_index);
    }, 6500)

    return () => {
      clearInterval(interval);
    }
  }, [current_index]);

  function displayCurrentQuote(index: number, quote: Quote) {
    if (index === current_index) {
      return (<div className={'quote--display'} key={index}><InformationQuote text={quote.text} author={quote.author} key={index}></InformationQuote></div>);
    } else {
      return (<div className={'quote--hide'} key={index}><InformationQuote text={quote.text} author={quote.author} key={index}></InformationQuote></div>);
    }
  }

  return (
    <div className="info-card">
      <h6 className="info-card__title">Stefan Lutterotti</h6>
      <h6 className="info-card__sub-title">Front-End Developer</h6>
      <div className="info-card__quote-container">{quotes.map((quote: Quote, index: number) => displayCurrentQuote(index, quote))}</div>
      <IconContainer></IconContainer>
    </div>
  );
};

export default InformationCard;
