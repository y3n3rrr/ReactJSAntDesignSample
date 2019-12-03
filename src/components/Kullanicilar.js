import React, { Component } from 'react'
import {connect} from 'react-redux'
import { getUsers } from '../actions'
import {GetResources} from '../helpers/hooksHelper'
import { Spin } from 'antd'

class Kullanicilar extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.props.getUsers()
    }
    
    render() {
        return (
            <div>
                Kullanıcılar Sayfası..
                <RenderJSX endpoint = {'posts'} />   
            </div>
        )
    }
}

export const RenderJSX = ({endpoint}) =>
{
    debugger
    const items = GetResources(endpoint)
    if(items.length == 0)
    {
        return (
            <div>
                <Spin />
                Yukleniyor.. 
            </div>
        )
    }
    return (
        <div>
            {items.map((val, i) => {
                if(val.kullaniciadi){
                    return (
                    <p key={val.id}>
                        <strong>{val.kullaniciadi}</strong> 
                        <br />
                        { val.gorevi }
                    </p>)
                }
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    const {users} = state;
    return { users }
}
export default connect(mapStateToProps, {getUsers})(Kullanicilar)

