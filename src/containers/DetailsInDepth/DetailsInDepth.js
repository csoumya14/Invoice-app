import { Wrapper, DummyUl, Menu, Dummyl } from './DetailsInDepth.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import arrowLeft from '../../assets/icon-arrow-left.svg';
import GoBack from '../../components/Button/GoBackButton';
import StatusInfo from '../../components/StatusInfo/StatusInfo';
import MainDetails from '../../components/MainDetails/MainDetails';
import EditDeletePaidButtons from '../../components/EditDeletePaidButtons/EditDeletePaidButtons';
import EditForm from '../EditForm/EditForm';

//import StatusInfo from '../../components/StatusInfo/StatusInfo';
const DetailsSection = ({ chosenInvoice, setChosenInvoice }) => {
  const history = useHistory();
  const [viewEditForm, setViewEditForm] = useState(false);

  const handleClick = () => {
    setViewEditForm(!viewEditForm);
  };
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
      <EditDeletePaidButtons handleClick={handleClick} />
      <EditForm
        chosenInvoice={chosenInvoice}
        viewEditForm={viewEditForm}
        handleClick={handleClick}
      />
    </Wrapper>
  );
};

export default DetailsSection;
