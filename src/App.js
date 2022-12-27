import { Fragment } from 'react';
import Header from './components/Layout/Header';
import History from './components/History/History';
import Payload from './components/Payload/Payload';
import { useLocation } from 'react-router-dom';
function App() {

const location = useLocation();


const queryParams = new URLSearchParams(location.search);

const isHistory = queryParams.get('tab') === 'History';
const isPayload = queryParams.get('tab') === 'Payload';

  return (
    <Fragment>
      <Header/>
      <main>
       {isHistory && <History/>}
       {isPayload && <Payload/>}
      </main>
    </Fragment>
  );
}

export default App;
