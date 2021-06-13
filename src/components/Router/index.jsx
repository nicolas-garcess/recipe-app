import { BrowserRouter as BRouter, Route, Switch } from 'react-router-dom';
import Form from '../Form';
import Layout from '../Layout';
import Header from '../Header';
import CookeryBook from '../CookeryBook';
import Main from '../Main';
// import Error from '../Error404';

const Router = () => {
  return (
    <BRouter>
      <Switch>
        <Route exact path="/">
          <Layout>
            <Main>
              <Form />
            </Main>
          </Layout>
        </Route>
        <Route exact path="/recipes">
          <Layout>
            <Header title="Results" />
            <Main> 
              <CookeryBook />
            </Main>
          </Layout>
        </Route>
        <Route path="*">
          {/* <Error /> */}
        </Route>
      </Switch>
    </BRouter>
  );
};

export default Router;