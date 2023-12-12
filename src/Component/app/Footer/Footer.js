import React from "react";
import logo from '../../Image/2022.08 1.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faMap } from '@fortawesome/free-solid-svg-icons';
import tiktok from '../../Image/icon-06 1.png';
import fb from '../../Image/facebook 1.png';
import yt from '../../Image/youtube 1.png';

const Footer = () => {
    const a = '>'

    return (
        <>
            <div style={{margin: '50px',paddingTop:'50px', flexDirection:'column', borderTop:'2px solid #0DC5AE'}}>
                <div style={{textAlign:'left'}}>
                    <img src={logo}/>
                </div>

            <div className="footer">
                <div className="footer-1">
                    <p>CÔNG TY CỔ PHẦN CÔNG NGHỆ TRUECONNECT</p>
                </div>
                <div className="footer-2">
                    <p>
                        <FontAwesomeIcon icon={faEnvelope} style={{color:'#0DC5AE', paddingRight:'10px'}}/>
                        <span>dvkh.trueconnect@gmail.com</span>
                    </p>
                    <p>
                        <FontAwesomeIcon icon={faMap} style={{color:'#0DC5AE', paddingRight:'10px'}}/>
                        <span>80, 69b/22/40 Hoang Van Thai, Khuong Trung, Thanh Xuan, Ha Noi</span>
                    </p>
                </div>
                <div className="footer-3">
                    <span style={{color:'#0DC5AE'}}>Hotline/ Zalo</span> : 0888 136 622
                </div>
                <div className="footer-4">
                    <p>Số giấy chứng nhận đăng ký kinh doanh:</p>
                    <p>Ngày cấp: . Nơi cấp: Sở kế hoạch và đầu tư thành phố Hà Nội</p>
                </div>
                <div className="footer-5">
                    © 2023 All Right Reserved True Connect
                </div>
                <div className="footer-6">
                    <p style={{fontWeight:'bold'}} className="fff">Tài liệu</p>
                    <p>Tài liệu hướng dẫn</p>
                </div>
                <div className="footer-7">
                    <p style={{fontWeight:'bold'}} className="fff">TrueConnect</p>
                    <p>Chính sách bảo mật</p>
                    <p>Chính sách thanh toán và bán hàng </p>
                    <p>Điều khoản và điều kiện sử dụng</p>
                </div>
                <div className="footer-8">
                    <img src={tiktok} />
                    <img src={fb} />
                    <img src={yt} />
                </div>
                <div className="footer-9">
                    <input placeholder="Email"/>
                    <button>{a}</button>
                </div>
            </div>

            </div>
        </>
    )
}

export default Footer;