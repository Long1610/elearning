import React, { Component } from 'react'
import { connect } from 'react-redux';
import { dangNhapAction, layDSLoaiNDung, layThongtinTaiKhoan } from '../../redux/actions/QuanLyNguoiDung.action';
import { layDSKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
import { Redirect } from 'react-router-dom';
import AdminTemplate from '../../templates/AdminTemplate';
class DangNhap extends Component {
    // renderSinhVien = () => {
    //     return this.props.mangKhoaHoc.map((sv, index) => {
    //         return this.props.mangLoaiNguoidung.map((loai,index) => {
    //             if(sv.nguoiTao.maLoaiNguoiDung === loai.maLoaiNguoiDung)
    //             return (
    //                 <Redirect to='/admin' />
    //             )
    //         })

    //     })
    // }
    constructor(props) {
        super(props);
        this.state = {
            taiKhoan: '',
            matKhau: '',
            maLoaiNguoiDung: '',
        }
    }

    componentDidMount() {
        this.props.layDSLoaiNguoiDung();
        this.props.layDanhSachKhoaHoc();
        this.props.layThongTinTK();
    }
    dangNhap = (event) => {
        event.preventDefault();
        //Gọi phương thức đăng nhập redux
        this.props.dangNhap(this.state);
    }

    capNhatThongTin = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.isLogin) {
            return (
                <Redirect to='/trangchu' />
            )
        }

    }
    render() {
        if (this.props.isLogin && this.props.user.maLoaiNguoiDung === 'GV') {
            return (<Redirect to='/admin' />)
        }
        else if (this.props.isLogin && this.props.user.maLoaiNguoiDung !== 'GV') {
            return (<Redirect to='/trangchu' />)
        }
        else if (this.props.isLogin === false) {
            return (
                <div className="container" >
                    <div className="w-50 mx-auto">
                        <form onSubmit={this.dangNhap}>
                            <h3>Đăng nhập</h3>
                            <div className="form-group" >
                                <span>Tài khoản</span>
                                <input className="form-control" name="taiKhoan" onChange={this.capNhatThongTin} required />
                            </div>
                            <div className="form-group" >
                                <span>Mật khẩu</span>
                                <input type="password" className="form-control" name="matKhau" onChange={this.capNhatThongTin} required />
                            </div>
                            <div className="form-group" >
                                <button type="submit" className="btn btn-success">Đăng nhập</button>
                            </div>
                        </form>
                    </div>
                </div>
            )
        }

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dangNhap: (thongTinDangNhap) => {
            dispatch(dangNhapAction(thongTinDangNhap));
        },
        layDSLoaiNguoiDung: () => {
            dispatch(layDSLoaiNDung());
        },
        layDanhSachKhoaHoc: () => {
            dispatch(layDSKhoaHoc())
        },
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        }
    }
}
const mapStateToProp = (state) => {
    return {
        isLogin: state.quanLyNguoiDungStoreReducer.isLogin,
        mangLoaiNguoidung: state.quanLyNguoiDungStoreReducer.mangLoaiND,
        mangKhoaHoc: state.quanLyKhoaHocStoreReducer.mangKhoaHoc,
        // user: state.quanLyNguoiDungStoreReducer.user,
        user: state.quanLyNguoiDungStoreReducer.thongTin
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(DangNhap)