import { useState } from 'react';

interface AccountDetails {
    firstName: string;
    lastName: string;
    emailAddress: string;
    country: string;
    province: string;
}

const testData: AccountDetails = {
    firstName: "Syed",
    lastName: "Mujtaba",
    emailAddress: "syedmujtaba2014@gmail.com",
    country: "Canada",
    province: "Ontario",
};

export const useAccountDetails = () => {
    const [firstName, setFirstName] = useState<string>(testData.firstName);
    const [lastName, setLastName] = useState<string>(testData.lastName);
    const [country, setCountry] = useState<string>(testData.country);
    const [province, setProvince] = useState<string>(testData.province);
    const emailAddress = testData.emailAddress;

    const handleFirstNameChange = (newFirstName: string) => {
        setFirstName(newFirstName);
    };

    const handleLastNameChange = (newLastName: string) => {
        setLastName(newLastName);
    };

    const handleCountryChange = (newCountry: string) => {
        setCountry(newCountry);
    };

    const handleProvinceChange = (newProvince: string) => {
        setProvince(newProvince);
    };

    const handle = () => {
        console.log(firstName, lastName, province, country)
    }
    const deactivate = () => {
        console.log('Deactivate account')
    }
    return {
        firstName,
        handleFirstNameChange,
        lastName,
        handleLastNameChange,
        country,
        handleCountryChange,
        province,
       handleProvinceChange,
        emailAddress,
        handle,
        deactivate
    };
};
