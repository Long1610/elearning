import * as types from '../constant/QuanLyNguoiDung.constant';
import Axios from 'axios';
import * as CauHinh from '../../common/CauHinh';
import swal from 'sweetalert2';
export const dangNhapAction = (thongTinDangNhap) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
            data: thongTinDangNhap, //thongTinDangNhap: lấy từ state component
        }).then((result) => {
            localStorage.setItem(CauHinh.userLogin, JSON.stringify(result.data));
            localStorage.setItem(CauHinh.token, result.data.accessToken);
            swal.fire({
                title: 'Đăng nhập thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !'
            })
            dispatch({
                type: types.DANG_NHAP
            })

        })
            .catch((error) => {
                swal.fire("Thông báo", error.response.data, 'error');
            });

    }
}

export const dangKiAction = (thongTinDangKi) => {
    return (dispatch) => {
        Axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
            data: thongTinDangKi,

        }).then((result) => {
            swal.fire({
                title: 'Đăng ký thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            if (result.value) {
                window.location.href = ''
            }
            dispatch({
                type: types.DANG_KY
            })

        }).catch((error) => {
            swal.fire("Thông báo", error.response.data, 'error');
        });

    }
}

export const layThongtinTaiKhoan = () => {
    return (dispatch) => {
        let userLogin = JSON.parse(localStorage.getItem(CauHinh.userLogin));
        Axios({
            method:"POST",
            url:'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            data:{taiKhoan: userLogin.taiKhoan},
            headers:{
                "Authorization":"Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            console.log(result)
            localStorage.setItem(CauHinh.userLogin,JSON.stringify(result.data));
            dispatch({
                type: types.LAY_THONG_TIN_TAI_KHOAN
                ,thongTin: result.data
            })
        }).catch((error) => {
            console.log(error.response)
            swal.fire("thong bao lôi",error.response.data,'error');
        })
    }
}
export const layDSLoaiNDung = () => {
    return(dispatch) => { 
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung`,
            method: 'GET',

        }).then((result) => {
            console.log(result.data);
            dispatch({
                type:types.LAY_DANH_SACH_LOAI_NGUOI_DUNG,
                mangLoaiND: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}