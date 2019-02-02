import React from 'react'
import Button from "@material-ui/core/Button/Button";

export default (props) => (
    <div style={{display:"flex", marginTop: "40vh",flexDirection:"column", alignItems: "center", justifyContent: "center"}}>
        <div> Log in please </div>
        <Button onClick={props.auth}>Click here to log in </Button>
    </div>
)
