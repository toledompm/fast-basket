import React, {Component} from 'react'
import {connect} from 'react-redux'

class Store extends Component {
    render() {
        return (
            <div></div>
        )
    }
}

const mapStateToProps = (state) => {}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Store)
