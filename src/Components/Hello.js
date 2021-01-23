import React from "react";
import "../Css/Hello.css";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import "@fontsource/roboto"
import EmailIcon from '@material-ui/icons/Email';
import pic from '../pic.png'
import Link from "@material-ui/core/Link";
import {Link as ScrollLink} from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css'

const BootstrapButton = withStyles({
    root: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            'Roboto',
            '"Segoe UI"',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#279AF1',
        borderColor: '#279AF1',
        '&:hover': {
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
})(Button);


const Hello = ({matches}) => {

    return (
        <div className="hello" style={{overflow:"hidden"}}>
            <Container maxWidth="md">
                <Grid container direction={matches ? "row-reverse" : "column"} justify="center" alignItems="center">

                    <Grid item xs={12} sm={4}>
                        <div data-aos-delay="50" data-aos="fade-left" style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <img alt={"pic"} src={pic} height={matches ? "450px" : "300px"}/>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={8} data-aos="fade-right">
                        <Typography style={{marginBottom: "2px", color:"#279AF1",textAlign: matches ? "left" : "center"}}
                                    variant={matches ? "h4" : "h5"} component="h2"
                                    gutterBottom>
                            Hello, I'm
                        </Typography>
                        <Typography style={{textAlign: matches ? "left" : "center"}} variant={matches ? "h2" : "h4"}
                                    component="h2" gutterBottom>
                            <span style={{fontWeight:"700"}} className={"hvr-wobble-to-bottom-right"}>Joydeep Singha</span>
                        </Typography>
                        <Typography style={{textAlign: matches ? "left" : "center"}} variant={matches ? "h4" : "h5"}
                                    component="h2" gutterBottom>
                            I build efficient Websites with beautiful interfaces & experiences.
                        </Typography>

                        <div style={{marginTop: "10px", display: "flex", justifyContent: matches ? "start" : "center"}}>
                            <ScrollLink activeClass="active" to="my-contacts" spy={true} smooth={true}
                                        duration={500}>
                                <BootstrapButton endIcon={<EmailIcon/>} variant="contained" color="primary"
                                                 disableRipple>
                                    Let's Talk
                                </BootstrapButton>
                            </ScrollLink>

                        </div>
                        <div style={{marginTop: "10px", display: "flex", justifyContent: matches ? "start" : "center"}}>
                            <ScrollLink activeClass="active" to="my-projects" spy={true} smooth={true} offset={-100}
                                        duration={500}>
                                <Link href="#">
                                    {'See My Work'}
                                </Link>
                            </ScrollLink>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default Hello;


AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});