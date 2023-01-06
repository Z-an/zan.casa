import styled from 'styled-components';
import Image from 'next/image'
import ZanLogo from 'public/assets/zan.png';

const Page = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  background: transparent;
  max-width: 46rem;
  width: 100%;
  margin: auto;
  gap: 4rem;
  min-height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 3rem;
  padding: 0 3rem;
    top: 50%;
  @media screen and (max-width: 480px){
    gap: 3rem;
    padding: 0 2rem;
  }
`;

const NavigationContainer = styled.div`
  width: fit-content;
  height: fit-content;
  position: relative;
  padding: 6rem 0rem 0 3rem;
  @media screen and (max-width: 480px){
    padding: 2rem 0rem 0 2rem;
  }
`;

const LogoContainer = styled.div`
  height: 5rem;
  position: relative;
  width: 10rem;
  @media screen and (max-width: 480px){
    height: 4rem;
    width: 8rem;
  }
`;

const TextContainer = styled.div`
`;

const LinksSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: scroll;
  padding: 0 3rem 6rem;
  @media screen and (max-width: 480px){
    padding: 0 2rem 6rem;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  min-width: 10rem;
  gap: 0.375rem;
`;

const Subheading = styled.h3`
  font-size: 1.5rem;
  line-height: 133%;
  letter-spacing: 0em;
  font-family: "PPNeueMontreal-Regular";
`;

const Headline = styled.h1`
  font-size: 4rem;
  line-height: 100%;
  font-weight: 400;
  @media screen and (max-width: 480px){
    font-size: 4rem;
    text-indent: 1.3125rem;
  }
`;

const HeadlineAccent = styled.strong`
  font-family: "Snell";
  font-size: 1.4em;
  letter-spacing: -0.2em;
  font-weight: 500;
  margin-left: 1.125rem;
  @media screen and (max-width: 480px){
    margin-left: 0rem;
  }
`;

const HeadlineContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 480px){
    margin-top: 1rem;
  }
`

export default function Home() {
  return (
    <Page>
      <NavigationContainer>
        <LogoContainer>
          <Image src={ZanLogo} fill={true} alt={'Zan logo'} priority={true}/>
        </LogoContainer>
      </NavigationContainer>
      <ContentContainer>
      <TextContainer>
        <HeadlineContainer>
          <Headline><HeadlineAccent>Z</HeadlineAccent>an Thomson</Headline>
        </HeadlineContainer>
        <p>Surfing curiosity. Playing with design, code, and meticulously crafted software. This is a canvas for my work, experiments, thoughts.</p>
        <p>Currently, <strong>Product Lead at Liven.</strong> Building towards an independent practice. </p>
      </TextContainer>
      </ContentContainer>

      <LinksSection>
          <LinksContainer>
            <Subheading>Building</Subheading>
            <a>Nomnie</a>
          </LinksContainer>
          <LinksContainer>
            <Subheading>Exploring</Subheading>
            <a>Design Systems</a>
            <a>Brand Identity</a>
            <a>Type Design</a>
            <a>UI Engineering</a>
          </LinksContainer>
          <LinksContainer>
            <Subheading>Writing</Subheading>
            <a>Article 1</a>
          </LinksContainer>
        </LinksSection>
    </Page>
  )
}
