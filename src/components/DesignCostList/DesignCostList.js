import { Wrapper, ListContainer, Description, Term, Span } from './DesignCostList.css';
import { addZeroesInDecimal } from '../../helpers/priceValueFormat';

const DesignCost = ({ chosenInvoice }) => {
  return (
    <Wrapper>
      {chosenInvoice.items.map(value => (
        <ListContainer key={value.name}>
          <Term>
            {value.name}
            <br></br>
            <Span>
              {value.quantity}x<span>&pound;</span>
              {addZeroesInDecimal(value.price)}
            </Span>
          </Term>
          <Description>
            <span>&pound;</span> {addZeroesInDecimal(value.total)}
          </Description>
        </ListContainer>
      ))}
    </Wrapper>
  );
};

export default DesignCost;
