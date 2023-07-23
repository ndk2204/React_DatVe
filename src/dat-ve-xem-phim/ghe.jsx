import React, { Component } from 'react'

export default class Ghe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            return <button className='ghe' key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    
    render() {
        console.log(this.props)
        return (
            <div className='text-start mt-2 ms-3'>
                {this.props.hangGhe.hang}{this.renderGhe()}

            </div>
        )
    }

}
