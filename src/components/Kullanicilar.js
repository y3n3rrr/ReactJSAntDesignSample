import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUsers} from '../actions'

class Kullanicilar extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        debugger
        this.props.getUsers()
    }
    renderItems = () => {
        var outputs = [];
        if(this.props.users.length > 0){
            outputs = this.props.users[0].map((val, i) => {
                return (
                    <p>
            <strong>Kullanici Adi</strong>:{val.kullaniciadi}<br />
            <strong>Gorevi</strong>:{val.gorevi}<br />
                    </p>
                )
            })
        }
        

        return outputs;
    }
    render() {
        return (
            <div>
                kullanicilar sayfasi..
                {this.renderItems()}   
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { users } = state
    return {
        users,
        yener:[12,3,4,324,32,432]
    }
}
export default connect(mapStateToProps, {getUsers})(Kullanicilar)
