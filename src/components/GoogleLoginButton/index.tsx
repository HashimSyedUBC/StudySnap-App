import React, { useEffect, useState } from 'react';
import * as Styled from './styles';

interface CredentialResponse {
    credential: string;
}

// Create a component for the Google Sign-In button
export default function GoogleSignInButton() {
    const [response, setResponse] = useState<CredentialResponse | null>(null);

    // Function to handle the One Tap Sign-In response
    function handleCredentialResponse(response: CredentialResponse) {
        setResponse(response);
    }

    // Load the Google Sign-In library and initialize it when the component mounts
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://accounts.google.com/gsi/client";
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);

        script.onload = () => {
            (window as any).google.accounts.id.initialize({
                client_id: "537331338288-ertgkqa72kdmoh5ceonbcqioh5jnatst.apps.googleusercontent.com", // Replace with your actual Client ID
                callback: handleCredentialResponse
            });

            // Render the Google Sign-In button
            (window as any).google.accounts.id.renderButton(
                document.getElementById("googleSignInButton"),
                { theme: "outline", size: "large" }
            );
        };

        // Cleanup: Remove the script when the component unmounts
        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <Styled.GoogleLogin>
            <Styled.GoogleLoginDescript>
                Login / Sign up with your Google account
            </Styled.GoogleLoginDescript>
            <Styled.GoogleLoginButton id='googleSignInButton'>
                {response && (
                    <p>Encoded JWT ID token: {response.credential}</p>
                )}
            </Styled.GoogleLoginButton>
        </Styled.GoogleLogin>
    );
}