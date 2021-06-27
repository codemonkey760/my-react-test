const {Switch, Route} = require('react-router-dom')

const {Header} = require('../Header')
const {Footer} = require('../Footer')
const {Card} = require('../Card')
const {Home} = require('../../Pages/Home')
const {About} = require('../../Pages/About')
const {LogIn} = require('../../Pages/LogIn')

export const App = () => {
    return (
        <>
            <Header/>
            <Card>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/login" component={LogIn}/>
                </Switch>
            </Card>
            <Footer/>
        </>
    )
}
