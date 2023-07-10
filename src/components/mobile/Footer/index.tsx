import { styled } from "styled-components";

const FooterContainer = styled("div")`
  padding: 20px;
  background-color: #ebebeb;
  .container-footer {
    display: flex;
  }
  .footer-left {
    flex: 0 0 40%;
    align-items: center;
  }
  .footer-left h4 {
    margin: 0;
    padding: 10px 0;
    font-size: 20px;
    color: #777777;
  }
  .footer-left p,
  .footer-right p {
    margin: 0;
    font-size: 14pt;
    color: #777777;
  }
  .footer-right {
    position: relative;
    flex: 0 0 60%;
  }
  .footer-right p {
    padding-top: 20px;
  }
  .footer-right span {
    color: #005826;
  }
  @media (max-width: 992px) {
    .footer-left,
    .footer-right {
      flex: 0 0 100%;
    }
    .container-footer {
      flex-flow: column;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container container-footer">
        <div className="footer-left">
          <h4>Liên hệ</h4>
          <p>
            <i className="fas fa-phone"></i> 0967607690
          </p>
          <p>
            <i className="fas fa-envelope"></i> maivanbinh1321999@gmail.com
          </p>
        </div>
        <div className="footer-right">
          <p>
            Mọi chi tiết xin liên hệ Admin website{" "}
            <span>Sinh vật rừng Việt Nam</span>.<br></br>©Ghi rõ nguồn{" "}
            <span>Sinh vật rừng Việt Nam</span> khi bạn phát hành lại thông tin
            từ Website này.
          </p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
