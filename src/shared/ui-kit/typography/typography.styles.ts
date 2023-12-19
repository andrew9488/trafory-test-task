import { styled } from "styled-components";

export const RegularText = styled.p`
  font-size: 14px;
  margin: 0;
  color: #252525;

  @media (max-width: 769px) {
    font-size: 12px;
  }
  @media (max-width: 481px) {
    font-size: 10px;
  }
`;

export const H3Text = styled(RegularText)`
    font-size: 16px;
    font-weight: bold;

    @media (max-width: 769px) {
        font-size: 14px;
    }
    @media (max-width: 481px) {
        font-size: 12px;
    }
`;

export const H1Text = styled(RegularText)`
    font-size: 26px;
    font-weight: bold;

    @media (max-width: 769px) {
        font-size: 20px;
    }
    @media (max-width: 481px) {
        font-size: 15px;
    }
`;
