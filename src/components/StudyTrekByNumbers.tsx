import useOnScreen from '@/hooks/useOnScreen';
import { Box, Container, Grid, Typography } from '@mui/material';
import { useRef } from 'react';
import Count from './Count';

const StudyTrekByNumbers = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

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
          marginBottom="2.5rem"
          fontSize="2.5rem"
        >
          The Study Trek By Numbers
        </Typography>
        <Grid container spacing={4} ref={ref}>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Count
                isVisible={isVisible}
                countTypographyStyle={{
                  variant: 'h4',
                  sx: {
                    // fontFamily: rubik.style.fontFamily
                  },
                  marginBottom: '1rem',
                  fontWeight: '500',
                  color: '#FF8900'
                }}
                data={{
                  number: '29',
                  duration: 1
                }}
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
                Countries
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
                Choose a country that matches your quality of life, future goals, budget, course
                duration, weather and language preferences.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Count
                isVisible={isVisible}
                countTypographyStyle={{
                  variant: 'h4',
                  sx: {
                    // fontFamily: rubik.style.fontFamily
                  },
                  marginBottom: '1rem',
                  fontWeight: '500',
                  color: '#803DEA'
                }}
                data={{
                  number: '700+',
                  duration: 1
                }}
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
                Universities
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
                Our students aren’t just pursuing their higher education, but their dreams and
                ambitions in eminent universities across the globe.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Count
                isVisible={isVisible}
                countTypographyStyle={{
                  variant: 'h4',
                  sx: {
                    // fontFamily: rubik.style.fontFamily
                  },
                  marginBottom: '1rem',
                  fontWeight: '500',
                  color: '#FF0A0A'
                }}
                data={{
                  number: '80,000+',
                  duration: 1
                }}
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
                Course Options
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
                Find a program suiting your academic and career pursuits from a plethora of options
                and get graduate career ready.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Count
                isVisible={isVisible}
                countTypographyStyle={{
                  variant: 'h4',
                  sx: {
                    // fontFamily: rubik.style.fontFamily
                  },
                  marginBottom: '1rem',
                  fontWeight: '500',
                  color: '#3D86EA'
                }}
                data={{
                  number: '24',
                  duration: 1
                }}
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
                Years Of Experience
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
                With over two decades of industry expertise, we know what’s best for you and that
                makes us really good at what we do !
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Count
                isVisible={isVisible}
                countTypographyStyle={{
                  variant: 'h4',
                  sx: {
                    // fontFamily: rubik.style.fontFamily
                  },
                  marginBottom: '1rem',
                  fontWeight: '500',
                  color: '#F0A248'
                }}
                data={{
                  number: '65+',
                  duration: 1
                }}
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
                Global Offices
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
                We’re growing, we’re expanding and we’re doing that fast! Join the fastest growing
                EdTech brand in South and South-East Asia.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Count
                isVisible={isVisible}
                countTypographyStyle={{
                  variant: 'h4',
                  sx: {
                    // fontFamily: rubik.style.fontFamily
                  },
                  marginBottom: '1rem',
                  fontWeight: '500',
                  color: '#3DA1EA'
                }}
                data={{
                  number: '300,000',
                  duration: 1
                }}
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
                Students Assisted
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
                Leverage the expertise of our seasoned & friendly counsellors who have assisted
                countless students reach their dream study destinations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default StudyTrekByNumbers;
