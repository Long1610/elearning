import React, { Component, Fragment } from 'react'
import CacDanhMuc from './CacDanhMuc';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as CauHinh from '../common/CauHinh';
import { layThongtinTaiKhoan } from '../redux/actions/QuanLyNguoiDung.action';
import { Redirect } from 'react-router-dom';
import AdminTemplate from '../templates/AdminTemplate';
class Header extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        this.props.layThongTinTK();
    }
    dangXuat = () => {
        localStorage.removeItem(CauHinh.userLogin);
        window.location.href = "";
    }
    render() {
        if (this.props.isLogin && this.props.user.maLoaiNguoiDung !== 'GV') {
            return (
                <header>
                    <nav className="navbar navbar-expand-sm">
                        <div className="col-sm-8 d-flex align-items-center left">
                            <NavLink className="nav-link navbar-brand" to="/trangchu"><img src="./img/logocy.png" alt="" /></NavLink>
                            <div className="categories">
                                <div id="dropdownButton" class="dropdownButton dropdown dropdown--topics">
                                    <a href="#" className="dropdown-toggle tglink font-family" data-toggle="dropdown"><i className="fa fa-bars" aria-hidden="true" /> KHÓA HỌC &nbsp; <b className="caret" /></a>
                                    <ul className="dropdown-menu_ dropdown-menu multi-column columns-3 nav-menu-child  menu-course">
                                        <li className="liMenuMain row">
                                            <ul className="multi-column-dropdown">
                                                <NavLink className="nav-link ml-3" to="/lienhe">Tất cả khóa học</NavLink>
                                                <CacDanhMuc />
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="input-search">
                                <form action>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Nhập tên khóa học" />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-search" aria-hidden="true" /></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-4 d-flex align-items-center right">
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <div className="liHotline">
                                            <span className="titleHotLine">&nbsp;HOT LINE</span>
                                            <br />
                                            <span className="titlePhone">&nbsp;0961.05.10.14</span>
                                        </div>
                                    </li>
                                    <div className="dropdown account">
                                        <a className="btn btn-secondary dropdown-toggle account" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <p>Xin chào : {this.props.user.taiKhoan}</p>
                                        </a>
                                        <div className="dropdown-menu user-in" aria-labelledby="dropdownMenuLink">
                                            <a className="dropdown-item" routerlink="/trang-chu/thong-tin-ca-nhan">Thông tin cá nhân</a>
                                            <a className="dropdown-item">Khóa học của tôi</a>
                                            <a className="dropdown-item" onClick={this.dangXuat}>Thoát</a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#myMenu" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                    </nav>
                </header>
            )
        }
        return (
            <header>
                <nav className="navbar navbar-expand-sm">
                    <div className="col-sm-8 d-flex align-items-center left">
                        <NavLink className="nav-link navbar-brand" to="/trangchu"><img src="./img/logocy.png" alt="" /></NavLink>
                        <div className="categories">
                            <div id="dropdownButton" class="dropdownButton dropdown dropdown--topics">
                                <a href="#" className="dropdown-toggle tglink font-family" data-toggle="dropdown"><i className="fa fa-bars" aria-hidden="true" /> KHÓA HỌC &nbsp; <b className="caret" /></a>
                                <ul className="dropdown-menu_ dropdown-menu multi-column columns-3 nav-menu-child  menu-course">
                                    <li className="liMenuMain row">
                                        <ul className="multi-column-dropdown">
                                            <NavLink className="nav-link ml-3" to="/lienhe">Tất cả khóa học</NavLink>
                                            <CacDanhMuc />
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="input-search">
                            <form action>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Nhập tên khóa học" />
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-search" aria-hidden="true" /></span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-4 d-flex align-items-center right">
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <div className="liHotline">
                                        <span className="titleHotLine">&nbsp;HOT LINE</span>
                                        <br />
                                        <span className="titlePhone">&nbsp;0961.05.10.14</span>
                                    </div>
                                </li>


                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/dangnhap">Đăng nhập</NavLink>
                                    {/* <a className="nav-link" to="/dangnhap"><button className="btn">Đăng nhập</button></a> */}
                                </li>
                                <li className="nav-item">
                                    {/* <a className="nav-link" to="/dangki"><button className="btn">Đăng kí</button></a> */}
                                    <NavLink className="nav-link" to="/dangki">Đăng Ký</NavLink>
                                </li>


                            </ul>
                        </div>
                    </div>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#myMenu" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>

                </nav>
            </header>
        )

    }
}
const mapStateToProp = (state) => {
    return {
        isLogin: state.quanLyNguoiDungStoreReducer.isLogin,
        // user: state.quanLyNguoiDungStoreReducer.user,
        user: state.quanLyNguoiDungStoreReducer.thongTin
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        }
    }

}
export default connect(mapStateToProp, mapDispatchToProps)(Header);


