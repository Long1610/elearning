import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layDSKhoaHoc, xoaKhoaHoc } from '../../redux/actions/QuanLyKhoaHoc.action';

import ModalThem from './ModalThem';
class QLKH extends Component {
    renderKhoaHoc = () => {
        return this.props.mangKhoaHoc.map((kh, index) => {
            return (
                <tr key={index}>
                    <td>{kh.tenKhoaHoc}</td>
                    <td>{kh.moTa}</td>
                    <td><img className="card-img-top" src={kh.hinhAnh} alt /></td>
                    <td>{kh.biDanh}</td>
                    <td>{kh.ngayTao}</td>
                    <td>
                        <button className="btn btn-success">Sửa</button>
                        <button className="btn btn-danger" onClick={() => this.props.xoaKhoaHoc(kh.maKhoaHoc)}>Xóa</button></td>
                </tr>
            )
        })
    }
    componentDidMount() {
        this.props.layDanhSachKhoaHoc();
    }
    render() {
        return (
            <div className="my-cousre">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Tên khóa học</th>
                            <th>Mô tả</th>
                            <th>Hình ảnh</th>
                            <th>Bí danh</th>
                            <th>Ngày tạo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderKhoaHoc()}
                    </tbody>
                    <button className="btn btn-primary" data-toggle="modal" data-target="#modelId">Thêm</button>
                </table>
                <ModalThem />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        mangKhoaHoc: state.quanLyKhoaHocStoreReducer.mangKhoaHoc,
   
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: () => {
            dispatch(layDSKhoaHoc())
        },
        xoaKhoaHoc: (maKH) => {
            dispatch(xoaKhoaHoc(maKH))
        },
    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QLKH)