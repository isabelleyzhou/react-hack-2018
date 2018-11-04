import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import './Confirmation.css';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


export default class Confirmation extends Component {
    render() {
        return (
            <MuiThemeProvider theme={this.props.theme}>
                <div className="confirm-container">
                    <Card className="feedbackCard">
                        <CardContent>
                            <Typography className='categoryTitle' gutterBottom>
                                Confirmed!
                            </Typography>
                            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                            <Typography className='categorySubtitle' gutterBottom>
                               Get excited. We've sent the invitation to your friends.
                            </Typography>
                            <Button href="/" variant='contained' color='primary' id="signout">Dashboard</Button>
                        </CardContent>
                    </Card>
                </div>
            </MuiThemeProvider>
        )
    }
}