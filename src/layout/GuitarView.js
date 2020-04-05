import React, { Component } from 'react';
import Guitar from './Guitar';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';


class GuitarsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            guitars: []
        }
    }


    componentDidMount() {
        fetch('http://localhost:8080/api/guitars')
            .then((result) => {
                return result.json();
            }).then((jsonResult) => {
                this.setState({ guitars: jsonResult })
            }).catch(err => {
                this.setState({ guitars: [{id:0, brand: "Error", model:  "No results found"}]})
            })
    }

    render() {
        return (
            <div>
                <Grid container spacing={24} alignItems={'center'}>
                    {this.state.guitars.map((guitar) => (
                        <Grid item xs={12} sm={6} lg={4} xl={12}>
                            <Guitar key={guitar.id} guitar={guitar} />
                        </Grid>

                    ))}
                </Grid>
            </div>
        )
    }
}

GuitarsView.propTypes = {
    guitars: PropTypes.array.isRequired,
};

export default GuitarsView;
