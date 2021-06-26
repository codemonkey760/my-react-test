const {Link} = require('react-router-dom')
const {StyledHeader, NavList} = require('./styles')

const Header = () => {
    return (
        <StyledHeader>
            <h1>My Header</h1>
            <p>Example React site</p>
            <NavList>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/login">Log In</Link></li>
            </NavList>
        </StyledHeader>
    )
}

export {Header}