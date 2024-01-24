import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import { useRouter } from 'next/router';
import Button from '../Button/Button';
import { faPen, faEye} from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/modal';
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  margin-top: 128px;
  margin-left: 64px;
  margin-right: 64px;
  display: flex;
  flex-direction: column;
  margin-left:  auto;
  margin-right: auto;
  max-width: 1080px;
  border-bottom: 1px solid black;
  border-radius: 0px;

  @media (min-width: 1920px) {
    max-width: 1440px;
  }
`;

const Title = styled.span`
  ${fonts.Bolded48}
  margin-bottom: 64px;
`;

const Layout = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 64px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  padding-right: 24px;
  background: white; // Adjust the color as needed
  border-radius: 0px;
  border-right: 1px solid #e0e0e0; // Adjust the color as needed
  min-width: 300px;
`;

interface ChapterProps {
    isActive: boolean;
  }
  
const Chapter = styled.div<ChapterProps>`
  cursor: pointer;
  padding: 16px 10px;
  margin: 5px 0;
  &:hover {
    background-color: ${colors.shadowOrange}; // Adjust the hover color as needed
  }
  ${fonts.H500}
  max-width: 250px;
  background-color: ${props => props.isActive ? colors.buttonRegular : 'transparent'}; // Active chapter color: ;
  box-shadow: ${props => props.isActive ? `0px 4px 8px ${colors.shadowOrange}` : 'none'};
  transform: ${props => props.isActive ? 'scale(1.05)' : 'none'};
  transition: background-color 0.3s, box-shadow 0.3s, transform 0.3s;

`;

const Content = styled.div`
padding-left: 64px;
min-height: 100%;
`;

// Additional Styled Components
const MCQContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 32px;
  height: 100%;
`;

const Question = styled.div`
  ${fonts.H500}
  margin-bottom: 24px;
`;

type MCQProps = {
    isSelected: boolean
}

const ButtonContainer = styled.div`
    margin-top: 48px;
    width: 210px;
`;

// Additional Styled Components
const MCQOptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
`;

const Circle = styled.div<MCQProps>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid ${colors.borderGray};
  background-color: ${props => props.isSelected ? colors.buttonRegular : 'white'};
  margin-right: 12px;
  transition: background-color 0.3s;
  &:hover {
    background-color: ${colors.shadowOrange};
  }
`;

const OptionText = styled.span`
  ${fonts.H400}
`;

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const AnswerMessage = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  margin: 10px 0;
  ${fonts.H400}
`;

const CorrectAnswerMessage = styled(AnswerMessage)`
  color: ${colors.success};
  background-color: ${colors.successBackground};
`;

const WrongAnswerMessage = styled(AnswerMessage)`
  color: ${colors.error};
  background-color: ${colors.errorBackground};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
`;


const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;
const ButtonContainer2 = styled.div`
    width: 190px;
`;


const TransparentButton = styled.button`
  background-color: ${colors.mainColor};
  border-color: #000000; 
  color: black; /* Set text color */
  padding: 10px 20px; /* Adjust padding as needed */
  font-size: 16px; /* Set font size */
  border-radius: 10px;
  cursor: pointer;
  ${fonts.H200}
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: ${colors.shadowOrange}; /* Set background color on hover */
    color: #000000; /* Set text color on hover */
  }
`;


    

const Tests: React.FC = () => {
    const router = useRouter()
    const courseCode = router.query.courseCode as string;
    const courseName = router.query.courseName as string;
    const sectionNumber = parseInt(router.query.chapterIndex as string, 10); //use these to query from backend the course section tests
    const [activeIndex, setActiveIndex] = useState(0)
    const [modal, setModal] = useState(false)
    const [disableCheck, setDisableCheck] = useState(true)
    const [checkedAnswer, setCheckedAnswer] = useState(false)
//Assuming the object type pulled from backend
const mcqQuestions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "London", "Paris", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars",
    },
    {
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
      answer: "Mitochondria",
    },
    {
      question: "Who developed the theory of relativity?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      answer: "Albert Einstein",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "N2"],
      answer: "H2O",
    },
    {
      question: "Which programming language is known as the 'language of the web'?",
      options: ["Java", "Python", "JavaScript", "C++"],
      answer: "JavaScript",
    },
  ];
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionClick = (option:any) => {
        setDisableCheck(false)
        setSelectedOption(option);
    };


    const handleChapterClick = (ac: number) => {
        setDisableCheck(true);
        if (ac < mcqQuestions.length) {
             setActiveIndex(ac);
        } else {
            setActiveIndex(0)
        }
      };


      
   

  
    return (
        <Container>
            <FlexContainer>
            <Title>{courseCode} - Chapter {sectionNumber + 1} Quiz</Title>

                <ButtonContainer2 >
                <Button text='Back' onClick={() => router.back()} width='100%' icon={faRotateLeft}/>
                </ButtonContainer2>
             </FlexContainer>
        <Layout>
          <Sidebar>
            {mcqQuestions.map((q, index) => (
              <Chapter
                key={index}
                isActive={activeIndex === index}
                onClick={() => handleChapterClick(index)}
              >
                Q{index}
              </Chapter>
            ))}
          </Sidebar>
          <Content>
        <MCQContainer>
          <Question>{mcqQuestions[activeIndex].question}</Question>
          <OptionsContainer>
          {mcqQuestions[activeIndex].options.map((option, index) => (
            <MCQOptionContainer key={index} onClick={() => handleOptionClick(option)}>
              <Circle isSelected={selectedOption === option} />
              <OptionText>{option}</OptionText>
            </MCQOptionContainer>
          ))}
          </OptionsContainer>
          <ButtonContainer>
          <Button disabled={disableCheck} width='100%' text="Check Answer" onClick={() => setModal(true)} icon={faEye} isSubmit/>
          </ButtonContainer>
          {modal &&
          <Modal onConfirm={() => {if (selectedOption === mcqQuestions[activeIndex].answer) {
            handleChapterClick(activeIndex + 1)
          } setModal(false); setCheckedAnswer(false) }} confirmText='Got it' title='Check Answer' oneButton>
          {
              selectedOption === mcqQuestions[activeIndex].answer
              ? <CorrectAnswerMessage>Great Job! You Answered Correctly!</CorrectAnswerMessage>
              : <>
              <WrongAnswerMessage>
                <Wrapper>
                  Sorry, that's not right.
                  <TransparentButton onClick={() => setCheckedAnswer(true)}>
                    View Answer
                  </TransparentButton>
                </Wrapper>
                  {checkedAnswer && (
                      <>
                          The correct answer is {mcqQuestions[activeIndex].answer}.
                      </>
                  )}
              </WrongAnswerMessage>
          </>
          }
        </Modal>
          }
          
        </MCQContainer>
      </Content>
        </Layout>
      </Container>
    );
  };

export default Tests;
