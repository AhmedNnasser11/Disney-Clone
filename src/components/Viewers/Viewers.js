import styled from "styled-components";

const Viewers = () => {
    return (
        <Container>
            <Wrap>
                <img src="/images/viewers-disney.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-pixar.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-marvel.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-starwars.png" alt=""/>
            </Wrap>
            <Wrap>
                <img src="/images/viewers-national.png" alt=""/>
            </Wrap>
        </Container>
    )
}

export default Viewers;

const Container = styled.div`
    margin-top: 30px;
    display: grid;
    padding: 30px 0px 26px;
    grid-gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
    border-radius: 1px;
    border: 3px solid rgba(249, 249,249, .1);
    transition: all 200ms ease-in-out;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &:hover{
        box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
        transform: scale(1.05);
        border-color: rgba(249, 249, 249, .8);
        transition: all 200ms ease-in-out;
    }
`;