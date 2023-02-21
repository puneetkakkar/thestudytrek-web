import { rubik } from '@/pages/_app';
import styles from '@/styles/Home.module.css';
import { Box, Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import australiaFlagIcon from 'public/Images/australia-flag-icon.svg';
import canadaFlagIcon from 'public/Images/canada-flag-icon.svg';
import europeFlagIcon from 'public/Images/europe-flag-icon.svg';
import irelandFlagIcon from 'public/Images/ireland-flag-icon.svg';
import newZealandFlagIcon from 'public/Images/new-zealand-flag-icon.svg';
import uaeFlagIcon from 'public/Images/uae-flag-icon.svg';
import ukFlagIcon from 'public/Images/uk-flag-icon.svg';
import usaFlagIcon from 'public/Images/usa-flag-icon.svg';

const MultiCountryAdvantage = () => {
  return (
    <Grid padding="5rem 5rem" bgcolor="#dbe8ff" flexWrap={'wrap'}>
      <Box>
        <Typography
          variant="h3"
          fontWeight="500"
          sx={{
            fontFamily: rubik.style.fontFamily
          }}
          textAlign="center"
          marginBottom="5rem"
          fontSize="2.5rem"
        >
          Study Trek&apos;s Multi Country Advantage
        </Typography>
        <Typography
          variant="h3"
          fontWeight="400"
          sx={{
            fontFamily: rubik.style.fontFamily
          }}
          textAlign="center"
          marginBottom="2.5rem"
          fontSize="2rem"
        >
          The World is your Campus!
        </Typography>
        <Typography
          variant="h3"
          fontWeight="400"
          sx={{
            fontFamily: rubik.style.fontFamily
          }}
          textAlign="center"
          marginBottom="5rem"
          fontSize="1.4rem"
        >
          Aspire for more. Choose what suits you the best from top countries to study for
          international students, world over. The choices and opportunities our universities offer
          is endless !
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Paper elevation={2} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={usaFlagIcon} alt="USA" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in USA
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={6} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={canadaFlagIcon} alt="Canada" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in Canada
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={6} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={ukFlagIcon} alt="United Kingdom" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in UK
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={6} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={australiaFlagIcon} alt="Australia" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in Australia
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={6} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={newZealandFlagIcon} alt="New Zealand" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in New Zealand
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={6} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={europeFlagIcon} alt="Europe" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in Europe
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={6} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={irelandFlagIcon} alt="Ireland" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in Ireland
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper elevation={6} className={styles.paperFlagContainer}>
              <Box display="flex" flexDirection="row" alignItems="center" padding="1rem 0.5rem">
                <Image src={uaeFlagIcon} alt="Asia" className={styles.flagImage} />
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontFamily: rubik.style.fontFamily
                  }}
                  fontWeight="600"
                >
                  Study in Asia
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default MultiCountryAdvantage;
