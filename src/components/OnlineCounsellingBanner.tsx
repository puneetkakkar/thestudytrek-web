import styles from '@/styles/Home.module.css';
import theme from '@/theme';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import courseSelectionIcon from 'public/Images/course-selection-icon.png';
import scholarshipIcon from 'public/Images/scholarship-icon-1.png';
import studentBannerImage from 'public/Images/student-banner-image-1.jpeg';
import ivyUniversityIcon from 'public/Images/university-icon-1.png';
import universityIcon from 'public/Images/university-icon.png';

const OnlineCounsellingBanner = () => {
  return (
    <Grid container flexDirection="row" sx={{ padding: '16px 32px' }}>
      <Grid item display="flex" xs={12} md={6} lg={7}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start">
          <Typography
            fontWeight="400"
            marginBottom="8px"
            variant="h2"
            sx={{ fontSize: { sm: 50, md: 45, lg: 55 } }}
          >
            Study Abroad Guidance
          </Typography>

          <Typography
            variant="h5"
            className={styles.nanumMyeongjo}
            marginBottom="1.2rem"
            color={theme.palette.primary.contrastText}
            fontWeight="800"
            sx={{ fontSize: { sm: 20, md: 20, lg: 25 } }}
          >
            Plan your journey with our experts.
          </Typography>
          <Grid
            container
            alignItems="baseline"
            justifyContent="flex-start"
            width="100%"
            margin="1rem 0rem"
          >
            <Grid item xs={5}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="baseline"
                padding="1.2rem 0rem"
              >
                <Image
                  src={courseSelectionIcon}
                  alt=""
                  style={{
                    width: '20%',
                    height: '100%',
                    objectFit: 'contain',
                    margin: '0rem 1rem'
                  }}
                />
                <Typography
                  className={styles.nanumMyeongjo}
                  fontWeight="800"
                  sx={{ fontSize: { sm: 20, md: 20, lg: 22 } }}
                >
                  Course Selection
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                padding="1.2rem 0rem"
                borderRadius="1rem"
              >
                <Image
                  src={universityIcon}
                  alt=""
                  style={{
                    width: '20%',
                    height: '100%',
                    objectFit: 'contain',
                    margin: '0rem 1rem'
                  }}
                />
                <Typography
                  className={styles.nanumMyeongjo}
                  fontWeight="800"
                  sx={{ fontSize: { sm: 20, md: 20, lg: 22 } }}
                >
                  University Shortlisting
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="baseline"
                padding="1.2rem 0rem"
              >
                <Image
                  src={scholarshipIcon}
                  alt=""
                  style={{
                    width: '20%',
                    height: '100%',
                    objectFit: 'contain',
                    margin: '0rem 1rem'
                  }}
                />
                <Typography
                  className={styles.nanumMyeongjo}
                  fontWeight="800"
                  sx={{ fontSize: { sm: 20, md: 20, lg: 22 } }}
                >
                  Scholarship Application
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="baseline"
                padding="1.2rem 0rem"
              >
                <Image
                  src={ivyUniversityIcon}
                  alt=""
                  style={{
                    width: '20%',
                    height: '100%',
                    objectFit: 'contain',
                    margin: '0rem 1rem'
                  }}
                />
                <Typography
                  className={styles.nanumMyeongjo}
                  fontWeight="800"
                  sx={{ fontSize: { sm: 20, md: 20, lg: 22 } }}
                >
                  Ivy Addmision Assistance
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={12} display="flex" alignItems="flex-start" margin="3rem 0rem">
            <Button
              variant="contained"
              fullWidth={true}
              className={styles.nanumMyeongjo}
              sx={{
                background: '#fff',
                color: '#000',
                padding: { sm: '12px 18px', md: '12px 18px', lg: '14px 20px' },
                borderWidth: '1px',
                borderColor: 'hsla(0, 0%, 100%, 0.21)',
                borderRadius: '999px',
                transition: 'all 200ms ease',
                fontSize: { sm: 16, md: 18, lg: 20 },
                lineHeight: 1,
                boxShadow: 'none',
                textTransform: 'capitalize',

                '&:hover': {
                  background: '#fff',
                  color: '#d31027',
                  boxShadow: 'none'
                }
              }}
            >
              <WhatsAppIcon sx={{ margin: '0rem 1rem', color: '#00b100' }} fontSize="large" />
              Connect To Counsellor Now
            </Button>
          </Grid>
        </Box>
      </Grid>
      <Grid
        item
        xs={0}
        md={6}
        lg={5}
        sx={{ display: { xs: 'none', md: 'flex' }, padding: '0px 15px' }}
      >
        <Image
          alt="student"
          src={studentBannerImage}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </Grid>
    </Grid>
  );
};

export default OnlineCounsellingBanner;
