import React, { Component } from 'react'
import { Prompt, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { themKhoaHoc, layHinhAnhKhoaHoc, layDanhMucKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';
import { layThongtinTaiKhoan } from '../../redux/actions/QuanLyNguoiDung.action';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Axios from 'axios';
class FormThem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            maKhoaHoc: '',
            biDanh: '',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: 0,
            hinhAnh: '',
            maNhom: 'GP01',
            ngayTao: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: this.props.user.taiKhoan,
        }
    }
    renderDanhMuc = () => {
        return this.props.mangDMKhoaHoc.map((dm, index) => {
            return (
                <option key={index}>{dm.maDanhMuc}</option>
            )
        })
    }
    themKH = (event) => {
        event.preventDefault();
        this.props.themKhoaHoc(this.state);
    }
    componentDidMount() {
        this.props.layThongTinTK();
        this.props.layDanhMucKhoaHoc();
    }
    uploadHinhAnh = (event) => {
        this.setState({
            hinhAnh: event.target.files[0].name
        })
    }
    uploadClick = () => {
        const fd = new FormData();
        fd.append('Files', this.state.hinhAnh, this.state.hinhAnh.name)
        Axios.post('http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', fd)
            .then(res => {
                console.log(res);
            })
    }
    layThongTin = (event) => {
        const input = event.target;
        this.setState({
            [input.name]: input.value,

        })
        console.log(this.state);
    }
    render() {
        return (
            <form onSubmit={this.themKH} className="container">
                <div className="form-group">
                    <span>Mã Khóa học</span>
                    <input name="maKhoaHoc" type="text" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Bí danh </span>
                    <input type="text" name="biDanh" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Tên khóa học</span>
                    <input type="text" name="tenKhoaHoc" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Mô tả</span>
                    <input type="text" name="moTa" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Lượt xem</span>
                    <input type="text" name="luotXem" className="form-control" onChange={this.layThongTin} />

                </div>
                <div className="form-group">
                    <span>Hình ảnh</span>
                    <input type="file" name="hinhAnh" className="form-control" onChange={this.uploadHinhAnh} />
                    <button onClick={this.uploadClick}>Upload!</button>
                </div>
                <div className="form-group">
                    <span>Ngày tạo</span>
                    <input type="text" name="ngayTao" className="form-control" onChange={this.layThongTin} />
                    {/* <input name="ngayTao" type="date" class="form-control" onChange={this.layThongTin} /> */}

                </div>
                <div className="form-group">
                    <span>Mã danh muc</span>
                    <select name="maDanhMucKhoaHoc" onChange={this.layThongTin} >
                        {this.renderDanhMuc()}
                    </select>

                </div>
                <div className="form-group">
                    <button className="btn btn-success">Thêm</button>
                </div>
                {/* <Prompt when={this.state.TrangThai} message={location => 'Bạn có chắc muốn rời khỏi trang ?'}>
                </Prompt> */}
            </form>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        themKhoaHoc: (khoaHoc) => {
            dispatch(themKhoaHoc(khoaHoc));
        },
        layHinhAnhKhoaHoc: () => {
            dispatch(layHinhAnhKhoaHoc());
        },
        layThongTinTK: () => {
            dispatch(layThongtinTaiKhoan());
        },
        layDanhMucKhoaHoc: () => {
            dispatch(layDanhMucKhoaHoc())
        }
    }
}
const mapStateToProp = (state) => {
    return {
        user: state.quanLyNguoiDungStoreReducer.thongTin,
        mangDMKhoaHoc: state.quanLyKhoaHocStoreReducer.mangDMKhoaHoc
    }
}
export default connect(mapStateToProp, mapDispatchToProps)(FormThem)