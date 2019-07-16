import React, { Component } from 'react'
import { connect } from 'react-redux';
import { layThongtinTaiKhoan } from '../../redux/actions/QuanLyNguoiDung.action'
class ThongTinTaiKhoan extends Component {

    componentDidMount() {
        this.props.layThongTinTaiKhoan();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        layThongTinTaiKhoan: () => {
            dispatch(layThongtinTaiKhoan());
        }
    }

}
export default connect(null, mapDispatchToProps)(ThongTinTaiKhoan)

