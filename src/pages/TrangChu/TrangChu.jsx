import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import DangNhap from '../../pages/DangNhap/DangNhap';
import DangKy from '../../pages/DangKi/DangKi';
import ThongTinTaiKhoan from '../../pages/ThongTinTaiKhoan/ThongTinTaiKhoan';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import DanhSachKhoaHoc from '../../components/DanhSachKhoaHoc';
import Footer from '../../components/Footer';
// export default class TrangChu extends Component {
//     render() {
//         return (

//             <BrowserRouter>
//                 <Fragment>
//                     <Header />
//                     <Switch>
//                         <Route path='/dangnhap' component={DangNhap} ></Route>
//                         <Route path='/thongtintaikhoan' component={ThongTinTaiKhoan} ></Route>
//                         <Route path='/dangki' component={DangKy} ></Route>
//                     </Switch>
//                     <Banner />
//                     <DanhSachKhoaHoc />
//                     <Footer />

//                 </Fragment>
//             </BrowserRouter>

//         )
//     }
// }


export default class TrangChu extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    {/* <Header /> */}
                    {/* <Switch>
                        <Route path='/dangnhap' component={DangNhap} ></Route>
                        <Route path='/dangki' component={DangKy} ></Route>
                        <Route path='/thongtintaikhoan' component={ThongTinTaiKhoan} ></Route>
                    </Switch> */}

                    <Banner />
                    <DanhSachKhoaHoc />
                    {/* <Footer /> */}

                </Fragment>
            </BrowserRouter>
        )
    }
}
