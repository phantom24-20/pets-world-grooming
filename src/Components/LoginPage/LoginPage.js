import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginBox = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const ToggleButton = styled.button`
  padding: 5px 10px;
  background-color: ${(props) => (props.active ? '#007BFF' : '#ccc')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.active ? '#0056b3' : '#aaa')};
  }
`;

const LoginPage = () => {
  const [isMobileLogin, setIsMobileLogin] = useState(true); // Start with mobile login
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [otpRequested, setOtpRequested] = useState(false);
  const [otp, setOtp] = useState('');
  const [otpVerification, setOtpVerification] = useState('');
  const [isNotRobot, setIsNotRobot] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(''); // OTP state
  const [resendDisabled, setResendDisabled] = useState(false); // Resend OTP state

  // Function to generate a random 6-digit OTP
  const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  // Request OTP for Mobile Number
  const handleRequestOtp = () => {
    if (isNotRobot && termsAccepted) {
      const generatedOtp = generateOtp(); // Generate OTP
      setGeneratedOtp(generatedOtp);
      setOtpRequested(true);
      setResendDisabled(true); // Disable Resend OTP initially
      console.log(`OTP for mobile: ${generatedOtp}`); // Simulate sending OTP via SMS

      // Enable Resend OTP after 30 seconds
      setTimeout(() => {
        setResendDisabled(false); // Allow resend after 30 seconds
      }, 30000);
    } else {
      alert('Please confirm "I\'m not a robot" and "I have read all terms and conditions" to continue.');
    }
  };

  // Request OTP for Email
  const handleRequestEmailOtp = () => {
    if (isNotRobot && termsAccepted) {
      const generatedOtp = generateOtp(); // Generate OTP
      setGeneratedOtp(generatedOtp);
      setOtpRequested(true);
      setResendDisabled(true); // Disable Resend OTP initially
      console.log(`OTP for email: ${generatedOtp}`); // Simulate sending OTP via email

      // Enable Resend OTP after 30 seconds
      setTimeout(() => {
        setResendDisabled(false); // Allow resend after 30 seconds
      }, 30000);
    } else {
      alert('Please confirm "I\'m not a robot" and "I have read all terms and conditions" to continue.');
    }
  };

  // OTP Verification
  const handleOtpVerification = () => {
    if (otpVerification === generatedOtp) {
      alert('OTP verified successfully!');
      // Proceed to login
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const handleToggleLoginMethod = (method) => {
    setIsMobileLogin(method === 'mobile');
    setMobileNumber('');
    setEmail('');
    setOtpRequested(false);
    setOtp('');
    setOtpVerification('');
    setGeneratedOtp(''); // Reset OTP when toggling login methods
    setResendDisabled(false); // Reset Resend OTP state
  };

  const handleEmailLogin = () => {
    // Here you would normally handle email login logic, like sending a login request.
    console.log('Email login with:', email);
  };

  return (
    <Container>
      <LoginBox>
        <h2>Login to Pets World Grooming</h2>

        {/* Toggle between Mobile and Email Login */}
        <ToggleContainer>
          <ToggleButton active={isMobileLogin} onClick={() => handleToggleLoginMethod('mobile')}>
            Mobile Number
          </ToggleButton>
          <ToggleButton active={!isMobileLogin} onClick={() => handleToggleLoginMethod('email')}>
            Email
          </ToggleButton>
        </ToggleContainer>

        {/* Mobile Number or Email Input */}
        {isMobileLogin ? (
          <>
            <Input 
              type="text" 
              placeholder="Mobile Number" 
              value={mobileNumber} 
              onChange={(e) => setMobileNumber(e.target.value)} 
            />
            <Button onClick={handleRequestOtp}>
              {otpRequested ? 'OTP Requested' : 'Request OTP'}
            </Button>

            {otpRequested && (
              <>
                <Input 
                  type="text" 
                  placeholder="Enter OTP" 
                  value={otpVerification} 
                  onChange={(e) => setOtpVerification(e.target.value)} 
                />
                <div style={{display:"flex",justifyContent:"space-around"}}>
                <Button onClick={handleOtpVerification}>Verify OTP</Button>

<Button onClick={handleRequestOtp} disabled={resendDisabled}>
  Resend OTP
</Button>

                </div>
                
              </>
            )}
          </>
        ) : (
          <>
            <Input 
              type="email" 
              placeholder="Email Address" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
            <Button onClick={handleRequestEmailOtp}>
              {otpRequested ? 'OTP Requested' : 'Request OTP'}
            </Button>

            {otpRequested && (
              <>
                <Input 
                  type="text" 
                  placeholder="Enter OTP" 
                  value={otpVerification} 
                  onChange={(e) => setOtpVerification(e.target.value)} 
                />
                <div>
                <Button onClick={handleOtpVerification}>Verify OTP</Button>

<Button onClick={handleRequestEmailOtp} disabled={resendDisabled}>
  Resend OTP
</Button>
</div>                
              </>
            )}
          </>
        )}

        {/* Captcha and Terms & Conditions */}
        <CheckboxLabel>
          <Checkbox 
            type="checkbox" 
            checked={isNotRobot} 
            onChange={(e) => setIsNotRobot(e.target.checked)} 
          />
          I'm not a robot
        </CheckboxLabel>

        <CheckboxLabel>
          <Checkbox 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
          />
          I have read all terms and conditions
        </CheckboxLabel>
      </LoginBox>
    </Container>
  );
};

export default LoginPage;
