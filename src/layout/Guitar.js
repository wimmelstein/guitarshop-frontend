import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
    card: {
        margin: 16,

        // Use flex layout with column direction for components in the card
        // (CardContent and CardActions)
        display: "flex",
        flexDirection: "column",
        alignItems: 'stretch',
    
        // Justify the content so that CardContent will always be at the top of the card,
        // and CardActions will be at the bottom
        justifyContent: "space-between",
        height: '100%'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        display: 'flex',
        flexDirection: 'column',
    }, media: {
        height: '50%'
    },
});

const classes = useStyles;

class Guitar extends Component {

    render() {

        const {brand, model} = this.props.guitar;
        return (

            <Card className={classes.card}>

                <CardContent>
                    <Typography className={classes.title} color="secondary">
                        {brand}
                    </Typography>

                    <Typography variant="h5" component="h2">
                        {model}
                    </Typography>

                    </CardContent>

                    <CardActions style={{display: 'flex',
                                        justifyContent: 'space-between'}}>
                        <TextField
                            label="Aantal"
                            className={classes.textField}
                            margin="normal"
                            helperText=" "
                        />
                        <Button variant="outlined" style={{
                            backgroundColor: '#ddd',
                            color: '#000'
                        }}>+</Button>
                    </CardActions>
            </Card>
        )
    }
}

Guitar.propTypes = {
    guitar: PropTypes.object.isRequired
}

export default Guitar;