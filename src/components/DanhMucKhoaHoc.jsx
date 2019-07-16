import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
export default class DanhMucKhoaHoc extends Component {
    render() {
        let { danhmuc } = this.props;
        return (
            <div>
                <NavLink className="nav-link" to="/lienhe">{danhmuc.tenDanhMuc}</NavLink>
            </div>
        )
    }
}
