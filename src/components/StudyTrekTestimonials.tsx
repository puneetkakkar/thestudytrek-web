import styles from '@/styles/Home.module.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import conversationIcon from 'public/Images/conversation-icon.png';
import studentFirstDisplayImage from 'public/Images/student-1-image-resized.png';
import studentSecondDisplayImage from 'public/Images/student-2-image-resized.png';
import studentThirdDisplayImage from 'public/Images/student-3-image-resized.png';

const StudyTrekTestimonials = () => {
  return (
    <Grid padding="5rem 0rem" bgcolor={'#EFEFEF'} width="100%">
      <Container>
        <Typography
          variant="h3"
          fontWeight="500"
          className={styles.rubik}
          textAlign="center"
          marginBottom="3.5rem"
          fontSize="2.5rem"
        >
          Check What Our Students & Delegates Say
        </Typography>
        <Grid container spacing={8}>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding="1rem 0.5rem"
              bgcolor="#fff"
              borderRadius="1.2rem"
              boxShadow="0 12px 12px 0 rgb(0 0 0 / 5%)"
              position="relative"
              height="100%"
            >
              <Image src={studentFirstDisplayImage} alt="" className={styles.studentDisplayImage} />
              <Box paddingLeft="3rem" textAlign="right" width="100%">
                <Typography
                  variant="subtitle1"
                  className={styles.rubik}
                  fontWeight="500"
                  textAlign="center"
                >
                  Arusha Kelkar
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={styles.rubik}
                  fontWeight="400"
                  textAlign="center"
                >
                  Columbia University, USA
                </Typography>
              </Box>
              <Box width="100%" padding="0.5rem 1rem">
                <Image src={conversationIcon} alt="" className={styles.conversationIconStyle} />
              </Box>
              <Box padding="0rem 1rem" marginBottom="2rem">
                <Typography variant="subtitle1" className={styles.rubik} fontWeight="500">
                  Helped with counselling and making the right decision. Great Staff. Would
                  recommend The Study Trek to everyone planning to go abroad for higher studies.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding="1rem 0.5rem"
              bgcolor="#fff"
              borderRadius="1.2rem"
              boxShadow="0 12px 12px 0 rgb(0 0 0 / 5%)"
              position="relative"
              height="100%"
            >
              <Image
                src={studentSecondDisplayImage}
                alt=""
                className={styles.studentDisplayImage}
              />
              <Box paddingLeft="3rem" textAlign="right" width="100%">
                <Typography
                  variant="subtitle1"
                  className={styles.rubik}
                  fontWeight="500"
                  textAlign="center"
                >
                  Susan Mendonca
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={styles.rubik}
                  fontWeight="400"
                  textAlign="center"
                >
                  Conestoga College, Canada
                </Typography>
              </Box>
              <Box width="100%" padding="0.5rem 1rem">
                <Image src={conversationIcon} alt="" className={styles.conversationIconStyle} />
              </Box>
              <Box padding="0rem 1rem" marginBottom="2rem">
                <Typography variant="subtitle1" className={styles.rubik} fontWeight="500">
                  The Study Trek’s Education Fairs and Pre-Departure briefings are greatly
                  informative. The staff is quite well trained. I could apply to universities & get
                  my visa only because of them.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding="1rem 0.5rem"
              bgcolor="#fff"
              borderRadius="1.2rem"
              boxShadow="0 12px 12px 0 rgb(0 0 0 / 5%)"
              position="relative"
              height="100%"
            >
              <Image src={studentThirdDisplayImage} alt="" className={styles.studentDisplayImage} />
              <Box paddingLeft="3rem" textAlign="right" width="100%">
                <Typography
                  variant="subtitle1"
                  className={styles.rubik}
                  fontWeight="500"
                  textAlign="center"
                >
                  Needa Pathan
                </Typography>
                <Typography
                  variant="subtitle2"
                  className={styles.rubik}
                  fontWeight="400"
                  textAlign="center"
                >
                  University of Glasgow, UK
                </Typography>
              </Box>
              <Box width="100%" padding="0.5rem 1rem">
                <Image src={conversationIcon} alt="" className={styles.conversationIconStyle} />
              </Box>
              <Box padding="0rem 1rem" marginBottom="2rem">
                <Typography variant="subtitle1" className={styles.rubik} fontWeight="500">
                  I got complete support for shortlisting universities, majors and writing SOPs. I
                  would recommend every student applying for the US to approach The Study Trek.{' '}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default StudyTrekTestimonials;
