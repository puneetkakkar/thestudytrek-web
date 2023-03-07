import styles from '@/styles/Home.module.css';
import theme from '@/theme';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import AssistantIcon from '@mui/icons-material/Assistant';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import SchoolIcon from '@mui/icons-material/School';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import studentBannerImage from 'public/Images/student-banner-image-1.jpeg';

const OnlineCounsellingBanner = () => {
  return (
    <Grid container flexDirection="row" sx={{ padding: '16px 32px' }}>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="flex-start"
      >
        {/* <Box display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start"> */}
        <Typography
          fontWeight="400"
          marginBottom="8px"
          variant="h2"
          sx={{ fontSize: { xs: 38, sm: 50, md: 45, lg: 55 } }}
        >
          Study Abroad Guidance
        </Typography>

        <Typography
          variant="h5"
          className={styles.nanumMyeongjo}
          marginBottom="1.2rem"
          color={theme.palette.primary.contrastText}
          fontWeight="800"
          sx={{ fontSize: { xs: 20, sm: 20, md: 20, lg: 25 } }}
        >
          Plan your journey with our experts.
        </Typography>
        <Grid
          container
          justifyContent="flex-start"
          sx={{
            flexDirection: { xs: 'row', sm: 'row' },
            flexWrap: { sm: 'nowrap' },
            alignItems: { xs: 'baseline', sm: 'center' },
            columnGap: { sm: 2 },
            paddingTop: { sm: 2 },
            paddingBottom: { sm: 2 }
          }}
        >
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: 'row', sm: 'row' },
                justifyContent: { xs: 'flex-start', sm: 'flex-start' },
                alignItems: { xs: 'center', sm: 'center' },
                padding: { xs: '18px 0px', sm: '18px 0px' }
              }}
            >
              <AssignmentTurnedInIcon
                fontSize="large"
                sx={{ fontSize: '80px', paddingRight: '15px' }}
              />
              {/* <Box sx={{ width: { xs: 50, sm: 80 }, margin: '0px 16px' }}>
                <Image
                  src={courseSelectionIcon}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box> */}

              <Typography
                className={styles.nanumMyeongjo}
                fontWeight="800"
                sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 22 } }}
              >
                Course Selection
              </Typography>
            </Box>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6}> */}
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: 'row', sm: 'row' },
                justifyContent: { xs: 'flex-start', sm: 'flex-start' },
                alignItems: { xs: 'center', sm: 'center' },
                padding: { xs: '18px 0px', sm: '18px 0px' }
              }}
            >
              <FactCheckIcon fontSize="large" sx={{ fontSize: '80px', paddingRight: '15px' }} />
              {/* <Box sx={{ width: { xs: 50, sm: 80 }, margin: '0 16px' }}>
                <Image
                  src={universityIcon}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box> */}

              <Typography
                className={styles.nanumMyeongjo}
                fontWeight="800"
                sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 22 } }}
              >
                University Shortlisting
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: 'row', sm: 'row' },
                justifyContent: { xs: 'flex-start', sm: 'flex-start' },
                alignItems: { xs: 'center', sm: 'center' },
                padding: { xs: '18px 0px', sm: '18px 0px' }
              }}
            >
              <SchoolIcon fontSize="large" sx={{ fontSize: '80px', paddingRight: '15px' }} />
              {/* <Box sx={{ width: { xs: 50, sm: 80 }, margin: '0 16px' }}>
                <Image
                  src={scholarshipIcon}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box> */}

              <Typography
                className={styles.nanumMyeongjo}
                fontWeight="800"
                sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 22 } }}
              >
                Scholarship Application
              </Typography>
            </Box>
            {/* </Grid> */}
            {/* <Grid item xs={12} sm={6}> */}
            <Box
              display="flex"
              sx={{
                flexDirection: { xs: 'row', sm: 'row' },
                justifyContent: { xs: 'flex-start', sm: 'flex-start' },
                alignItems: { xs: 'center', sm: 'center' },
                padding: { xs: '18px 0px', sm: '18px 0px' }
              }}
            >
              <AssistantIcon fontSize="large" sx={{ fontSize: '80px', paddingRight: '15px' }} />
              {/* <Box sx={{ width: { xs: 50, sm: 80 }, margin: '0 16px' }}>
                <Image
                  src={ivyUniversityIcon}
                  alt=""
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </Box> */}

              <Typography
                className={styles.nanumMyeongjo}
                fontWeight="800"
                sx={{ fontSize: { xs: 18, sm: 25, md: 20, lg: 22 } }}
              >
                Ivy Addmision Assistance
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          sx={{
            alignItems: { xs: 'center' },
            width: { xs: '100%', sm: '50%', md: '65%' },
            justifyContent: { xs: 'center' }
          }}
          margin="32px 0px"
        >
          <Button
            variant="contained"
            fullWidth={true}
            className={styles.nanumMyeongjo}
            sx={{
              background: '#fff',
              color: '#000',
              padding: { xs: '8px 16px', sm: '12px 18px', md: '12px 18px', lg: '14px 20px' },
              borderWidth: '1px',
              borderColor: 'hsla(0, 0%, 100%, 0.21)',
              borderRadius: '999px',
              transition: 'all 200ms ease',
              fontSize: { xs: 16, sm: 18, md: 15, lg: 18 },
              lineHeight: 1.5,
              boxShadow: 'none',
              textTransform: 'capitalize',

              '&:hover': {
                background: '#fff',
                color: '#d31027',
                boxShadow: 'none'
              }
            }}
          >
            <WhatsAppIcon sx={{ margin: '0px 16px', color: '#00b100' }} fontSize="large" />
            Connect To Counsellor Now
          </Button>
        </Grid>
        {/* </Box> */}
      </Grid>
      <Grid
        item
        xs={0}
        md={4}
        lg={4}
        sx={{
          display: { xs: 'none', md: 'flex' },
          margin: { xs: '0px 15px', md: '0 auto' }
        }}
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
