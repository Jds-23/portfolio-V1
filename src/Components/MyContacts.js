import React, {useState} from "react";
import "../Css/MyContact.css"
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import EmailIcon from "@material-ui/icons/Email";
import emailJs from "emailjs-com";
import Typography from "@material-ui/core/Typography";


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
        width:"100%",
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

const margin={marginTop:"10px"}

const MyContacts=({matches})=>{

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");
    const [loading,setLoading]=useState(false);

    const sendEmail=(e)=>{
        e.preventDefault();
        setLoading(true);
        const templateParams={
            name,email,message
        }
        emailJs.send('service_gpuaqpk', 'template_hei8awm', templateParams,'user_mEY1ED5D1aIF7JoNLeUBl')
            .then(function(response) {
                alert('SUCCESS!');
                setLoading(false);
                setEmail("");setMessage("");setName("");
            }, function(error) {
                alert('FAILED...');
                setLoading(false);
            });
    }
    return(
        <div className="my-contacts" style={{overflow:"hidden"}}>
            <Container data-aos="fade-up" maxWidth={"sm"}>
                <div className="work-header">
                    <Typography style={{textAlign: "center", color: "#279AF1"}} variant={matches ? "h3" : "h4"}
                                component="h3" gutterBottom>
                        Contact Me
                    </Typography>
                </div>
                <form onSubmit={sendEmail}>
                    <TextField
                        label="Name"
                        name="name"
                        variant="outlined"
                        fullWidth
                        style={margin}
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        name="email"
                        variant="outlined"
                        fullWidth
                        style={margin}
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <TextField
                        label="Text"
                        name="message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={7}
                        value={message}
                        onChange={(e)=>setMessage(e.target.value)}
                        style={margin}
                    />
                    <BootstrapButton
                        style={margin}
                        type="submit"
                        endIcon={<EmailIcon/>}
                        variant="contained"
                        color="primary"
                        disabled={loading}
                    >Send</BootstrapButton>
                </form>
            </Container>
        </div>
    )
}

export default MyContacts;