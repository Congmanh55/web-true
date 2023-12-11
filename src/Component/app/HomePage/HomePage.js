import React from "react";
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMap,faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons';
import imgHome1 from '../../Image/Component 2.png';
import img1 from '../../Image/Frame 629.png';
import img2 from '../../Image/Frame 87.png';
import img3 from '../../Image/Frame 88.png';
import img4 from '../../Image/illustration_benefits.png';
import img5 from '../../Image/Group 1663.png';
import img6 from '../../Image/illustration_marketing_contact.png';
import img7 from '../../Image/PhotoRoom_20230807_104800 1.png'
import imgBlog1 from '../../Image/IMG.png';
import imgBlog2 from '../../Image/IMG1.png';
import imgBlog3 from '../../Image/IMG2.png';
import imgBlog4 from '../../Image/IMG3.png';
import imgBlog5 from '../../Image/IMG4.png';
import item1 from '../../Image/item1.png';
import item2 from '../../Image/item2.png';
import item3 from '../../Image/item3.png';
import item4 from '../../Image/item4.png';
import item5 from '../../Image/item5.png';
import item6 from '../../Image/item6.png';
import item7 from '../../Image/item7.png';
import item8 from '../../Image/item8.png';
import icon1 from '../../Image/Sốđiệnthoại 1.png';
import icon2 from '../../Image/icon-02 1.png';
import icon3 from '../../Image/zalo 1.png';

const HomePage = () => {

    return (
        <>
            <div style={{backgroundColor: '#F8EFEC'}}>
                <div className="home-header">
                    <div className="home-header-left">
                        <div style={{display:'flex', textAlign:'left', fontSize:'60px'}}>
                            <p style={{color:'#0DC5AE', margin:'10px 0'}}>True</p><p style={{color:'#FF0054', margin:'10px 0'}}>Connect</p>
                        </div>
                        <p style={{textAlign:'justify'}}>Nền tảng mở nhằm mục đích dễ dàng cho các đơn vị phát triển ứng dụng khác có thể tích hợp và đẩy sản phẩm lên nền tảng TrueConnect và có cơ hội tiếp cận tập khách hàng rộng mở của hệ thống.</p>
                        <div className="form">
                            <input type="text" className="home-input" placeholder="Job title, keyword"/>
                            <button type="submit" className="home-button-1">
                                <FontAwesomeIcon icon={faSearch} style={{color:'white'}}/>
                            </button>
                        </div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <img src={imgHome1} style={{width:'100%'}}/>
                    </div>
                </div>
            </div>
            <div>
                <div className="home-introduce">
                    <div className="home-introduce-1">
                        <div className="home-introduce-1-left">
                            <div style={{display:'flex'}}>
                                <p style={{color:'#0DC5AE', fontWeight:'bold', fontSize:'40px', textAlign:'left'}}>Công ty Cổ phần Công nghệ <span style={{color:'#FF0054'}}>True</span>Connect</p>
                            </div>
                            
                            <p style={{textAlign:'justify'}}>Chúng tôi hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh ...</p>
                            <div>
                                <div>
                                    Tận tâm
                                </div>
                                <div>
                                    Lắng nghe
                                </div>
                                <div>
                                    Sáng tạo
                                </div>
                            </div>
                        </div>
                        <div className="home-introduce-1-right">
                            <div style={{width:'100%', marginBottom:'20px'}}>
                                <img src={img1} className="home-img-1" />
                            </div>
                            <div style={{display:'flex', justifyContent:'space-between', width:'100%'}}>
                                <div>
                                    <img src={img3} className="home-img-3"/>
                                </div>
                                <div>
                                    <img src={img2} className="home-img-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-introduce-2">
                        <div>Tại sao nên lựa chọn chúng tôi</div>
                        <div className="home-introduce-content">
                            <div className="introduce-content">
                                <div style={{padding:'15px'}}>
                                    <img src={img4} className="introduce-content-img"/>
                                    <p style={{textAlign:'left', fontWeight:'bold', fontSize:'24px', color:'#0DC5AE'}}>Gía cả hợp lý</p>
                                    <p style={{textAlign:'left'}}>Gía thành hợp lý được cung cấp với từng mức giá, phù hợp cho mọi đối tượng</p>
                                </div>
                            </div>
                            <div className="introduce-content">
                                <div style={{padding:'15px'}}>
                                    <img src={img5} className="introduce-content-img"/>   
                                    <p style={{textAlign:'left', fontWeight:'bold', fontSize:'24px', color:'#0DC5AE'}}>Chất lượng đảm bảo</p>
                                    <p style={{textAlign:'left'}}>Chất lượng các sản phẩm phù hợp với giá tiền, bắt mắt và phù hợp với xu hướng.</p>
                                </div>
                            </div>
                            <div className="introduce-content">
                                <div style={{padding:'15px'}}>
                                    <img src={img6} className="introduce-content-img"/>
                                    <p style={{textAlign:'left', fontWeight:'bold', fontSize:'24px', color:'#0DC5AE'}}>Mới mẻ và tiện lợi</p>
                                    <p style={{textAlign:'left'}}>Nhiều tính năng mới lạ, tiện dụng với người sử dụng.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{backgroundColor:'#F8EFEC'}}>
                    <div className="eco">
                        <div className="eco-1">
                            <p style={{color:'#0DC5AE', fontWeight:'bold', fontSize:'40px', textAlign:'left', marginBottom:'0px'}}>Hệ sinh thái <span style={{color:'#FF0054'}}>True</span>Connect</p>
                            <p style={{color:'#FF0054', fontWeight:'bold'}} className="xemthem">Xem thêm > </p>
                        </div>
                        <div className="eco-2">
                            <div className="eco-title">
                                <div className="eco-line"></div>
                                <div style={{textAlign:'left', fontWeight:'bold',fontSize:'20px', paddingLeft:'20px', borderLeft:'3px solid #cccccc'}}>
                                    <p>Danh thiếp điện tử</p>
                                    <p>Website mini</p>
                                    <p>Dịch vụ tư vấn chuyển đổi số</p>
                                    <p>Phòng CNTT thuê ngoài</p>
                                    <p>Ứng dụng cho doanh nghiệp SME</p>
                                </div>
                                <p style={{color:'#FF0054', fontWeight:'bold'}} className="xemthem1">Xem thêm > </p>
                            </div>
                            <div className="eco-img">
                                <img src={img7} style={{width:'90%'}}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="blog">
                        <div>BLOG</div>
                        <div className="blog-title">
                            <div className="blog-title-left">
                                <div style={{fontWeight:'bold', fontSize:'24px', color:'#0DC5AE'}}>Bài viết mới nhất</div>
                                <p>Nơi những khách hàng của TrueConnect cập nhật những tin tức mới nhất về thị trường công nghệ</p>
                            </div>
                            <div style={{color:'red'}}>
                                Xem thêm ->
                            </div>
                        </div>
                        <div className="img-box">
                            <div class="box" id="box1">
                                <img src={imgBlog1}  className="imgBlog1"/>
                                <div className="text-blog1">
                                    <p style={{textAlign:'left'}}>24 May 2019 * 8 mins</p>
                                    <h1>Event On A Budget: 7 Tips</h1>
                                    <h1>From The Great Depression</h1>
                                    <p>Aenean viverra rhoncus pede. Phasellus blandit leo ut odio. Pellentesque commodo eros a enim. Phasellus consectetuer vestibulum elit.</p>
                                </div>
                            </div>
                            <div class="box" id="box2">
                                <img src={imgBlog2} className="imgBlog2"/>
                                <div className="text-blog2">
                                    <p>24 May 2019 * 8 mins</p>
                                    <h3>Apply These 7 Secret Techniques To Improve Event</h3>
                                </div>
                            </div>
                            <div class="box" id="box3">
                                <img src={imgBlog3} className="imgBlog3"/>
                                <div className="text-blog3">
                                    <p>24 May 2019 * 8 mins</p>
                                    <h3>Event Doesn't Have To Be Hard. Read These 7 Tips</h3>
                                </div>
                            </div>
                            <div class="box" id="box4">
                                <img src={imgBlog4} className="imgBlog4"/>
                                <div className="text-blog4">
                                    <p>24 May 2019 * 8 mins</p>
                                    <h3>Knowing These 7 Secrets Will Make Your Event Look Amazing</h3>
                                </div>
                            </div>
                            <div class="box" id="box5">
                                <img src={imgBlog5} className="imgBlog5"/>
                                <div className="text-blog5">
                                    <p>24 May 2019 * 8 mins</p>
                                    <h3>Don't Waste Time! 7 Facts Until You Reach Your Event</h3>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div>
                    <h2 style={{color:'#0DC5AE'}}>Đối tác của chúng tôi?</h2>
                    <div className="partner">
                        <div className="item"><img src={item1}/></div>
                        <div className="item"><img src={item2}/></div>
                        <div className="item"><img src={item3}/></div>
                        <div className="item"><img src={item4}/></div>
                        <div className="item"><img src={item5}/></div>
                        <div className="item"><img src={item6}/></div>
                        <div className="item"><img src={item7}/></div>
                        <div className="item"><img src={item8}/></div>
                    </div>
                </div>

                <div className="contact-container">
                    <div className="contact">
                        <div className="title-contact">
                            <h1 style={{color:'#0DC5AE', marginTop:'0'}}>Liên Hệ</h1>
                            <p>
                                <FontAwesomeIcon icon={faEnvelope} /> dvkh.trueconnect@gmail.comcom
                            </p>
                            <p>
                                <FontAwesomeIcon icon={faMap} /> 80, 69b/22/45 Hoang Van Thai, Khuong Trung, Thanh Xuan, Ha Noi
                            </p>
                        </div>
                        <div className="ip">
                            <input placeholder="Họ và tên"/>
                            <input placeholder="Email của bạn"/>
                            <input placeholder="Số điện thoại"/>
                            <input placeholder="Ghi chú"/>
                            <button>Gửi thông tin</button>
                        </div>
                        <div className="icon-contact">
                            <img src={icon1} />
                            <img src={icon2} />
                            <img src={icon3} />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomePage;