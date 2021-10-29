import styled from "styled-components";
const About = () => {
    return (
        <AboutStyle>
            <h4>What is Coders Collective?</h4>
            <p>
                Coders collective is a social posting site where software engineers and others in tech related fields can submit their professional blogs to the app.
                This site allows visitors to gather to one place for access to writings from their favorite tech writers across the various platforms ideas and tutorials are
                published upon. Visitors can choose to leave a 'like' ( ❤ ) on the platform; however, any comments or critiques towards user blog content are meant to be
                published on their respective platforms. The field of computer science and in itself tech with regards to web/mobile applications is a field where everyone of all levels and experience can both learn and
                provide knowledge to other developers. This collective knowledge is what pushes us and our peers to new heights in skill and discover.
            </p>
            <h6>This is <em style={{ color: '#a9cec2' }}>CODERS COLLECTIVE.</em></h6>

        </AboutStyle>
    )
}
export default About;

const AboutStyle = styled.div`
text-align: center;
margin-left: 50px;
margin-right: 50px;
 h4 {
    color: #83a4a4;
    font-size: 52px;
    font-style: bold;
   
  };
  p {
      line-height: 100px;
      color:#a9cec2 ;
    font-size: 32px;
  };
  h6{
    color: #83a4a4;
    font-size: 42px;
    word-spacing: 10px;
  }`