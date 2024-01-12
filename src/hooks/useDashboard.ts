import { useState, useEffect } from 'react';
import { colors } from '../../styles/theme';
import { STAGE_NAMES } from '../utils/enums';
import { calculateResult } from '../utils/appliedChecker';
import { CompanyName } from '../../styles/loginStyles';

type Email = {
    date: string;
    name: string;
    sender: string;
    message: string;
    stage: string;
}

const testPotentialEmails = [
  {
    date: '2023-01-14',
    name: 'unknown',
    sender: 'noreply@roblox-recruitement.com',
    message: 'Thank you for applying to roblox.',
    stage: 'Applied',
  },
  {
    date: '2023-01-14',
    name: 'unknown',
    sender: 'noreply@company1.com',
    message: 'Thank you for applying to our company. Your application is under review.',
    stage: 'Applied',
  },
  {
    date: '2023-01-15',
    name: 'unknown',
    sender: 'info@company2.com',
    message: 'Congratulations! You have been selected for an interview. Please schedule your interview slot.',
    stage: 'Interview',
  },
  {
    date: '2023-01-16',
    name: 'unknown',
    sender: 'contact@company3.com',
    message: 'We are pleased to inform you that you have successfully passed the initial assessment. Next steps will be shared soon.',
    stage: 'Online Assessment',
  },
  {
    date: '2023-01-17',
    name: 'unknown',
    sender: 'support@company4.com',
    message: 'Your benefits update for this year is available. Please review the provided information.',
    stage: 'none',
  },
  {
    date: '2023-01-14',
    name: 'unknown',
    sender: 'noreply@roblox-recruitement.com',
    message: 'Thank you for applying to roblox.',
    stage: 'Applied',
  },
  {
    date: '2023-01-14',
    name: 'unknown',
    sender: 'noreply@company1.com',
    message: 'Thank you for applying to our company. Your application is under review.',
    stage: 'Applied',
  },
  {
    date: '2023-01-15',
    name: 'unknown',
    sender: 'info@company2.com',
    message: 'Congratulations! You have been selected for an interview. Please schedule your interview slot.',
    stage: 'Interview',
  },
  {
    date: '2023-01-16',
    name: 'unknown',
    sender: 'contact@company3.com',
    message: 'We are pleased to inform you that you have successfully passed the initial assessment. Next steps will be shared soon.',
    stage: 'Online Assessment',
  },
  {
    date: '2023-01-17',
    name: 'unknown',
    sender: 'support@company4.com',
    message: 'Your benefits update for this year is available. Please review the provided information.',
    stage: 'none',
  },
];

const testData = {
  applied: 100,
  onlineA: 35,
  interview: 42,
  rejected: 20,
  offer: 3,
};

const userInfoTest = {
  target: 200,
  signupDate: "2023-01-14"
}

type PercentagesType = {
    applied: number,
    onlineA: number,
    interview: number,
    rejected: number,
    offer: number,
}



export const useDashboard = () => {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [percentages, setPercentages] = useState<PercentagesType>({
    applied: 0,
    onlineA: 0,
    interview: 0,
    rejected: 0,
    offer: 0,
  });
  const [userInfo, setUserInfo] = useState<any>()
  const [stageValue, setStageValues] = useState<PercentagesType>()
  const [target, setTarget] = useState(200);
  const [caseToDo, setCaseTodo] = useState(0);
  const [data, setData] = useState<any>([]);
  const [tableHeader, setTableHeader] = useState(false);
  const [selectedApplications, setSelectedApplications] = useState<any> ([]);
  const [deleteModal, setDeleteModal] = useState(false);
  const [currentEmailIndex, setCurrentEmail] = useState<any>(0)
  const [currentEmailStage, setCurrentEmailStage] = useState<string>('');
  const [currentEmailCompanyName, setEmailCompanyName] = useState<string>('');
  const [sortedCompanies, setSortedCompanies] = useState<any>([])
  const [modalError, setModalError] = useState('');
  const [sortModal, setSortModal] = useState(false);
  const [pageError, setPageError] = useState('');
  const [targetModal, setTargetModal] = useState(false);
  const [targetError, setTargetError]  = useState('');
  const [targetString, setTargetString] = useState('')

  const toggleTargetModal = (todo?: string) => {
    if (targetModal && todo === 'save') {
    const regex = /^[0-9]+$/;
  
    if (regex.test(targetString)) {
      const targetValue = parseInt(targetString, 10);
      setTarget(targetValue);
      //TODO hit the backend
    } else {
      setTargetError("Error: Input must be a non-negative number.");
    }
    }
    setTargetModal(!targetModal)
  }

  const handleChangeTarget = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setTargetString(inputValue);
  };



  const handleSortModal = () => {
    setSortModal(!sortModal);
  }


  const handleOpenSortModal = () => {
    if (selectedApplications.length  === 0) {
      setPageError('Please select some companies before sorting!')
      setTimeout(() => {
        setPageError('');
      }, 3000);
      return;
    }
    handleSortModal();
  }

  const ToggleDeleteModal = () => {
    console.log('ran')
    setDeleteModal(!deleteModal)
  }

  const DeleteSelectedApplication = async () => {
    console.log(selectedApplications); //TODO setup backend deletion
    setDeleteModal(!deleteModal)
  }

  const handleCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmailCompanyName(e.target.value);
  };

  const handleCompanyStage = ( e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentEmailStage(e.target.value);
  };

  const handleDelete = (index: number) => {
    console.log('delete ran') //TODO change the status of the company in bakcend
  };

  const handldeSaveSkip  = (save: boolean) => {
    if (currentEmailIndex < selectedApplications.length - 1) {
      console.log('reaches here')
      if (save) {
        if (currentEmailCompanyName !== '' && currentEmailStage !== '') {
          let currentCompany = selectedApplications[currentEmailIndex];
          currentCompany.Stage = currentEmailStage;
          currentCompany.Name = currentEmailCompanyName;
          let sortedCompaniesCopy = [...sortedCompanies]
          sortedCompaniesCopy.push(currentCompany);
          setSortedCompanies(sortedCompaniesCopy);
          handleDelete(currentEmailIndex)
        } else {
          setModalError('Please make sure none of the fields are empty!')
          setTimeout(() => {
            setModalError('')
          }, 3000);
          return;
        }
      }
      setCurrentEmail(currentEmailIndex + 1);
      setEmailCompanyName('');
      setCurrentEmailStage(selectedApplications[currentEmailIndex+1].Stage);
    }
  };

  const handleContinueLater = async () => {
    handleSortModal();
    console.log(sortedCompanies); //TODO connect backend with this
  }



  const handleToggleHeader = (value: boolean) => {
    const dataCopy = data.map((email: any) => {
      email.Checked = value;
      return email;
    })
    setTableHeader(value);
    setData(dataCopy);
  }

  const handleToggleIndividualData = (Id: any) => {
    const dataCopy = data.map((email: any) => {
      if (email.Id === Id) {
        email.Checked = !email.Checked;
      }
      return email;
    })
    setData(dataCopy)
  }

  const handleSetData = (Emails: Email[]) => {
    const dataVar = Emails.map((email: Email) => {
      const emailCopy = {
        Id: Math.random().toString(36).substring(2), 
        Name: email.name,
        Date: email.date,
        Sender: email.sender,
        Message: email.message,
        Stage: email.stage,
        Checked: false,
      }
      return emailCopy;
    })
    setData(dataVar);
    if (dataVar[0] !== undefined) {
      setCurrentEmailStage(dataVar[0].Stage)
    }
    return dataVar;
  }





  const updateScreenSize = () => {
    setScreenHeight(window.innerHeight);
  };
  useEffect(() => {
    // Update screen size on initial render
    updateScreenSize();

    // Update screen size on window resize
    window.addEventListener('resize', updateScreenSize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const circleSize = (screenHeight * screenHeight) / 2400;
  const circleStrokeWidth = (screenHeight * screenHeight) / 25000;

  const progressData: any[] = [
    {
      percent: 100,
      color: colors.broderGray,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.TARGET,
      value: target,
    },
    {
      percent: percentages.applied,
      color: colors.mainColor,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.APPLIED,
      value: stageValue?.applied || 0,
    },
    {
      percent: percentages.onlineA,
      color: colors.oaBlue,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.OA,
      value: stageValue?.onlineA || 0,
    },
    {
      percent: percentages.interview,
      color: colors.interviewPurple,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.INTERVIEW,
      value: stageValue?.interview || 0,
    },
    {
      percent: percentages.rejected,
      color: colors.rejectedRed,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.REJECTED,
      value: stageValue?.rejected || 0,
    },
    {
      percent: percentages.offer,
      color: colors.offerGreen,
      circumference: Math.PI * (circleSize - circleStrokeWidth),
      name: STAGE_NAMES.OFFER,
      value: stageValue?.offer || 0,
    },
  ];

  const sortedProgressData = progressData.slice().sort((a, b) => b.percent - a.percent);


  const setProgressData = () => {
    const copyPercentages = {...percentages}
    let Applied = 0;
    let OA = 0;
    let Interview = 0;
    let Rejected = 0;
    let Offer = 0;
    if (caseToDo === 3) {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*300
      OA = ((stageValue?.onlineA || 0)/target)*400
      Interview = ((stageValue?.interview || 0)/target)*400
      Rejected = ((stageValue?.rejected || 0)/target)*400
      Offer = ((stageValue?.offer || 0)/target)*650
    } else if (caseToDo === 2) {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*100
      OA = ((stageValue?.onlineA || 0)/target)*300
      Interview = ((stageValue?.interview || 0)/target)*300
      Rejected = ((stageValue?.rejected || 0)/target)*300
      Offer = ((stageValue?.offer || 0)/target)*600

    } else if (caseToDo === 1) {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*200
      OA = ((stageValue?.onlineA || 0)/target)*300
      Interview = ((stageValue?.interview || 0)/target)*300
      Rejected = ((stageValue?.rejected || 0)/target)*300
      Offer = ((stageValue?.offer || 0)/target)*300
    } else {
      Applied = (stageValue?.applied || 0) >= target ? 100 : ((stageValue?.applied || 0)/target)*100
      OA = ((stageValue?.onlineA || 0)/target)*100
      Interview = ((stageValue?.interview || 0)/target)*100
      Rejected = ((stageValue?.rejected || 0)/target)*100
      Offer = ((stageValue?.offer || 0)/target)*100
    }
    
    copyPercentages.applied = Applied;
    copyPercentages.onlineA = OA;
    copyPercentages.interview = Interview;
    copyPercentages.rejected = Rejected;
    copyPercentages.offer = Offer;
    setPercentages(copyPercentages);
  }

  useEffect(() => {
    handleSetData(testPotentialEmails)
    setTargetString(userInfoTest.target.toString())
  }, [])

  useEffect(() => {
    setStageValues(testData);
    setUserInfo(userInfoTest);
  }, [target]);

  useEffect(() => {
    let allChecked = true;
    let checked: any[] = [];
    data?.map((email: any) => {
      if (!email.Checked) {
        allChecked = false;
      } else {
        checked.push(email);
      }
    })
    setSelectedApplications(checked);
    setTableHeader(allChecked)
  }, [tableHeader, data])

  useEffect(() => {
    setCaseTodo(calculateResult(progressData));
  }, [stageValue]);

  useEffect(() => {
    setProgressData();
  }, [caseToDo]);

  return {
    sortedProgressData,
    circleSize,
    circleStrokeWidth,
    userInfo,
    tableHeader,
    data,
    handleToggleHeader,
    handleToggleIndividualData,
    selectedApplications,
    ToggleDeleteModal,
    deleteModal,
    DeleteSelectedApplication,
    currentEmailIndex,
    handleContinueLater,
    handldeSaveSkip,
    handleCompanyName,
    handleCompanyStage,
    modalError,
    sortModal,
    pageError,
    handleOpenSortModal,
    currentEmailStage,
    currentEmailCompanyName,
    targetString,
    targetError,
    targetModal,
    toggleTargetModal,
    handleChangeTarget,
  };
};
