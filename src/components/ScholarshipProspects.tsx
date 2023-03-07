import styles from '@/styles/Home.module.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import graduateScholarIcon from 'public/Images/graduate-scholar-image.png';

const ScholarshipProspects = () => {
  return (
    <Grid
      // direction="row"
      width="100%"
      padding="5rem 5rem"
      // bgcolor="#ffe7c9"
      sx={{ background: 'linear-gradient(to bottom, #d31027, #d91d31, #df273a, #e53044, #ea384d)' }}
      flexWrap={'wrap'}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight="500"
          sx={
            {
              // fontFamily: rubik.style.fontFamily
            }
          }
          textAlign="center"
          marginBottom="3rem"
          fontSize="2.5rem"
          color="#fff"
        >
          Step Up your Study Abroad Prospects with Scholarships
        </Typography>

        <Grid container spacing={4} paddingTop="3rem">
          <Grid item xs={6} sm container spacing={6}>
            <Grid item xs={12} display="flex" flexDirection="column" rowGap={4} color="#fff">
              <Typography
                variant="h5"
                sx={
                  {
                    // fontFamily: rubik.style.fontFamily
                  }
                }
                fontWeight="400"
              >
                Most of the global universities and colleges provide scholarships to International
                students based on merit, need or other criteria as well.
              </Typography>
              <Typography
                variant="h5"
                sx={
                  {
                    // fontFamily: rubik.style.fontFamily
                  }
                }
                fontWeight="400"
              >
                If eligible, you can get a scholarship worth 5 lakhs to 75 lakhs in India Currency.
                At times, full tuition fee waiver as well.
              </Typography>
              <Typography
                variant="h5"
                sx={
                  {
                    // fontFamily: rubik.style.fontFamily
                  }
                }
                fontWeight="500"
              >
                Worth giving a try.
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Button
                variant="contained"
                fullWidth={true}
                sx={{
                  background: 'hsla(0, 0%, 100%, 0.06)',
                  padding: '14px 20px',
                  borderWidth: '1px',
                  borderColor: 'hsla(0, 0%, 100%, 0.21)',
                  borderRadius: '999px',
                  transition: 'all 200ms ease',
                  color: '#fff',
                  fontSize: '1.25rem',
                  lineHeight: 1,
                  fontWeight: 700,
                  boxShadow: 'none',
                  textTransform: 'capitalize',

                  '&:hover': {
                    background: 'hsla(0, 0%, 100%, 0.16)',
                    boxShadow: 'none'
                  }
                }}
              >
                Register Now
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Image src={graduateScholarIcon} alt="Canada" className={styles.graduateScholarImage} />
          </Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default ScholarshipProspects;
