import * as types from '../constant/QuanLyKhoaHoc.constant'

const stateKhoaHoc = {
    mangKhoaHoc: [],
    mangDMKhoaHoc: [],
    mangHinhAnh:[]
}
export const quanLyKhoaHocStoreReducer = (state = stateKhoaHoc, action) => {
    console.log(action)
    switch (action.type) {
        case types.LAY_DANH_MUC_KHOA_HOC: {
            state.mangDMKhoaHoc = action.mangDMKhoaHoc
            console.log(action.mangDMKhoaHoc);
            return {...state}
        }
         case types.LAY_HINH_ANH_KHOA_HOC: {
            state.mangHinhAnh = action.mangHinhAnh
            console.log(action.mangHinhAnh);
            return {...state}
        }
        case types.LAY_DANH_SACH_KHOA_HOC: {
            state.mangKhoaHoc = action.mangKhoaHoc
            console.log(action.mangKhoaHoc);
            return {...state}
        }
        case types.THEM_KHOA_HOC: {
            state.mangKhoaHoc = [...state.mangKhoaHoc,action.khoaHoc]
            console.log(action.mangKhoaHoc);
            return {...state}
        }
        case types.XOA_KHOA_HOC: {
            let DSKHXoa = [...state. mangKhoaHoc];
            let index = DSKHXoa.findIndex(sv => sv.maKhoaHoc === action.maKH);
            if(index !== -1){
                DSKHXoa.splice(index,1);
            }
            state.mangKhoaHoc = DSKHXoa;
            return {...state}
        }
    }
    return { ...state };
}

