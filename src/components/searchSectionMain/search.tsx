import React from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SelectComponent from '../Select/Select';
import { imageList } from '../../utils/imageLists';


const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 64px;
  background-color: ${colors.superLighBlue};
  width: 100%;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: center;
`;

const Title = styled.h1`
    text-align: center;
    ${fonts.Bolded48}
    max-width: 900px;
`;

// Description text
const Description = styled.p`
  ${fonts.H500}
  max-width: 1131px;
`;

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 8px;
  padding-right: 24px;
  width: 1440px;
  @media (max-width: 1920px) {
    padding-right: 20px;
    width: 1080px;
  }
  height: 64px;
  margin-top: 92px;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 12px;
  padding-left: 24px;
  ${fonts.H500}
  @media (max-width: 1920px) {
    padding-left: 16px;
    ${fonts.H400}
  }
`;

const SearchButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
    font-size: 32px;
  @media (max-width: 1920px) {
    font-size: 28px;
  }
`

const FlexContainer = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr); // 4 equal columns
  grid-template-rows: repeat(3, auto); // 3 rows, size determined by content
  gap: 132px; // Keeping the same gap as before
  width: 1440px;

  @media (max-width: 1920px) {
    max-width: 1080px;
    gap: 100px;
    margin-top: 48px;
  }
`;
const StyledImage = styled.img`
  width: 230px;
  height: 260px;
  object-fit: fit-content; // This ensures the image covers the area without distortion
  @media (max-width: 1920px) {
    width: 150px;
    height: 200px;
  }
`;

const ImageLabel = styled.span`
  margin-top: 8px; // Space between image and label
  text-align: center;
`;

const FlexColumnContainer = styled.button`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
  ${fonts.H500}
  background-color: white;
  border: 1px solid black;
  padding: 16px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    transform: translateY(-5px); // Slightly raise the button
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); // Add a shadow for depth
    border-color: #00A3FF; // Change border color: ;
  }
  width: 260px;
  height: 410px;
  @media (max-width: 1920px) {
    width: 195px;
    height: 310px;
    ${fonts.H400}
  }
`;



// React component
const NoteComponent: React.FC = () => {
  return (
    <MainContainer>
        <TextContainer>
            <Title>
             Look into institutions featuring classes with pre-arranged notes.
            </Title>
            <Description>
            We offer pre-prepared course summaries and exams for your convenience.
            </Description>
        </TextContainer>
        <FlexContainer>
            {
                imageList.universities.map((i: any, index: number) => {
                return<FlexColumnContainer onClick={() => console.log('click')}>
                 <StyledImage key={index} src={i.src} alt={`University ${index}`} />
                 <ImageLabel> {i.alt} </ImageLabel>
                 </FlexColumnContainer>
                      
                })
            }
        </FlexContainer>
    </MainContainer>

  );
};

export default NoteComponent;