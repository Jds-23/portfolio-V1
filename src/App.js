import React from "react";
import './App.css';
import Hello from "./Components/Hello";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MyProjects from "./Components/MyProjects";
import About from "./Components/About";
import MyContacts from "./Components/MyContacts";
import MyFooter from "./Components/MyFooter";
import Header from "./Components/Header";
import { Element, Link as ScrollLink} from 'react-scroll';
import Fab from '@material-ui/core/Fab';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import withStyles from "@material-ui/core/styles/withStyles";


function App() {
    const matches = useMediaQuery('(min-width:600px)');

    const NewFab = withStyles((theme) => ({
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },backgroundColor: '#279AF1',
            borderColor: '#279AF1',
            position:"fixed",
            bottom:matches?"50px":"25px",
            right:matches?"50px":"25px",
            zIndex:"100"
        }
    }))(Fab);


    return (
        <div className="App" >
            <Header matches={matches}/>
            <Element name="top" className="element">
                <Hello matches={matches}/>
            </Element>
            <Element name="about" className="element">
                <About matches={matches}/>
            </Element>
            <Element name="my-projects" className="element">
                <MyProjects matches={matches}/>
            </Element>
            <Element name="my-contacts" className="element">
                <MyContacts matches={matches}/>
            </Element>
            <MyFooter matches={matches}/>

            <ScrollLink activeClass="active" to="top" spy={true} smooth={true} duration={500} >
                <NewFab color="primary" aria-label="add">
                    <ArrowUpwardIcon/>
                </NewFab>
            </ScrollLink>

        </div>
    );
}

export default App;
