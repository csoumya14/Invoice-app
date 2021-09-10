import TopSection from '../../containers/TopSection/TopSection';
import DetailsSection from '../../containers/DetailsInDepth/DetailsInDepth';

import { Container } from './Details.css';

const Details = ({ toggleTheme, chosenInvoice, setChosenInvoice }) => {
  return (
    <Container>
      <TopSection toggleTheme={toggleTheme} />
      <DetailsSection chosenInvoice={chosenInvoice} setChosenInvoice={setChosenInvoice} />
    </Container>
  );
};

export default Details;
