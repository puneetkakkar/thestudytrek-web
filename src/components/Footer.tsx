import { rubik } from '@/pages/_app';
import styles from '@/styles/Home.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Grid, IconButton, TextField, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Grid container width="100%" paddingBottom="1rem" paddingTop="15rem">
      <Box
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '750px',
          marginRight: 'auto',
          marginLeft: 'auto',
          paddingRight: '25px',
          paddingLeft: '25px',
          paddingBottom: '5rem'
        }}
      >
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
            fontFamily: rubik.style.fontFamily
          }}
          textAlign="center"
          marginBottom="2.5rem"
          fontSize="2.5rem"
          color="#fff"
        >
          We are transcending borders and expanding our global reach.
        </Typography>
        <Typography
          sx={{
            fontFamily: rubik.style.fontFamily
          }}
          textAlign="center"
          fontWeight="500"
          color="#fff"
        >
          Contact us through our office that is most convenient to you.
        </Typography>
        <Box position="relative">
          <TextField
            variant="standard"
            placeholder="Your email"
            InputProps={{
              disableUnderline: true,
              style: {
                background: '#fff',
                position: 'relative',
                zIndex: 0,
                height: '80px',
                marginBottom: '0px',
                paddingRight: '92px',
                paddingLeft: '32px',
                border: '1px none #000',
                borderRadius: '999px',
                fontSize: '2.5rem',
                lineHeight: 1,
                fontWeight: 600
              }
            }}
            sx={{
              display: 'flex',
              margin: '5rem 0rem',
              textAlign: 'center'
            }}
          />
          <IconButton id="contactUsSubmitBtn" className={styles.contactUsSubmitBtn} size="large">
            <ArrowForwardIcon className={styles.submitArrowIcon} fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
      <Grid container spacing={2} margin="0rem 5rem">
        <Grid item xs={2.5}>
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h5"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              textAlign="center"
            >
              The Study Trek
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              textAlign="center"
            >
              Overseas Education Consultant
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={3} display="flex" justifyContent="space-evenly" alignItems="center">
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              color="#ae3728"
            >
              Instagram
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              color="#ae3728"
            >
              Facebook
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              color="#ae3728"
            >
              Twitter
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} display="flex" justifyContent="space-evenly" alignItems="center">
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              color="#ae3728"
            >
              Copyright © The Study Trek 2022-2023
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              color="#ae3728"
            >
              Terms and Conditions
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              sx={{
                fontFamily: rubik.style.fontFamily
              }}
              fontWeight="600"
              color="#ae3728"
            >
              Privacy Policy
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
