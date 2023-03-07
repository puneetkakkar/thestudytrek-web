import theme from '@/theme';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  Typography
} from '@mui/material';

const StudyAbroadFAQ = () => {
  return (
    <Grid padding="5rem 0rem" width="100%">
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
          Study Abroad FAQs
        </Typography>
        <Grid container margin={0} spacing={4}>
          <Grid item xs={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Accordion
                sx={{
                  boxShadow: '0 3px 6px rgb(0 0 0 / 16%)',
                  padding: '0.5rem'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="600"
                    color={theme.palette.primary.main}
                  >
                    How much will it cost to study abroad?{' '}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="400"
                    color="#64647a"
                  >
                    The costs associated with studying at a university or school abroad vary
                    greatly. It depends on the nature of your chosen program, the length of your
                    stay, the distance you travel and the kind of lifestyle you want when you get
                    there
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Accordion
                sx={{
                  boxShadow: '0 3px 6px rgb(0 0 0 / 16%)',
                  padding: '0.5rem'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="600"
                    color={theme.palette.primary.main}
                  >
                    Where in the world should I study?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="400"
                    color="#64647a"
                  >
                    Choosing where in the world you wish to study is not always an easy task. As
                    well as your own personal interests, you should think about practicalities such
                    as the costs of studying in that country (both tuition costs and living costs),
                    your graduate career prospects (is there a good job market?) and your overall
                    safety and welfare.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Accordion
                sx={{
                  boxShadow: '0 3px 6px rgb(0 0 0 / 16%)',
                  padding: '0.5rem'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="600"
                    color={theme.palette.primary.main}
                  >
                    When can I start applying for study abroad programs?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="400"
                    color="#64647a"
                  >
                    Application deadlines will be different depending on the school, but, for
                    programs starting in the fall (September/October), applications will generally
                    be open from early in the year (January/February) until the middle of the year
                    (June/July).
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              margin="0rem 2rem"
            >
              <Accordion
                sx={{
                  boxShadow: '0 3px 6px rgb(0 0 0 / 16%)',
                  padding: '0.5rem'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: theme.palette.primary.main }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="600"
                    color={theme.palette.primary.main}
                  >
                    What are the entry requirements for study abroad programs?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={
                      {
                        // fontFamily: rubik.style.fontFamily
                      }
                    }
                    fontWeight="400"
                    color="#64647a"
                  >
                    Entry requirements vary widely between universities and between countries, so be
                    sure to check the information provided by your prospective university before
                    submitting anything.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default StudyAbroadFAQ;
