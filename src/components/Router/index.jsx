import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Form from '../Form';
import Layout from '../Layout';
import Header from '../Header';
import CookeryBook from '../CookeryBook';
import Main from '../Main';
import Error from '../Error';
import StoreProvider from '../Store/StoreProvider';

const Router = () => {
  return (
    <BRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <StoreProvider>
              <Main>
                <Form />
              </Main>
            </StoreProvider>
          </Layout>
        </Route>
        <Route exact path="/recipes">
          <Layout>
            <StoreProvider>
              <Header title="results" />
              <Main> 
                <CookeryBook />
              </Main>
            </StoreProvider>
          </Layout>
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </BRouter>
  );
};

export default Router;