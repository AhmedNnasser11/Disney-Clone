import styled from "styled-components";

const Login = () => {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>Get All There</SignUp>
                <Description>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non est veritatis odit ut consectetur aliquid cum soluta culpa nesciunt nam in ab, minima laudantium ducimus ratione tempore qui accusantium voluptatem.
                </Description>
                <CTALogoTow src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    &:before{
        position: absolute;
        background-image: url("/images/login-background.jpg");
        content: "";
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: .8;
        z-index: -1;
    }
`;

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 70%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    letter-spacing: 1.5px;
    text-transform: capitalize;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background: #0483ee;
        transition: all 200ms ease-in-out;
    }
`;
const Description = styled.article`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`;

const CTALogoTow = styled.img`
    width: 90%;

`;