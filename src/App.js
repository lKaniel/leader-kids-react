import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import MainPhone from "./pages/Main/MainPhone";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import {useEffect, useState} from "react";

function debounce(fn, ms) {
    let timer
    return _ => {
        clearTimeout(timer)
        timer = setTimeout(_ => {
            timer = null
            fn.apply(this, arguments)
        }, ms)
    };
}


function App() {

    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth
    })
    useEffect(() => {
        let isMounted = true
        const debouncedHandleResize = debounce(function handleResize() {
            if (isMounted) {
                setDimensions({
                    height: window.innerHeight,
                    width: window.innerWidth
                })
            }
        }, 20)

        window.addEventListener('resize', debouncedHandleResize)
        return () => {
            isMounted = false
        }
    })

    return (
        <Router>
            <Layout>
                <Header/>
                <Switch>
                    <Route path="/">
                        <MainPhone/>
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
