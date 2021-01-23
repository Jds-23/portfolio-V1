import React from "react";
import "../Css/MyProjects.css";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import instaCloneImage from "../WorkImage/smartmockups_instagram.png";
import chatImage from "../WorkImage/chat.png";
import amazonCloneImage from "../WorkImage/amazon.png";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import ReactImage from "../SkillsLogo/react.png";
import FirebaseImage from "../SkillsLogo/Firebase.png";
import NodeImage from "../SkillsLogo/Node.png";
import MaterialImage from "../SkillsLogo/MaterialImage.png";
import GitHubIcon from '@material-ui/icons/GitHub';
import LaunchIcon from '@material-ui/icons/Launch';
import Link from "@material-ui/core/Link";

const MyProjects = ({matches}) => {
    return (
        <div className="my-projects" style={{overflow: "hidden"}}>
            <Container maxWidth="md">
                <div className="work-header">
                    <Typography style={{textAlign: "center", color: "#279AF1"}} variant={matches ? "h4" : "h5"}
                                component="h3" gutterBottom>
                        My Projects
                    </Typography>
                </div>

                <Grid container spacing={3} direction={matches ? "row-reverse" : "column"} justify="center"
                      alignItems="center">
                    <Grid data-aos="fade-left" item sm={6}>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <img className="shadow" alt={"pic"} src={instaCloneImage} width={"100%"}/>
                        </div>
                    </Grid>
                    <Grid data-aos="fade-right" item sm={6}>
                        <Typography style={{textAlign: matches ? "left" : "center"}} variant={matches ? "h4" : "h5"}
                                    component="h2" gutterBottom>
                            Social Media(Instagram Clone)
                        </Typography>
                        <div style={{display: "flex", justifyContent: matches ? "start" : "center"}}>
                            <Link href="https://github.com/Jds-23/instagram-clone-by-jds" target="_blank"
                                  color="inherit">
                                <GitHubIcon/>
                            </Link>
                            <Link href="https://instagram-by-jds.web.app/" target="_blank" color="inherit">
                                <LaunchIcon/>
                            </Link>
                        </div>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            Technology Used
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
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
                            />
                        </div>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            Features
                            <ul style={{textAlign: "left"}}>
                                <li>User Authentication</li>
                                <li>Upload Post with Captions</li>
                                <li>Like on Posts of Other Users</li>
                                <li>Comment on Posts of Other Users</li>
                                <li>Responsive</li>
                            </ul>
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container spacing={3} direction={matches ? "row" : "column"} justify="center"
                      alignItems="center">
                    <Grid item sm={6} data-aos="fade-right">
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <img className="shadow" alt={"pic"} src={chatImage} width={"100%"}/>
                        </div>
                    </Grid>
                    <Grid item sm={6} data-aos="fade-left">
                        <Typography style={{textAlign: matches ? "left" : "center"}} variant={matches ? "h4" : "h5"}
                                    component="h2" gutterBottom>
                            RealTime Chat App
                        </Typography>
                        <div style={{display: "flex", justifyContent: matches ? "start" : "center"}}>
                            <Link href="https://github.com/Jds-23/chat-app" target="_blank" color="inherit">
                                <GitHubIcon/>
                            </Link>
                            <Link href="https://jds-chat.web.app/" target="_blank" color="inherit">
                                <LaunchIcon/>
                            </Link>
                        </div>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            Technology Used
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
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
                            />
                        </div>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            Features
                            <ul style={{textAlign: "left"}}>
                                <li>User Authentication</li>
                                <li>RealTime Chat</li>
                                <li>Create Multiple Group</li>
                                <li>Responsive</li>
                            </ul>
                        </Typography>
                    </Grid>

                </Grid>
                <Grid container spacing={3} direction={matches ? "row-reverse" : "column"} justify="center"
                      alignItems="center">
                    <Grid data-aos="fade-left" item sm={6}>
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <img className="shadow" alt={"pic"} src={amazonCloneImage} width={"100%"}/>
                        </div>
                    </Grid>
                    <Grid data-aos="fade-right" item sm={6}>
                        <Typography style={{textAlign: matches ? "left" : "center"}} variant={matches ? "h4" : "h5"}
                                    component="h2" gutterBottom>
                            E-commerce(Amazon Clone)
                        </Typography>
                        <div style={{display: "flex", justifyContent: matches ? "start" : "center"}}>
                            <Link href="https://github.com/Jds-23/amazon-clone" target="_blank" color="inherit">
                                <GitHubIcon/>
                            </Link>
                            <Link href="https://by-jds.web.app/" target="_blank" color="inherit">
                                <LaunchIcon/>
                            </Link>
                        </div>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            Technology Used
                        </Typography>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'start',
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
                            />
                        </div>
                        <Typography style={{color: "#60656f", textAlign: matches ? "left" : "center"}}
                                    variant="subtitle1" component="h2" gutterBottom>
                            Features
                            <ul style={{textAlign: "left"}}>
                                <li>User Authentication</li>
                                <li>Add to Cart</li>
                                <li>Order History</li>
                                <li>Responsive</li>
                            </ul>
                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}
export default MyProjects;