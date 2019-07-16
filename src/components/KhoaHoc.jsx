import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class KhoaHoc extends Component {
    render() {
        let { khoahoc } = this.props;
        return (
            <div className="card">
                <img className="card-img-top" src={khoahoc.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{khoahoc.tenKhoaHoc}</h4>
                    <p className="card-text">{khoahoc.moTa}</p>
                </div>
            </div>
        )
    }
}
