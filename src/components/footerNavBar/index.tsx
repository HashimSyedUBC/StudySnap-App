import * as Styled from './styles';

export const Footer = () => (
  <Styled.FooterWrapper>
    <Styled.InnerFooterWrapper>
      <Styled.FooterIconWrapper>
        <Styled.StyledButton>
          <Styled.IconWrapper>
            <Styled.IconStyled className="fa-regular fa-user" />
            Profile
          </Styled.IconWrapper>
        </Styled.StyledButton>
      </Styled.FooterIconWrapper>
      <Styled.FooterIconWrapper>
        <Styled.StyledButton>
          <Styled.IconWrapper>
            <Styled.IconStyled className="fa-solid fa-house" />
            Home
          </Styled.IconWrapper>
        </Styled.StyledButton>
        <Styled.StyledButton>
          <Styled.IconWrapper>
            <Styled.IconStyled className="fa-regular fa-rectangle-list" />
            Companies
          </Styled.IconWrapper>
        </Styled.StyledButton>
      </Styled.FooterIconWrapper>
    </Styled.InnerFooterWrapper>
  </Styled.FooterWrapper>
);
