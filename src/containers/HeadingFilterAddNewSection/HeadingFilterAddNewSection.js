import { Wrapper, Heading1, HeadingDiv, Para, Span } from './HeadingFilterAddNew.css';
import FilterSelect from '../../components/Select/Select';
import AddNew from '../../components/Button/AddNewButton';
const HeadingFilterAddNewSection = ({ invoiceData }) => {
  return (
    <Wrapper>
      <HeadingDiv>
        <Heading1>Invoices</Heading1>
        <Para>
          <Span>{invoiceData.length}</Span>invoices
        </Para>
      </HeadingDiv>

      <FilterSelect />
      <AddNew />
    </Wrapper>
  );
};

export default HeadingFilterAddNewSection;
