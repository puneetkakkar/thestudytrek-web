import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import globalUniversitiesIcon from 'public/Images/global-universities-icon.png';
import studentPlacedIcon from 'public/Images/student-placed-icon.png';
import worldLocationIcon from 'public/Images/world-location-icon.png';

const WhyStudyTrek = () => {
  return (
    <Grid padding="5rem 0rem">
      <Container>
        <Typography
          variant="h3"
          fontWeight="500"
          sx={
            {
              // fontFamily: rubik.style.fontFamily
            }
          }
          textAlign="center"
          marginBottom="5rem"
          fontSize="2.5rem"
        >
          Why The Study Trek Overseas Education?
        </Typography>
        <Grid display="flex" alignItems="baseline">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="0rem 2rem"
          >
            <Image
              src={worldLocationIcon}
              alt=""
              style={{ width: '4rem', height: '4rem', margin: '1rem 0rem' }}
            />
            <Typography
              variant="h5"
              sx={
                {
                  // fontFamily: rubik.style.fontFamily
                }
              }
              marginBottom="1rem"
              fontWeight="500"
            >
              Multi Country Advantage
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              sx={
                {
                  // fontFamily: rubik.style.fontFamily
                }
              }
              color="#64647a"
              fontWeight="400"
            >
              29 countries across 4 continents – global study destinations we offer include some of
              the best countries to study abroad.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="0rem 2rem"
          >
            <Image
              src={globalUniversitiesIcon}
              alt=""
              style={{ width: '4rem', height: '4rem', margin: '1rem 0rem' }}
            />
            <Typography
              variant="h5"
              sx={
                {
                  // fontFamily: rubik.style.fontFamily
                }
              }
              marginBottom="1rem"
              fontWeight="500"
            >
              Global Universities
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              sx={
                {
                  // fontFamily: rubik.style.fontFamily
                }
              }
              color="#64647a"
            >
              Choose the program that will define your future from our represented 700+ universities
              all over the world.
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            margin="0rem 2rem"
          >
            <Image
              src={studentPlacedIcon}
              alt=""
              style={{ width: '4rem', height: '4rem', margin: '1rem 0rem' }}
            />
            <Typography
              variant="h5"
              sx={
                {
                  // fontFamily: rubik.style.fontFamily
                }
              }
              marginBottom="1rem"
              fontWeight="500"
            >
              Students Placed
            </Typography>
            <Typography
              variant="subtitle1"
              textAlign="center"
              sx={
                {
                  // fontFamily: rubik.style.fontFamily
                }
              }
              color="#64647a"
            >
              Leverage the expertise of our seasoned & friendly counsellors who have assisted
              3,00,000 students reach their dream study destinations.
            </Typography>
          </Box>
        </Grid>
      </Container>
    </Grid>
  );
};

export default WhyStudyTrek;
