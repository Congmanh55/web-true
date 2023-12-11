import React from "react";
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp,faCircle, faSearch } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../Image/img5.png';
import img2 from '../../Image/Rectangle 606.png';
import img3 from '../../Image/Rectangle 607.png';
import img4 from '../../Image/Rectangle 519.png';
import img5 from '../../Image/illustration_marketing_contact.png';
import img6 from '../../Image/about-5.png'
import img7 from '../../Image/image 77.png';
import img8 from '../../Image/image 78.png';
import img9 from '../../Image/z4142326720364_a57547468ca64aa5d86cca3973ee82c5 1.png';

const About = () => {

    return (
        <>
            <div className="about-container">
                <div className="about-content">
                    <div className="about-1">
                        <h1>VỀ CHÚNG TÔI</h1>
                        <div className="line">
                            <div className="line1-about"></div>
                        </div>
                        <div className="about-1-content">
                            <div className="content-1">
                                Kết sức mạnh, Nối thành công
                            </div>
                            <div className="content-2">
                                Nền tảng hệ thống tốt, nâng cấp thường xuyên, linh hoạt, cầu thị
                            </div>
                            <div className="content-3">
                                Donec vitae sapien ut libero venenatis faucibus. Vestibulum fringilla pede sit amet augue. Vivamus euismod mauris.
                            </div>
                        </div>
                        <div className="about-1-img">
                            <img src={img1} className="about-img1"/>
                            <div className="about-tt">
                                <h2>Hệ sinh thái công nghệ</h2>
                                <h4>Kết sức mạnh, Nối thành công</h4>
                                <div className="about-sl">
                                    <div >
                                        <h1 style={{color:'#FA541C'}}>5000+</h1>
                                        <p>Người dùng</p>
                                    </div>
                                    <div>
                                        <h1 style={{color:'#FA541C'}}>50+</h1>
                                        <p>Thông điệp truyền tải</p>
                                    </div>
                                    <div>
                                        <h1 style={{color:'#FA541C'}}>20+</h1>
                                        <p>Đối tác công nghệ</p>
                                    </div>
                                    <div>
                                        <h1 style={{color:'#FA541C'}}>8+</h1>
                                        <p>Ứng dụng cho hệ sinh thái</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-2">
                        <h1>GIỚI THIỆU</h1>
                        <div className="line">
                            <div className="line2-about"></div>
                        </div>
                        <div className="about1-content">
                            <div className="ab1">
                                <div>Thành lập vào năm 2022, Công ty Cổ phần Giải pháp Công nghệ TrueConnect hoạt động với mong muốn thúc đẩy quá trình kinh doanh và vận hành của Quý khách hàng bằng việc dễ dàng tiếp cận các công cụ Công nghệ thông tin phục vụ hệ thống từ quy mô siêu nhỏ (cá nhân) tới quy mô doanh nghiệp vừa và các giải pháp tuỳ chỉnh hoá cho doanh nghiệp lớn, giúp Quý khách mở rộng mạng lưới kết nối và phát triển kinh doanh.</div>
                            </div>
                            <p>Chúng tôi hiểu được giá trị của việc có một hệ sinh thái phần mềm phong phú và đầy đủ với nhu cầu của Quý khách hàng. Đặc biệt với các cá nhân kinh doanh và doanh nghiệp nhỏ, tính dễ sử dụng và chi phí hợp lý cũng đóng vai trò quan trọng trong quá trình hoạt động.</p>
                            <p>Thấu hiểu nhu cầu và các vấn đề mà khách hàng gặp phải, Công ty Cổ phần Giải pháp Công nghệ TrueConnect đã dành thời gian nghiên cứu và phát triển Hệ sinh thái TrueConnect gồm nhiều ứng dụng, phần mềm liên kết chặt chẽ với nhau, giúp Quý khách hàng có trải nghiệm tốt trong quá trình vận hành và phát triển kinh doanh.</p>
                            <p>Hệ sinh thái TrueConnect có thể được sử dụng hoàn toàn trên điện thoại và bao gồm các sản phẩm, giải pháp và dịch vụ sau:</p>
                        </div>
                        <div className="about2-img">
                            <div className="about-img2">
                                <img src={img2} />
                            </div>
                            <div className="about-img2">
                                <img src={img3} />
                            </div>
                            <div className="about-img2">
                                <img src={img4} />
                            </div>
                        </div>
                        <div className="about-option-content">
                            <div>
                                Sản phẩm: Danh thiếp điện tử TrueConnect; Website mini tích hợp gian hàng online
                            </div>
                            <div>
                                Giải pháp: Quản trị doanh nghiệp (HRM, ERP)
                            </div>
                            <div>Dịch vụ: Dịch vụ phát triển website, dịch vụ Công nghệ thông tin cho thuê, dịch vụ quản trị, vận hành và tối ưu hệ thống (Managed Services), dịch vụ tư vấn chuyển đổi số</div>
                        </div>
                        <div className="text-about">Hệ sinh thái TrueConnect được phát triển bởi công ty phần mềm với hơn 30 nhân sự công nghệ thông tin, trong đó đội ngũ sáng lập đã có kinh nghiệm nhiều năm trong lĩnh vực Công nghệ thông tin, có kinh nghiệm phát triển, triển khai và vận hành những dự án lớn hàng triệu người dùng.</div>
                    </div>

                    <div className="about-3">
                        <div className="about-3-header">
                            <div className="about-3-header-left">
                                <h1>TẦM NHÌN VÀ SỨ MỆNH</h1>
                                <div className="line">
                                    <div className="line2-about"></div>
                                </div>
                            </div>
                            <img src={img5} />
                        </div>
                        <div className="sm">
                            <div style={{color:'#FF0054', fontWeight:'bold'}}>
                                <FontAwesomeIcon size="2x" icon={faAngleUp}/><span>SỨ MỆNH</span>
                            </div>
                            <p>TrueConnect không ngừng sáng tạo và phát triển để đem lại giá trị cho Quý khách hàng, Quý đối tác và xã hội bao gồm:</p>
                        </div>
                        <div className="about-option-content">
                            <div>
                                Đơn giản hoá và thống nhất trải nghiệm ứng dụng Công nghệ Thông tin vào mọi lĩnh vực trong kinh doanh và cuộc sống
                            </div>
                            <div>
                                Hỗ trợ thúc đẩy chuyển đổi số cho các cá nhân kinh doanh và các doanh nghiệp vừa và nhỏ (SME)
                            </div>
                            <div>Phổ biến áp dụng Công nghệ thông tin vào công việc kinh doanh và quản trị doanh nghiệp</div>
                        </div>
                        <div className="tn">
                            <div style={{color:'#FF0054', fontWeight:'bold'}}>
                                <FontAwesomeIcon size="2x" icon={faAngleUp}/><span>TẦM NHÌN</span>
                            </div>
                            <p>Trở thành Đối tác đồng hành hàng đầu/top 1 Việt Nam về hệ sinh thái công nghệ và các giải pháp kinh doanh toàn diện, đơn giản, thống nhất dành cho cá nhân, tổ chức và doanh nghiệp thực hiện hoạt động kinh doanh.</p>
                        </div>
                    </div>

                    <div className="about-4">
                        <h1>NĂNG LỰC CỐT LÕI</h1>
                        <div className="line">
                            <div className="line2-about"></div>
                        </div>
                        <div className="about-4-item">
                            <div className="about-4-item1">
                                <p style={{color:'#FF0054', textAlign:'center', fontWeight:'bold'}}>1. Nền tảng</p>
                                <p>Đội ngũ của TrueConnect là sự kết hợp hài hoà của các nhân sự giàu kinh nghiệm, từng tham gia các dự án lớn trong lĩnh vực Công nghệ thông tin và các nhân sự trẻ giàu tính sáng tạo và có khả năng thích ứng cao. Đó là nền tảng giúp chúng tôi có thể phát triển ra các sản phẩm & dịch vụ chất lượng cao, đáp ứng phục vụ hàng triệu người dùng và nhanh chóng phù hợp với sự phát triển vũ bão của thị trường trong thời đại chuyển đổi số</p>
                            </div>
                            <div className="about-4-item2">
                                <p style={{color:'#FF0054', textAlign:'center', fontWeight:'bold'}}>2. Tham vọng</p>
                                <p>Chúng tôi có tham vọng trở thành người đứng đầu trong lĩnh vực công nghệ thông tin và các giải pháp công nghệ hỗ trợ quá trình thực hành kinh doanh. Đây cũng là động lực để chúng tôi tạo ra tiêu chuẩn khắt khe cho Hệ sinh thái TrueConnect – hoạt động mạnh mẽ, đầy đủ tính năng và cởi mở với sự thay đổi của xu hướng.</p>
                            </div>
                            <div className="about-4-item3">
                                <p style={{color:'#FF0054', textAlign:'center', fontWeight:'bold'}}>3. Thích nghi</p>
                                <p>TrueConnect chú trọng nắm bắt xu thế, nhu cầu của thị trường, và khả năng sử dụng nền tảng Công nghệ mới, đáp ứng được những nhu cầu phức tạp của người dùng. Hệ sinh thái TrueConnect được thiết kế để dễ dàng nâng cấp, tích hợp thêm các tính năng và các sản phẩm mới trong hệ sinh thái</p>
                            </div>
                            <div className="about-4-item5">
                                <p style={{color:'#FF0054', textAlign:'center', fontWeight:'bold'}}>4. Chất lượng dịch vụ</p>
                                <p>Sản phẩm của chúng tôi hướng tới nhu cầu, trải nghiệm và sự tiện ích của khách hàng khi cung cấp dịch vụ. TrueConnect không ngừng đổi mới và cải thiện chất lượng sản phẩm và dịch vụ, liên tục nâng cao các tiêu chuẩn và dịch vụ khi cung cấp cho khách hàng.</p>
                            </div>
                            <div className="about-4-item4">
                                <p style={{color:'#FF0054', textAlign:'center', fontWeight:'bold'}}>5. Tôn chỉ hành động</p>
                                <ul>
                                    <li style={{textAlign:'left'}}>
                                        <span>Với khách hàng:</span>
                                         tối ưu chi phí, thúc đẩy áp dụng công nghệ thông tin, chuyển đổi số vào hoạt động kinh doanh của khách hàng, cải thiện tính bền vững của hoạt động kinh doanh phía khách hàng
                                    </li>
                                    <li style={{textAlign:'left'}}>
                                        <span>Với nội bộ</span>
                                        Cùng đồng hành xây dựng sản phẩm, đồng thời trú trọng phát triển, nâng tầm bản thân, cùng chia sẻ lợi ích, khó khăn giữa doanh nghiệp và nhân sự
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="about-5">
                        <h1>GIÁ TRỊ CỐT LÕI</h1>
                        <div className="line">
                            <div className="line2-about"></div>
                        </div>
                        <div className="about-5-content">
                            <div className="ab-5">
                                <div className="about-5-item">
                                    <div className="about-5-left">
                                        <p style={{margin:'0'}}>Tôn trọng ( Respect )</p>
                                        <p> Tôn trọng bản thân, tôn trọng khách hàng, tôn trọng pháp luật</p>
                                    </div>
                                    <div><FontAwesomeIcon icon={faCircle} style={{color:'orange', margin:'0 20px'}}/></div>
                                </div>
                                <div className="about-5-item">
                                    <div className="about-5-left">
                                        <p style={{margin:'0'}}>Lắng nghe ( Listen )</p>
                                        <p>Lắng nghe để thấu hiểu, lắng nghe để đổi thay, lắng nghe để phát triển</p>
                                    </div>
                                    <div><FontAwesomeIcon icon={faCircle} style={{color:'green', margin:'0 20px'}}/></div>
                                </div>
                                <div className="about-5-item">
                                    <div className="about-5-left">
                                        <p style={{margin:'0'}}>Chia sẻ ( Share )</p>
                                        <p>Chia sẻ để hỗ trợ khách hàng, chia sẻ để phát triển nội bộ, cùng hướng về mục tiêu chung</p>
                                    </div>
                                    <div><FontAwesomeIcon icon={faCircle} style={{color:'blue', margin:'0 20px'}} className="icon-about-5" /></div>
                                </div>
                            </div>
                            <div className="about-5-img">
                                <img src={img6} />
                            </div>
                            <div>
                                <div className="about-5-item">
                                    <div><FontAwesomeIcon icon={faCircle} style={{color:'blue', margin:'0 20px'}} /></div>
                                    <div className="about-5-right">
                                        <p style={{margin:'0'}}>Đồng hành ( Company )</p>
                                        <p>Đồng hành và phát triển cùng sự phát triển của khách hàng, đối tác</p>
                                    </div>
                                </div>
                                <div className="about-5-item">
                                    <div><FontAwesomeIcon icon={faCircle} style={{color:'orange', margin:'0 20px'}}/></div>
                                    <div className="about-5-right">
                                        <p style={{margin:'0'}}>Sáng tạo ( Creative )</p>
                                        <p>Chủ động và liên tục đổi mới để đáp ứng nhu cầu ngày càng đa dạng và sự phát triển của thị trường</p>
                                    </div>
                                </div >
                                <div className="about-5-item">
                                    <div><FontAwesomeIcon icon={faCircle}  style={{color:'green', margin:'0 20px'}}/></div>
                                    <div className="about-5-right">
                                        <p style={{margin:'0'}}>Nâng tầm ( Elevate )</p>
                                        <p>Không ngừng học hỏi và phát triển để nâng cao tiêu chuẩn và chất lượng của sản phẩm, dịch vụ cho khách hàng</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-6">
                        <div className="about-6-content">
                            <div className="about-6-left">
                                <h1>Đội ngũ sáng lập</h1>
                                <p>Với hàng chục năm làm trong nghề, đội ngũ sáng lập công ty có  kinh nghiệm trong ngành và tận tâm đem đến những dịch vụ giải pháp đột phá và hiệu quả cho khách hàng.</p>
                            </div>
                            <div className="about-6-right">
                                <div className="about-item-1">
                                    <img src={img7}/>
                                </div>
                                <div className="about-item-2">
                                    <img src={img9}/>
                                </div>
                                <div className="about-item-3">
                                    <img src={img8}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;