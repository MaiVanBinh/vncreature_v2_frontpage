import { styled } from "styled-components";

export const Title1 = styled('h1')`
  font-size: 34px;
  font-weight: 700;
  line-height: 38px;
`

export const Title2 = styled('h2')`
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
`

export const Title3 = styled('p')`
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
`


export const BodyText1 = styled('p')`
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
`

export const ContainerBase = styled('div')`
  padding: 30px 0 0;
`

export const Caption = styled('p')<any>`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.1px;
  margin-bottom: 0;
`

export const BaseComponent = styled('div')`
  margin-top: 10px;
  padding: 10px;
  background: ${(props) => props.theme?.colors?.white};
`

export const LightText = styled('p')`
  color: ${(props) => props.theme?.colors?.darkLight};
  font-size: 17px;
  font-weight: 400;
  line-height: 20px;
  font-style: italic;
`