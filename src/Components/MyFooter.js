import React from "react";
import "../Css/MyFooter.css";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

const margin={margin:"2px"}

const MyFooter = ({matches}) => {
    return (
        <div className="my-footer">
                <div>
                    <Link style={margin} href="">
                        {'GitHub'}
                    </Link>
                    <Link style={margin} href="">
                        {'LinkedIn'}
                    </Link>
                    <Link style={margin} href="">
                        {'Twitter'}
                    </Link>
                    <Link style={margin} href="">
                        {'Instagram'}
                    </Link>
                </div>
                <Typography style={{textAlign:"center",color: "#279AF1",fontSize:matches ?'18px':'14px'}}
                            variant={matches ? "h5" : "h6"} component="h5"
                            gutterBottom>
                    Website Designed & Built by Joydeep Singha
                </Typography>
        </div>
    )
}

export default MyFooter;