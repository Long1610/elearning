import React, { Component } from 'react';
import { layDSKhoaHoc } from '../redux/actions/QuanLyKhoaHoc.action';
import { connect } from 'react-redux';
import KhoaHoc from './KhoaHoc';

class DanhSachKhoahoc extends Component {
    renderKhoaHoc = () => {
        return this.props.mangKhoaHoc.map((item, index) => {
            return (
                <div className="col-3" key={index}>
                    <KhoaHoc khoahoc={item}/>
                </div>
            )
        })
    }
    componentDidMount() {
        this.props.layDanhSachKhoaHoc();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.renderKhoaHoc()}
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layDanhSachKhoaHoc: () => {
            dispatch(layDSKhoaHoc())
        }
    }
}
const mapStateToProps = (state) => {
    return {
        mangKhoaHoc: state.quanLyKhoaHocStoreReducer.mangKhoaHoc
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(DanhSachKhoahoc)