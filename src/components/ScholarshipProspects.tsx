import styles from '@/styles/Home.module.css';
import { Box, Button, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import graduateScholarIcon from 'public/Images/graduate-scholar-image.png';

const ScholarshipProspects = () => {
  return (
    <Grid
      direction="row"
      width="100%"
      padding="5rem 5rem"
      // bgcolor="#ffe7c9"
      bgcolor="#ff613c"
      flexWrap={'wrap'}
    >
      <Box>
        <Typography
          variant="h3"
          fontWeight="500"
          className={styles.rubik}
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
              <Typography variant="h5" className={styles.rubik} fontWeight="400">
                Most of the global universities and colleges provide scholarships to International
                students based on merit, need or other criteria as well.
              </Typography>
              <Typography variant="h5" className={styles.rubik} fontWeight="400">
                If eligible, you can get a scholarship worth 5 lakhs to 75 lakhs in India Currency.
                At times, full tuition fee waiver as well.
              </Typography>
              <Typography variant="h5" className={styles.rubik} fontWeight="500">
                Worth giving a try.
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Button variant="contained" fullWidth={true} className={styles.primaryButton}>
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
