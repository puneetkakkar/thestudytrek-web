import styles from '@/styles/Home.module.css';
import { theme } from '@/theme';
import { Box, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import checkImage from 'public/Images/check.svg';
import studentBannerImage from 'public/Images/student-banner-image.svg';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Study Trek</title>
        <meta name="description" content="The Study Trek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Grid className={styles.bannerWrapper}>
          <Container className={styles.container}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              width="fit-content"
              paddingBottom="2rem"
            >
              <Typography
                variant="h3"
                className={[styles.logo, styles.rubik].join(' ')}
                fontWeight="500"
              >
                The Study Trek
              </Typography>
              <Typography variant="h6" className={styles.rubik}>
                Overseas Education Consultant
              </Typography>
            </Box>
            <Grid display="flex" direction="row" justifyContent="space-between">
              <Box paddingRight="0rem 1rem">
                <Typography
                  className={styles.rubik}
                  fontSize="2rem"
                  fontWeight="500"
                  letterSpacing="0rem"
                  marginBottom="0.2rem"
                >
                  Let your study abroad dreams take flight!
                </Typography>

                <Typography
                  className={styles.rubik}
                  fontSize="1.4rem"
                  marginBottom="1.2rem"
                  color={theme.palette.secondary.light}
                >
                  Start your journey today with a free online counseling from Study Trek’s expert
                  team
                </Typography>
                <Box display="flex" flexDirection="row" alignItems="center" marginBottom="1.2rem">
                  <Image src={checkImage} alt="" className={styles.checkImage} />
                  <Typography className={styles.rubik} fontSize="1.4rem" fontWeight="500">
                    University Selection
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" marginBottom="1.2rem">
                  <Image src={checkImage} alt="" className={styles.checkImage} />
                  <Typography className={styles.rubik} fontSize="1.4rem" fontWeight="500">
                    Scholarship Assistance
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" marginBottom="1.2rem">
                  <Image src={checkImage} alt="" className={styles.checkImage} />
                  <Typography className={styles.rubik} fontSize="1.4rem" fontWeight="500">
                    Study Abroad Loan
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Image src={studentBannerImage} alt="" className={styles.studentBannerImage} />
              </Box>
            </Grid>
          </Container>
          <div style={{ overflow: 'hidden', display: 'flex' }}>
            <svg
              preserveAspectRatio="none"
              viewBox="0 0 1200 120"
              xmlns="http://www.w3.org/2000/svg"
              style={{ fill: '#ffffff', width: '109%', height: 115, transform: 'rotate(180deg)' }}
            >
              <path
                d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
                opacity=".25"
              />
              <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                opacity=".5"
              />
              <path
                className={[styles.wave, styles.waveTop].join('')}
                d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"
              />
            </svg>
          </div>
        </Grid>
      </main>
    </>
  );
}
