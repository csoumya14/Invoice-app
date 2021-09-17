import TopSection from '../../containers/TopSection/TopSection';
import HeadingFilterAddNewSection from '../../containers/HeadingFilterAddNewSection/HeadingFilterAddNewSection';
import InvoiceList from '../../containers/InvoiceList/InvoiceList';
import NoInvoices from '../../containers/DetailsIfNoInvoice/DetailsIfNoInvoice';
import { Container } from './Home.css';

const Home = ({ toggleTheme, invoiceData, handleClick }) => {
  return (
    <Container>
      <TopSection toggleTheme={toggleTheme} />
      <HeadingFilterAddNewSection invoiceData={invoiceData} />
      {invoiceData.length > 0 ? (
        <InvoiceList invoiceData={invoiceData} handleClick={handleClick} />
      ) : (
        <NoInvoices />
      )}
    </Container>
  );
};

export default Home;
