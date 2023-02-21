import { rubik } from '@/pages/_app';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import admissionIcon from 'public/Images/admission-icon.png';
import documentsIcon from 'public/Images/documents-icon.png';
import forexIcon from 'public/Images/forex-icon.png';
import loanIcon from 'public/Images/loan-icon.png';
import onlineCounsellingIcon from 'public/Images/online-counselling.png';
import scholarshipIcon from 'public/Images/scholarship-icon.png';
import standardizedTestIcon from 'public/Images/standardized-test-icon.png';
import universityIcon from 'public/Images/university-icon.png';
import visaIcon from 'public/Images/visa-icon.png';

const StudyTrekServices = () => {
  return (
    <Grid padding="5rem 0rem">
      <Container>
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
            fontFamily: rubik.style.fontFamily
          }}
          textAlign="center"
          marginBottom="3.5rem"
          fontSize="2.5rem"
        >
          Why choose KC for Your Study Abroad Journey?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={onlineCounsellingIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Free Counselling - In person/Online
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={universityIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Country, Course & University Selection
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={standardizedTestIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Standardised Tests Preparation
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={admissionIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Application & Admission Assistance
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={loanIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Overseas Education Loan Assistance
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={visaIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Visa Processing
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={scholarshipIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Scholarship Assistance
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={documentsIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                SOP, LOR & Documentation
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center" padding="1rem 0.5rem">
              <Image src={forexIcon} alt="" width={60} height={60} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: rubik.style.fontFamily
                }}
                fontWeight="500"
                textAlign="center"
                marginTop="2rem"
              >
                Remittance, Forex & Accommodation
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default StudyTrekServices;
