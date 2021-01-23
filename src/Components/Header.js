import React from "react";
import "../Css/Header.css"
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import {Link as ScrollLink} from 'react-scroll';


const navItem={textAlign: "center", fontSize: '18px',marginLeft:"7px"};
const Header = ({matches}) => {
    return (
        <div className="header">
            <Container maxWidth="md"
                style={{display:"flex",justifyContent:"space-between"}}>
                <Typography style={{textAlign: "center", fontSize: '18px'}}
                            variant={"h5"} component="h5"
                            gutterBottom>
                    JD
                </Typography>
                <div style={{display:"flex",alignItems:"center"}}>
                    <ScrollLink activeClass="active" to="about" spy={true} smooth={true} duration={500} >
                        <Typography style={navItem}
                                    variant={"h5"} component="h5"
                                    gutterBottom>
                            About Me
                        </Typography>
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="my-projects" spy={true} smooth={true} offset={-50} duration={500} >
                        <Typography style={navItem}
                                    variant={"h5"} component="h5"
                                    gutterBottom>
                            My Project
                        </Typography>
                    </ScrollLink>
                    <ScrollLink activeClass="active" to="my-contacts" spy={true} smooth={true} duration={500} >
                        <Typography style={navItem}
                                    variant={"h5"} component="h5"
                                    gutterBottom>
                            Contact Me
                        </Typography>
                    </ScrollLink>
                </div>
            </Container>

        </div>
    )
}

export default Header;