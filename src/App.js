import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import MainPhone from "./pages/Main/MainPhone";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import CalendarPage from "./pages/Main/CalendarPage";

function App() {
    return (
        <Router>
            <Layout>
                <Header/>
                <Switch>
                    <Route path="/calendar">
                        <CalendarPage/>
                    </Route>
                    <Route path="/">
                        <MainPhone/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
