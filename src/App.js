import { Route,Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AllQuotes from "./Pages/AllQuotes";
import DetailQuotes from "./Pages/DetailQuotes";
import NewQuotes from "./Pages/NewQuotes";
import Layout from "./components/layout/Layout";
import NotfoundPage from "./Pages/NotfoundPage";




function App() {
  return (
    <div>
      <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>  <AllQuotes/>
        

        </Route>
        <Route path='/quotes/:quoteId'> <DetailQuotes/>

        </Route>
       <Route  path='/new-quotes'>  <NewQuotes/>

       </Route>
      <Route path='*'>

        <NotfoundPage/>
      </Route>

      </Switch>
      </Layout>

    </div>
  );
}

export default App;
