import { styled } from 'styled-components';
import { GiFallingStar } from 'react-icons/gi';

export const Container = styled.div`
  margin-top: 200px;
  height: 178px;
  background: ${(props) => props.theme.colors.secundary};

  .footer-content {
    max-width: 1136px;
    margin: 0 auto;

    .footer-logo {
      padding-top: 45px;
      padding-bottom: 20px;
      display: flex;
      justify-content: center;
      color: #fff;
      font-size: 28px;
      gap: 5px;
    }

    .footer-content {
      display: flex;
      justify-content: center;
      color: #00a9e5;
      gap: 15px;
      font-size: 14px;

      p {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;

export function Footer() {
  return (
    <Container>
      <div className="footer-content">
        <h1 className="footer-logo">
          <GiFallingStar /> Ztaar +
        </h1>
        <div className="footer-content">
          <span>terms and privacy</span>
          <span>Send us feedback</span>
          <span>help</span>
          <p>1996-2023, movies.com,inc. or its affiliaties</p>
        </div>
      </div>
    </Container>
  );
}
