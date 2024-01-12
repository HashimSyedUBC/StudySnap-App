import styled from "styled-components"
import { colors, fonts } from "./theme";

export interface EditableInputProps {
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    // Add any other props you need here
  }
  
export const SettingsPage = styled.div`
    display : flex;
    flex-direction: column;
    padding: 64px;
    margin-bottom: 20px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 2px -2px gray;
    padding-bottom: 1rem;
`
export const WelcomeNote = styled.header`
    ${fonts.H700}
    font-weight: bold;
    text-shadow: 0px 1px 1px black;
`

export const AccountDetailsText = styled.p`
    ${fonts.H500}
    font-weight: bolder;
    line-height: 6rem;
`
export const FeildContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputLabel= styled.div`
    ${fonts.H200}
    font-weight: bolder;
    margin-bottom: 5px ;
`
export const EditableInput= styled.input`
    ${fonts.H200}
    border:solid;
    width: 40vw;
    border-width: 1px;
    padding: 5px;
`
export const Email = styled.input`
    ${fonts.H200}
    border:solid;
    width: 40vw;
    border-width: 1px;
    color: gray;
    padding: 5px;
`
export const InputSection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 3rem;
`
export const AddressSection = styled.div`

`
export const DeactivateAccountSection = styled.div`
    ${fonts.H200}
    margin-bottom: 3rem;
`