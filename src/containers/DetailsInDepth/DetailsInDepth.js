import { Wrapper } from './DetailsInDepth.css';
//import { StatusDiv, DotDiv, StatusP } from '../InvoiceList/InvoiceList.css';
import { useHistory } from 'react-router-dom';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import GoBack from '../../components/Button/GoBackButton';
import StatusInfo from '../../components/StatusInfo/StatusInfo';
import MainDetails from '../../components/MainDetails/MainDetails';
import EditDeletePaidButtons from '../../components/EditDeletePaidButtons/EditDeletePaidButtons';

//import StatusInfo from '../../components/StatusInfo/StatusInfo';
const DetailsSection = ({ chosenInvoice, setChosenInvoice }) => {
  const history = useHistory();
  return (
    <Wrapper>
      <GoBack
        onClick={() => {
          history.push('/');
          setChosenInvoice('');
        }}
      >
        <img type="image" tabIndex="0" src={arrowLeft} alt="arrow-left" />
        Go back
      </GoBack>
      <StatusInfo chosenInvoice={chosenInvoice} />
      <MainDetails chosenInvoice={chosenInvoice} />
      <EditDeletePaidButtons />
    </Wrapper>
  );
};

export default DetailsSection;
