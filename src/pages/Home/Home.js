import TopSection from '../../containers/TopSection/TopSection';
import HeadingFilterAddNewSection from '../../containers/HeadingFilterAddNewSection/HeadingFilterAddNewSection';
import InvoiceList from '../../containers/InvoiceList/InvoiceList';
import { Container } from './Home.css';

const Home = ({ toggleTheme, invoiceData, handleClick }) => {
  return (
    <Container>
      <TopSection toggleTheme={toggleTheme} />
      <HeadingFilterAddNewSection invoiceData={invoiceData} />
      <InvoiceList invoiceData={invoiceData} handleClick={handleClick} />
    </Container>
  );
};

export default Home;
