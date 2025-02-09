import React from 'react';
import { Box, Container, IconButton, Typography, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import styled from "styled-components";

const Footer = styled.footer`
  text-align: center;
  margin-top: 50px;
  font-size: 1rem;
  color: #888;
  padding: 20px;
`;
const SocialMedia = () => {
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#2e3144',
        color: 'white',
        bottom: 0,
        left: 0,
        padding: '10px 0',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          {/* <Typography variant="body1" sx={{ marginBottom: '10px' }}>
            © 2025 PETS WORLD GROOMING | All Rights Reserved
          </Typography> */}
          <Divider sx={{ marginBottom: '10px', backgroundColor: 'white' }} />

          <Box>
            <IconButton
              color="inherit"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              color="inherit"
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon />
            </IconButton>
          </Box>

          <Typography variant="body2" sx={{ marginTop: '10px' }}>
            Paws and Claws, Love without Flaws
          </Typography>
          <Footer>
      <p>&copy; 2025 Pets World Grooming. All rights reserved.</p>
    </Footer>
        </Box>
      </Container>
    </Box>
  );
};

export default SocialMedia;
