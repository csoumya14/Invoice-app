import { Container, Description, Term } from './TotalCost.css';
import { addZeroesInDecimal } from '../../helpers/priceValueFormat';
const CostDisplay = ({ chosenInvoice }) => {
  return (
    <Container>
      <Term>Grand Total</Term>
      <Description>
        <span>&pound;</span> {addZeroesInDecimal(chosenInvoice.total)}
      </Description>
    </Container>
  );
};

export default CostDisplay;
