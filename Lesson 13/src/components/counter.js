import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './counter.css'

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div className="jumbotron">
            <h1 >{counter}</h1>
            <button onClick={dec} className="btn btn-primary">--</button>
            <button onClick={inc} className="btn btn-primary">++</button>
            <button onClick={rnd} className="btn btn-primary">random++</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        counter: state
    }
}

export default connect(mapStateToProps, actions)(Counter);