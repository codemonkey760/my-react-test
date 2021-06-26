import { StyledFooter, Disclaimer } from './styles'

const disclaimer = `
By using this website you agree to the terms of use which include the acknowledgement 
that continued use has been linked by the FDA to what is commonly known as 
"Uncontrollable Bowel Syndrome". By continuing to use this website you agree not to hold 
the publishing parties responsible for soiled items including but not limited to furniture, 
garments, pets and loved ones. Please browse responsibly.
`

const Footer = () => {
    return (
        <StyledFooter>
            <h3>My Footer</h3>
            <Disclaimer>{disclaimer}</Disclaimer>
        </StyledFooter>
    )
}

export {Footer}