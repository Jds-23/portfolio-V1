import React from "react";
import "../Css/About.css"
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ReactImage from "../SkillsLogo/react.png";
import FirebaseImage from "../SkillsLogo/Firebase.png";
import MaterialImage from "../SkillsLogo/MaterialImage.png";
import NodeImage from "../SkillsLogo/Node.png";
import JavascriptImage from "../SkillsLogo/JavaScript.png";
import CssImage from "../SkillsLogo/cssImage.png";
import GitImage from "../SkillsLogo/Git.png";
import GitHubImage from "../SkillsLogo/GitHub.png";
import MongodbImage from "../SkillsLogo/mongodb.png";

const About = ({matches}) => {
    return (
        <div className="about" style={{overflow: "hidden"}}>
            <Container maxWidth="md">
                <div data-aos="fade-up" className={"about-header"}>
                    <Typography style={{textAlign: "center", color: "#279AF1"}} variant={matches ? "h4" : "h5"}
                                component="h3" gutterBottom>
                        About Me
                    </Typography>
                    <Typography style={{color: "#60656f", textAlign: "center"}}
                                variant="subtitle1" component="h5" gutterBottom>
                        I am a Frontend Web Developer from Kolkata, India. Currently I am college student, pursuing
                        Bachelor In Computer Application.
                    </Typography>
                    <Typography style={{color: "#60656f", textAlign: "center"}}
                                variant="subtitle1" component="h5" gutterBottom>
                        I enjoy building Web apps with great UI/UX. My Goal is to always build applications that
                        are scalable and efficient under the hood while providing engaging user
                        experiences.
                    </Typography>
                </div>

                <Grid container spacing={3} direction={matches ? "row-reverse" : "column"} justify="center"
                      alignItems="center">
                    <Grid data-aos="fade-left" item sm={4}>
                        <Typography data-aos="fade-left" style={{textAlign: matches ? "left" : "center"}}
                                    variant={matches ? "h3" : "h4"}
                                    component="h2" gutterBottom>
                            My Skills
                        </Typography>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            The main area of my expertise is building Web Apps.
                            Frontend with <strong
                            style={{backgroundColor: "#79dcee", padding: "1px"}}>React</strong> and
                            Backend using <strong style={{backgroundColor: "#ffcc30", padding: "1px"}}>Firebase</strong>.
                        </Typography>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            I also have full-stack experience with MERN(MongoDB, Express, Reactjs, NodeJs) stack.
                        </Typography>


                    </Grid>
                    <Grid data-aos="fade-right" item sm={8} style={{
                        display: 'flex',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }}>
                        <Chip
                            avatar={<Avatar alt="React.js" src={ReactImage}/>}
                            label="React.js"
                            style={{margin: "5px"}}
                        />
                        <Chip
                            avatar={<Avatar alt="Firebase" src={FirebaseImage}/>}
                            label="Firebase"
                            style={{margin: "5px"}}
                        />
                        <Chip
                            avatar={<Avatar alt="Node.js" src={NodeImage}/>}
                            label="Node.js"
                            style={{margin: "5px"}}
                        />
                        <Chip
                            avatar={<Avatar alt="Material" src={MaterialImage}/>}
                            label="Material UI"
                            style={{margin: "5px"}}
                        /><Chip
                        avatar={<Avatar alt="JavaScript" src={JavascriptImage}/>}
                        label="JavaScript"
                        style={{margin: "5px"}}
                    />
                        <Chip
                            avatar={<Avatar alt="Css" src={CssImage}/>}
                            label="Css"
                            style={{margin: "5px"}}
                        />
                        <Chip
                            avatar={<Avatar alt="Git" src={GitImage}/>}
                            label="Git"
                            style={{margin: "5px"}}
                        />
                        <Chip
                            avatar={<Avatar alt="GitHub" src={GitHubImage}/>}
                            label="GitHub"
                            style={{margin: "5px"}}
                        />
                        <Chip
                            avatar={<Avatar alt="MongoDb" src={MongodbImage}/>}
                            label="MongoDb"
                            style={{margin: "5px"}}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
export default About;