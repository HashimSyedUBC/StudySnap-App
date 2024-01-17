import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { colors, fonts } from '../../../styles/theme';
import {useDropzone} from 'react-dropzone'
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { faChevronRight, faRotateBack, faFileCirclePlus,faFilePdf, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ErrorBanner from '../ErrorBanner';
import Spinner from '../Spinner/Spinner';
import Placeholder from '../Placeholder/placeholder';
import { useRouter } from 'next/router';


interface CircleProps {
    isActive: boolean;
}



const Container = styled.div`
  margin: 128px 64px;
  display: flex;
  margin:  0 auto;
  flex-direction: column;
  gap: 64px;
  max-width: 1440px;
  @media (max-width: 1920px) {
    max-width: 1080px;
  }
  padding-bottom: 128px;
  border-bottom: 1px ${colors.borderGray} solid ;
`;
const ContainerLoad = styled.div`
  margin: 0 auto;
  display: flex;
  padding-top: 128px;
  gap: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  @media (max-width: 1920px) {
    max-width: 1080px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;



const Circle = styled.div<CircleProps>`
  width: 52px;  // Circle size
  height: 52px; // Circle size
  border-radius: 50%; // Makes the div circular
  background-color: ${props => (props.isActive ? colors.mainColor : 'white' )};
  color: black; // Text color: ;
  ${fonts.H500}
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px; // Adjust as needed
  font-weight: bold; // Adjust as needed
  border: 1px solid black;
`;

const CheckPoint = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  ${fonts.H400}
  align-items: center;
`; 



const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 128px;
  gap: 425px;

  @media (max-width: 1920px) {
  gap: 201px;

  }
  
`;

const CourseDetails = styled.div`
  display: grid;
  padding: 48px; // Padding all around
  grid-template-columns: repeat(3, 1fr); // Three columns
  grid-template-rows: repeat(2, auto); // Two rows, height determined by content
  grid-gap: 48px 113px; // Vertical gap of 48px and horizontal gap of 113px
  border: 1px solid #000; // 1px border around the container
  box-sizing: border-box; // Include padding and border in the width and height
  
`;

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px; // This creates the vertical gap between flex items
`;


const DottedBorderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px; // Vertical gap between flex items
  padding: 64px; // Padding all around
  border: 1px dashed black; // Dotted border
  &:hover {
    background-color: ${colors.grey};
  }
`;

const IconStyled = styled(FontAwesomeIcon)`
  font-size: 100px;
`

interface TextProps {
  bold?: boolean;
}

const StyledText = styled.span<TextProps>`
  ${({ bold }) => (bold ? fonts.Bolded28 : fonts.H300)};
`;

const StyledButton = styled.button`
  background: none;
  padding: 4px 8px;
  ${fonts.H300}
  text-decoration: underline;
  transition: background-color 0.3s ease, color 0.3s ease; // Smooth transition for hover effects
  cursor: pointer;

  &:hover {
    background-color: ${colors.buttonHover}; // Subtle hover effect, assuming colors.buttonHover is defined
  }
`;

const FileDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FileContainer = styled.div`
  height: 90px;
  border: 1px solid black;
  justify-content: space-between;
  padding: 16px 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NumberInput = styled.input`
  width: 60px; // You can adjust this width as needed
  height: 32px; // Adjust height as needed
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  ${fonts.H400}
`;

const OrderContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
`

const RightFile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  align-items: center;
  ${fonts.H300}
`;

const IconStyledFile = styled(FontAwesomeIcon)`
  font-size: 48px;
`

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    // Add hover effects here, e.g., change color, add background, etc.
    color: ${colors.hoverBlack}
  }
`;

const Instruction = styled.span`
  ${fonts.Bolded24}
  margin-bottom: -24px;
`;








const Pipeline: React.FC = () => {
  const [step, setStep] = useState(1); 
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
  const [filesArray, setFilesArray] = useState<any>([])
  const [formFields, setFormFields] = useState({
      courseName: '',
      courseCode: '',
      institution: '',
      courseArea: '',
      courseDate: '',
      courseLevel: '',
  });
  const nav = useRouter();

  const goToHomePage = () => {
    nav.push('/');
  };

    const handleInputChange = (e:any, name:any) => {
      const { value } = e.target;
      setFormFields(prevFields => ({
      ...prevFields,
      [name]: value,
      }));
    };

  const handleDelete = (fileToDelete:any) => {
    setFilesArray(filesArray.filter((file:any) => file !== fileToDelete));
  };

  const isValid = (str: any) => str !== '';


  const HandleNextGen = () => {
    if (step < 3) {
      if (step === 1) {
        if (!isValid(formFields.courseName) || !isValid(formFields.courseCode)) {
          setError(true)
          setErrorMessage('Course Name and Course Code cannot be empty!')
          setTimeout(() => setError(false), 5000);
          return
        } 
      }
      if (step === 2) {
        if (filesArray.length === 0) {
          setError(true)
          setErrorMessage('A minimum of 1 file is required!')
          setTimeout(() => setError(false), 3000);
          return
        } 
      }
      setStep(step + 1);
      setError(false)
      //write code to generate notes
    } else {
      setStep(0);
      //uploadContent();
      setTimeout(() => goToHomePage(), 2000); //todo: temp until upload done
    }
  };

  const HandleBack = () => {
    if (step != 1 ) {
      setStep(step - 1);
      //write code to generate notes
    }
  };

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };
  
  const onDrop = (acceptedFiles:any) => {
    let newArray = [...filesArray];
    acceptedFiles.forEach((file:any) => {
      if (file.name.endsWith('.pdf')) {
        const order = newArray.length + 1;
        const id = generateUniqueId(); // Unique ID
        newArray.push({ file, order, id });
      } else {
        setError(true);
        setErrorMessage('Please make sure all files are PDFs!')
        setTimeout(() => setError(false), 3000);
      }
    });
    setFilesArray(newArray);
  };

  const changeFile = (event: any, fileId: any) => {
    let newValue = parseInt(event.target.value, 10);
  
    // Ensure the value is not negative, not above 100, and does not start with 0
    if (newValue < 0 || newValue >= 100 || /^0/.test(event.target.value)) {
      return
    }
  
    const updatedArray = filesArray.map((file: any) => {
      if (file.id === fileId) {
        return { ...file, order: newValue };
      }
      return file;
    });
    setFilesArray(updatedArray);
  };

  
 

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: onDrop,
  });

  

    return (
      <>
        {step !== 0 && <Container>
          <ErrorBanner isOpen={error} message={errorMessage}/>

          <CheckContainer>
            <CheckPoint>
            <Circle isActive={step == 1}>1</Circle>
            Course Details
            </CheckPoint>
            <CheckPoint>
            <Circle isActive={step == 2} >2</Circle>
            Upload Content
            </CheckPoint>
            <CheckPoint>
            <Circle isActive={step == 3}>3</Circle>
            Organize Notes
            </CheckPoint>
          </CheckContainer>
          {step == 1 &&
          <>
          <Instruction>
          Please enter your course details.
          </Instruction>
          <CourseDetails>
            <TextInput placeholder='Linear Algebra...' label='Course Name' required value={formFields.courseName} onChange={(e:any) => handleInputChange(e, 'courseName')} />
            <TextInput placeholder='MATH221' label='Course Code' required value={formFields.courseCode} onChange={(e:any) => handleInputChange(e, 'courseCode')} />
            <TextInput placeholder='05/2021' label='Start Date' value={formFields.courseDate} onChange={(e:any) => handleInputChange(e, 'courseDate')} />
            <TextInput label='Institution Month' value={formFields.institution} onChange={(e:any) => handleInputChange(e, 'institution')} />
            <TextInput label='Course Area'  value={formFields.courseArea} onChange={(e:any) => handleInputChange(e, 'courseArea')} />
            <TextInput label='Course Level'  value={formFields.courseLevel}onChange={(e:any) => handleInputChange(e, 'courseLevel')} />
          </CourseDetails>
          </>
          }
          {step == 2 &&
          <>
          <Instruction>
          Please provide only the contents of the lecture, preferably in the form of lecture slides or chapters.
          </Instruction>
          <UploadContainer>
            <DottedBorderContainer {...getRootProps()}>
              <input {...getInputProps()} />
              <IconStyled icon={faFileCirclePlus} />
              <StyledText>
                Drop Your PDFs Here 
              </StyledText>
              <StyledText bold>
                Or
              </StyledText>
              <StyledButton as="label" htmlFor="file-upload">
                Browse
              </StyledButton>
              <StyledText>
              You are welcome to upload multiple files. Please ensure that all files are in PDF format.
              </StyledText>
            </DottedBorderContainer>
          </UploadContainer>
          {filesArray.length != 0 && <FileDisplayContainer>
            {filesArray.map((file:any, index:number) => (
              <FileContainer>
                <RightFile>
                  <IconStyledFile icon={faFilePdf}/>
                  {file.file.name}
                </RightFile>
                <IconButton onClick={() => handleDelete(file)}>
                <IconStyledFile icon={faTrash} />
                </IconButton>
              </FileContainer>
            ))}
          </FileDisplayContainer>}
          </>
          }
          {step == 3 &&
          <>
          <Instruction>
          Carefully organize the files in the right order.
          </Instruction>
          {filesArray.length != 0 && <FileDisplayContainer>
            {filesArray.map((file:any, index:number) => (
              <FileContainer>
                <RightFile>
                  <IconStyledFile icon={faFilePdf}/>
                  {file.file.name}
                </RightFile>
                <OrderContainer>
                  <NumberInput type="number" value={file.order} onChange={(e) => changeFile(e, file.id)}/>
                </OrderContainer>
                
              </FileContainer>
            ))}
          </FileDisplayContainer>}
          </>
          }
          
          <ButtonContainer>
          <Button isSubmit text="Back" icon={faRotateBack} onClick={HandleBack} width="120px"/>

            <Button isSubmit text={step == 3 ? "Generate Notes" : "Next"} icon={faChevronRight} onClick={HandleNextGen} width={step == 3 ? "220px" : "135px"}/>
          </ButtonContainer>
      </Container>}
      {step === 0 && <ContainerLoad>
        <Placeholder/>
      <Spinner />

      </ContainerLoad>
      }
      </>

    );
  };
  
export default Pipeline;



