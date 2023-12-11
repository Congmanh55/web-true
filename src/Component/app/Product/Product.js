import React from "react";
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck,faTimes, faPhone, faEnvelope, faMap, faInstagram, faFacebook, faToggleOn, faStar } from '@fortawesome/free-solid-svg-icons';
import whyus from '../../Image/Why us.png';
import img1 from '../../Image/image 81.png';
import img2 from '../../Image/Rectangle 518.png';
import img3 from '../../Image/Frame 50.png';
import img4 from '../../Image/Group 21.png';

const Product = () => {

    return (
        <>
            <div>
                <div>
                    <img src={whyus} style={{width:'100%'}}/>
                </div>

                <div className="product-1">
                    <h1>GIỚI THIỆU</h1>
                    <div className="line">
                        <div className="product-1-line"></div>
                    </div>
                    <div className="product-1-content">
                        <div className="pro-1-item1">
                            <img src={img1} />
                        </div>
                        <div className="pro-1-item2">
                            <h2>Sản phẩm Website mini TrueConnect</h2>
                            <p>Dịch vụ phát triển website mini cung cấp cho khách hàng giải pháp đơn giản, tiện lợi để xây dựng trang web minicho doanh nghiệp hoặc cá nhân. Website mini thu hút sự chú ý của người truy cập tới một nội dung cụ thể, tránh dàn trải và tạo ấn tượng tốt nhất về sản phẩm của Quý khách hàng</p>
                        </div>
                        <div className="pro-1-item3">
                            <h2>Sản phẩm Website mini TrueConnect</h2>
                            <p>TrueConnect cho phét tích hợp gian hàng online trên website mini nhằm đơn giản hoá hoạt động thương mạicủa Quý khách hàng, đồng thời giúp người mua có thểnhanh chóng tiếp cận sản phẩm mong muốn và thực hiện việc mua hàng</p>
                        </div>
                        <div className="pro-1-item4">
                            <img src={img2} style={{width:'100%'}} />
                        </div>
                    </div>
                    <div className="product-1-ct2">
                        <div className="product-item"></div>
                        <div className="product-item"></div>
                        <div className="product-item"></div>
                    </div>
                </div>

                <div className="product-2">
                    <h1>TÍNH NĂNG SẢN PHẨM</h1>
                    <div className="line">
                        <div className="product-2-line"></div>
                    </div>
                    <div className="product-2-item">
                        <div className="product-2-item1">
                            <FontAwesomeIcon icon={faStar} size="2x" className="star-icon"/>
                            <h2>Xây dựng website bán hàng trực tuyến</h2>
                            <p>Website mini bao gồm thông tin sản phẩm, bài đăng, tích hợp các chức năng dành cho bán hàng trực tuyến.Thao tác dễ dàng trên điện thoại giúp Quý khách hàng có thể tạo showcase trực quan, nhanh chóng.</p>
                            <p>Website Mini là một trang web đơn trang, tập trung vào nội dung quan trọng nhất. Bạn có thể sử dụng nó    để giới thiệu sản phẩm, dịch vụ hoặc sự kiện đặc biệt của mình.</p>
                        </div>
                        <div className="product-2-item2">
                            <FontAwesomeIcon icon={faStar} size="2x" className="star-icon1"/>
                            <h2>Khả năng tùy chỉnh </h2>
                            <p>Quý khách hàng cũng có thể tùy chỉnh thông tin logo, banner và tên công ty để phù hợp với thương hiệu của mình. Quý khách hàng cũng có thể đăng tải một số lượng bài viết hoặc sản phẩm theo nhu cầu của mình.</p>
                        </div>
                        <div className="product-2-item1">
                            <FontAwesomeIcon icon={faStar} size="2x" className="star-icon"/>
                            <h2>Phân loại sản phẩm theo nhóm</h2>
                            <p>Quý khách hàng có thể phân loại thông tin. Các nhóm sản phẩm cũng có thể thêm, sửa, xóa, đổi vị trí một cách dễ dàng.</p>
                        </div>
                        <div className="product-2-item2">
                            <FontAwesomeIcon icon={faStar} size="2x" className="star-icon1"/>
                            <h2>Cập nhật thông tin trạng thái sản phẩm</h2>
                            <p>Quý khách có thể cập nhật trạng thái như còn hàng, hết hàng hay ẩn sản phẩm khỏi danh mục bán hàng. Quý khách có thể theo dõi trạng thái sản phẩm trong danh mục quản lý của mình.</p>
                        </div>
                    </div>
                </div>

                <div className="product-3">
                    <div className="product-3-content">
                        <div className="product-3-left">
                            <img src={img3} />
                        </div>
                        <div className="product-3-right">
                            <h2 >Giới thiệu về Webmini</h2>
                            <p>Website Mini là một trang web đơn trang, tập trung vàonội dung quan trọng nhất. Bạn có thể sử dụng nó để giớithiệu sản phẩm, dịch vụ hoặc sự kiện đặc biệt của mình.Với giao diện thân thiện và tốc độ tải trang nhanh,Website Mini tạo ra trải nghiệm tốt cho khách hàng</p>
                            <button>Nâng cấp ngay</button>
                        </div>
                    </div>
                </div>

                <div className="product-4">
                    <h1>ĐIỂM KHÁC BIỆT CỦA TRUECONNECT</h1>
                    <div className="line">
                        <div className="product-4-line"></div>
                    </div>
                    <table>
                        <tr>
                            <th style={{width:'80%'}}></th>
                            <th style={{width:'10%', textAlign:'center'}} >Sản phẩm khác</th>
                            <th style={{width:'10%'}}>TrueConnect</th>
                        </tr>
                        <tr>
                            <td>Xây dựng website bán hàng trực tuyến</td>
                            <td className="tdd"><FontAwesomeIcon icon={faTimes}/></td>
                            <td className="tdd"><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                        <tr>
                            <td>Phân loại thông tin/sản phẩm theo danh mục</td>
                            <td className="tdd"><FontAwesomeIcon icon={faTimes}/></td>
                            <td className="tdd"><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                        <tr>
                            <td>Đăng tải bài viết/sản phẩm</td>
                            <td className="tdd"><FontAwesomeIcon icon={faTimes}/></td>
                            <td className="tdd"><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                        <tr>
                            <td>Tạo Landing page ngay trên chiếc điện thoại của mình</td>
                            <td className="tdd"><FontAwesomeIcon icon={faTimes}/></td>
                            <td className="tdd"><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                        <tr>
                            <td>Cập nhật thông tin trạng thái sản phẩm</td>
                            <td className="tdd"><FontAwesomeIcon icon={faTimes}/></td>
                            <td className="tdd"><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                        <tr>
                            <td>Quản lý bài đăng/ Quản lý đơn hàng</td>
                            <td className="tdd"><FontAwesomeIcon icon={faTimes}/></td>
                            <td className="tdd"><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                        <tr>
                            <td>Hỗ trợ xây dựng mạng lưới khách hàng,mạng lưới cộng đồng</td>
                            <td className="tdd"><FontAwesomeIcon icon={faTimes}/></td>
                            <td className="tdd"><FontAwesomeIcon icon={faCheck}/></td>
                        </tr>
                    </table>
                    <div className="product-4-tm">
                        <h2>Giải đáp thắc mắc</h2>
                        <div className="product-4-content">
                            <div className="product-4-left">
                                <p style={{fontWeight:'bold'}}>Webmini là gì?</p>
                                <p>Giống 1 website thu nhỏ, với các chức năng cần có tương tự như các trang website hiện có trên thị trường. Webmini cung cấp các tác vụ và giải pháp giúp người sử dụng có thể tự tạo trang web cho riêng mình, với các thao tác bằng tay, đơn giản và được thực hiện ngay trên chính thiết bị di động của mình. Việc này nhằm đơn giản hóa hoạt động thương mại của khách hàng, đồng thời giúp người mua có thể nhanh chóng tiếp cận mong muốn và thực hiện việc mua hàng dễ dàng hơn qua online.</p>
                                <div className="product-4-item">
                                    <p>Chia sẻ Webmini có bị mất dữ liệu không?</p>
                                    <p>+</p>
                                </div>
                                <div className="product-4-item">
                                    <p>Chia sẻ Webmini có bị mất dữ liệu không?</p>
                                    <p>+</p>
                                </div>
                                <div className="product-4-item">
                                    <p>Chia sẻ Webmini có bị mất dữ liệu không?</p>
                                    <p>+</p>
                                </div>
                                <div className="product-4-item">
                                    <p>Chia sẻ Webmini có bị mất dữ liệu không?</p>
                                    <p>+</p>
                                </div>
                            </div>
                            <div className="product-4-right">
                                <img src={img4} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-5">
                    <h1>BẢNG GIÁ DỊCH VỤ</h1>
                    <p>Choose the perfect plan for your needs. </p>
                    <p>Always flexible to grow</p>
                    <div className="product-5-items">
                        <div className="product-5-item1">
                            <div className="product-5-item-content">
                                <div className="webmini-1">
                                    <h3>Webmini 1</h3>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div >
                                <div className="webmini-11">
                                    <p style={{fontSize:'30px'}}>1.000.000 </p><p>/ năm</p>
                                </div>    
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> 1 Website
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> 1 Danh thiếp điện tử
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> Phân loại sản phẩm theo 2 nhóm
                                </div>
                                <button>Nâng cấp</button>
                            </div>
                        </div>
                        <div className="product-5-item2">
                            <div className="product-5-item-content">
                                <div className="webmini-1">
                                    <h3>Webmini 1</h3>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div >
                                <div className="webmini-11">
                                    <p style={{fontSize:'30px'}}>2.000.000 </p><p>/ năm</p>
                                </div>    
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> Auto update mode
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> Online operator 24/7
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> International postting
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> Unique newsletters
                                </div>
                                <button>Nâng cấp</button>
                            </div>
                        </div>
                        <div className="product-5-item3">
                            <div className="product-5-item-content">
                                <div className="webmini-1">
                                    <h3>Webmini 1</h3>
                                    <FontAwesomeIcon icon={faCheck}/>
                                </div >
                                <div className="webmini-11">
                                    <p style={{fontSize:'30px'}}>5.000.000 </p><p>/ năm</p>
                                </div>    
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> Auto update mode
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> Online operator 24/7
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> International postting
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> Unique newsletters
                                </div>
                                <div className="pro-5-ct">
                                    <FontAwesomeIcon icon={faCheck} style={{color:'#FF0054'}}/> 20 Design templates
                                </div>
                                <button>Nâng cấp</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-6">
                    <h1>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>
                    <div className="line">
                        <div className="product-6-line"></div>
                    </div>
                    <div className="product-6-items">
                        <div className="product-6-item">
                            <div style={{padding:'20px'}}>
                                <img src={img3} style={{width:'100%'}}/>
                                <p>Phạm Thanh Bình</p>
                                <p>UI Designer at Google</p>
                            </div>
                        </div>
                        <div className="product-6-item">
                            <div style={{padding:'20px'}}>
                                <img src={img3} style={{width:'100%'}}/>
                                <p>Phạm Thanh Bình</p>
                                <p>UI Designer at Google</p>
                            </div>
                        </div>
                        <div className="product-6-item">
                            <div style={{padding:'20px'}}>
                                <img src={img3} style={{width:'100%'}}/>
                                <p>Phạm Thanh Bình</p>
                                <p>UI Designer at Google</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="product-7">
                    <h1>LIÊN HỆ NGAY VỚI CHÚNG TÔI</h1>
                    <div className="line">
                        <div className="product-7-line"></div>
                    </div>
                    <div className="product-7-content">
                        <div className="product-7-input">
                            <div style={{padding:'30px'}}>
                                <input className="pro-ip"/>
                                <input className="pro-ip"/>
                                <input className="pro-ip"/>
                                <input className="pro-ip1"/>
                                <button className="pro-bt">Gửi ngay</button>
                            </div>
                        </div>
                        <div className="product-7-info">
                            <div className="pro-info-item">
                                <div className="pro-7-item"><FontAwesomeIcon icon={faPhone}/></div>
                                <span>
                                    <p style={{color:'#FF0054', fontWeight:'bold'}}>Hotline</p>
                                    <p>0888 136 622</p>
                                </span>
                            </div>
                            <div className="pro-info-item">
                                <div className="pro-7-item"><FontAwesomeIcon icon={faEnvelope}/></div>
                                <span>
                                    <p style={{color:'#FF0054', fontWeight:'bold'}}>Gửi Email</p>
                                    <p>dvkh.trueconnect@gmail.com</p>
                                </span>
                            </div>
                            <div className="pro-info-item">
                                <div className="pro-7-item"><FontAwesomeIcon icon={faMap}/></div>
                                <span>
                                    <p style={{color:'#FF0054', fontWeight:'bold'}}>Địa chỉ của chúng tôi</p>
                                    <p>80, 22/45/69B Hoàng Văn Thái</p>
                                </span>
                            </div>
                            <h3>Follow chúng tôi</h3>
                            <div className="product-7-info-items">
                                <div className="product-7-info-item">In</div>
                                <div className="product-7-info-item"><FontAwesomeIcon icon={faCheck}/></div>
                                <div className="product-7-info-item"><FontAwesomeIcon icon={faEnvelope}/></div>
                                <div className="product-7-info-item"><FontAwesomeIcon icon={faToggleOn}/></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Product;