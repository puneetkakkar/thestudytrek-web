import Footer from '@/components/Footer';
import MultiCountryAdvantage from '@/components/MultiCountryAdvantage';
import ScholarshipProspects from '@/components/ScholarshipProspects';
import StudyAbroadFAQ from '@/components/StudyAbroadFAQ';
import StudyTrekByNumbers from '@/components/StudyTrekByNumbers';
import StudyTrekServices from '@/components/StudyTrekServices';
import StudyTrekTestimonials from '@/components/StudyTrekTestimonials';
import WhyStudyTrek from '@/components/WhyStudyTrek';
import styles from '@/styles/Home.module.css';
import { theme } from '@/theme';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
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
                <Box display="flex" alignItems="flex-start" width="40%" margin="4rem 0rem">
                  <Button variant="contained" fullWidth={true} className={styles.primaryButton}>
                    Register Now
                  </Button>
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
              >
                <animate
                  attributeName="d"
                  dur="30s"
                  repeatCount="indefinite"
                  values="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z;
                  M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                ></animate>
              </path>
              <path
                d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
                opacity=".5"
              />
              <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
            </svg>
          </div>
        </Grid>
        <Box position="relative" width="100%" overflow="hidden" paddingBottom="3rem">
          <Box className={styles.sectionBlob}>
            <svg
              width="100%"
              height="100%"
              viewBox="-50 0 1073 1070"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#F4F4F5">
                <animate
                  attributeName="d"
                  dur="30s"
                  repeatCount="indefinite"
                  values="M55.9027 360.879C271.04 -75.5341 605.091 -96.3427 865.591 192.157C908.925 227.157 986.292 343.857 949.092 530.657C902.592 764.157 865.591 1029.16 366.591 945.657C155.404 910.318 -119.594 716.879 55.9027 360.879Z;
M196.688 218.278C501.188 -161.222 659.688 11.7777 920.188 300.278C963.521 335.278 1040.89 451.978 1003.69 638.778C957.188 872.278 920.188 1137.28 421.188 1053.78C-77.8122 970.278 -107.812 597.778 196.688 218.278Z;
M170.275 336.58C474.775 -42.9201 747.776 -109.921 1008.28 178.579C1051.61 213.579 1095.66 459.057 1058.46 645.857C1011.96 879.357 931.776 1034.58 475.964 1060.86C-29.1351 1089.97 -134.225 716.08 170.275 336.58Z;
M55.9027 360.879C271.04 -75.5341 605.091 -96.3427 865.591 192.157C908.925 227.157 986.292 343.857 949.092 530.657C902.592 764.157 865.591 1029.16 366.591 945.657C155.404 910.318 -119.594 716.879 55.9027 360.879Z"
                ></animate>
              </path>
            </svg>
          </Box>
          <WhyStudyTrek />
          <StudyTrekServices />
        </Box>
        <ScholarshipProspects />
        <Box position="relative" width="100%" overflow="hidden" marginBottom="3rem">
          <Box className={styles.sectionBlob}>
            <svg
              width="100%"
              viewBox="0 0 1287 1121"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#F4F4F5">
                <animate
                  attributeName="d"
                  dur="30s"
                  repeatCount="indefinite"
                  values="M417.861 42.5151C670.861 -104.985 819.632 154.775 1099.63 461.275C1311.63 653.618 1153.13 947.775 998.132 1054.28C843.132 1160.78 493.632 1152.28 143.132 840.775C-207.368 529.275 164.861 190.015 417.861 42.5151Z;
M227.771 48.7604C480.771 -98.7396 904.271 107.26 1184.27 413.76C1396.27 606.103 1237.77 900.26 1082.77 1006.76C927.771 1113.26 578.271 1104.76 227.771 793.26C-122.729 481.76 -25.2295 196.26 227.771 48.7604Z;
M486.374 80.6534C739.374 -66.8466 900.516 -19.8618 1180.52 286.638C1392.52 478.981 1221.64 985.913 1066.64 1092.41C911.644 1198.91 478.016 989.138 127.516 677.638C-222.984 366.138 233.374 228.153 486.374 80.6534Z;
M417.861 42.5151C670.861 -104.985 819.632 154.775 1099.63 461.275C1311.63 653.618 1153.13 947.775 998.132 1054.28C843.132 1160.78 493.632 1152.28 143.132 840.775C-207.368 529.275 164.861 190.015 417.861 42.5151Z"
                ></animate>
              </path>
            </svg>
          </Box>
          <StudyTrekTestimonials />
          <StudyTrekByNumbers />
        </Box>
        <MultiCountryAdvantage />
        <StudyAbroadFAQ />
        <Box position="relative" width="100%" overflow="hidden" paddingBottom="3rem">
          <Box className={styles.footerShape}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1577 4307"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="#f84f39">
                <animate
                  attributeName="d"
                  dur="30s"
                  repeatCount="indefinite"
                  values="M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z;
M0 300.446V2126H1577V504.101C1360.04 335.784 1108.8 171.677 918.5 72.2294C571.912 -108.886 269.554 81.8469 0 300.446Z;
M0 283.735V2056H1577V317.047C1369.34 129.452 1125.7 -19.1374 918.5 2.22934C525.4 42.7656 247.64 143.295 0 283.735Z;
M0 356.759V2126H1577V218.07C1514.33 161.85 1445.22 112.053 1369.5 72.4841C993.38 -124.064 412.605 117.161 0 356.759Z"
                ></animate>
              </path>
            </svg>
          </Box>
          <Footer />
        </Box>
      </main>
    </>
  );
}
