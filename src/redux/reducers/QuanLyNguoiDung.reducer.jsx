import * as types from '../constant/QuanLyNguoiDung.constant';
import * as CauHinh from '../../common/CauHinh';
const stateDefault = {
    isLogin: localStorage.getItem(CauHinh.userLogin) ? true : false,
    user:JSON.parse(localStorage.getItem(CauHinh.userLogin)),
    mangLoaiND:[],
    thongTin:{}
}


export const quanLyNguoiDungStoreReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case types.DANG_KY: {

            return { ...state };
        };
        case types.DANG_NHAP: {
            state.isLogin = true;
            return { ...state };
        };
        case types.LAY_DANH_SACH_LOAI_NGUOI_DUNG: {
            state.mangLoaiND = action.mangLoaiND
            console.log(action.mangLoaiND);
            return {...state}
        }
        case types.LAY_THONG_TIN_TAI_KHOAN: {
            state.thongTin = action.thongTin;
            console.log(action.thongTin);
            return { ...state }
        }
    }
    return { ...state };
}


