import * as types from '../constant/QuanLyKhoaHoc.constant'
import Axios from 'axios';
import swal from 'sweetalert2';
import * as CauHinh from '../../common/CauHinh';
export const layDanhMucKhoaHoc = () => {
    return(dispatch) => { 
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc`,
            method: 'GET',

        }).then((result) => {
            console.log(result.data);
            dispatch({
                type:types.LAY_DANH_MUC_KHOA_HOC,
                mangDMKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const layDSKhoaHoc = () => {
    return(dispatch) => { 
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01`,
            method: 'GET',

        }).then((result) => {
            console.log(result.data);
            dispatch({
                type:types.LAY_DANH_SACH_KHOA_HOC,
                mangKhoaHoc: result.data
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const themKhoaHoc = (khoaHoc) => {
    return(dispatch) => { 
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc`,
            method: 'POST',
            data:khoaHoc,
            headers:{
                "Authorization":"Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Thêm thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type:types.THEM_KHOA_HOC,
            })
        }).catch((error) => {
            swal.fire("Thông báo", error.response.data, 'error');
        })
    }
}
export const xoaKhoaHoc = (maKH) => {
    return(dispatch) => { 
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${this.maKH}`,
            method: 'DELETE',
            data:maKH,
            headers:{
                "Authorization":"Bearer " + localStorage.getItem(CauHinh.token)
            }
        }).then((result) => {
            swal.fire({
                title: 'Xóa thành công !',
                type: 'success',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK !',
            })
            dispatch({
                type:types.XOA_KHOA_HOC,
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}
export const layHinhAnhKhoaHoc = () => {
    return(dispatch) => { 
        Axios({
            url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
            method: 'POST',

        }).then((result) => {
            dispatch({
                type:types.LAY_HINH_ANH_KHOA_HOC,
            })
        }).catch((error) => {
            console.log(error)
        })
    }
}