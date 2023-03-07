import { useScrollDirection } from '@/hooks/useScrollDirection';
import { useWindowTop } from '@/hooks/useWindowTop';
import { RobotoSlabFont } from '@/pages/_app';
import styles from '@/styles/Home.module.css';
import theme from '@/theme';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Grid, IconButton, Typography } from '@mui/material';

const Header = () => {
  const isWindowTopReached = useWindowTop();
  const scrollDirection = useScrollDirection();

  return (
    <Grid
      container
      columnSpacing={6}
      alignItems="center"
      sx={{
        position: 'sticky',
        top: '0px',
        transitionProperty: 'all',
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
        transitionDuration: '500ms',
        zIndex: 2,
        padding: '16px 32px',

        '&':
          scrollDirection === 'down'
            ? { top: '-10rem' }
            : {
                boxShadow: !isWindowTopReached ? '0 0 74px 0 rgb(0 0 0 / 25%)' : 'none',
                background: !isWindowTopReached ? '#fff' : '#d31027'
              }
      }}
    >
      <Grid item xs={8} md={6} lg={4}>
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Typography
            variant="h4"
            fontWeight="800"
            textTransform="uppercase"
            color={
              !isWindowTopReached ? theme.palette.primary.main : theme.palette.primary.contrastText
            }
            fontFamily={RobotoSlabFont.style.fontFamily}
            sx={{ fontSize: { xs: 22, sm: 35, lg: 38 } }}
          >
            The Study Trek
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontSize: { xs: 10, sm: 16, lg: 18 } }}
            fontWeight={800}
            textTransform="uppercase"
            color={
              !isWindowTopReached ? theme.palette.primary.main : theme.palette.primary.contrastText
            }
          >
            Overseas Education Consultant
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        xs={4}
        md={6}
        lg={8}
        alignItems="center"
        justifyContent="flex-end"
        sx={{ display: { xs: 'flex', lg: 'none' } }}
      >
        <Box
          color={
            isWindowTopReached ? theme.palette.primary.contrastText : theme.palette.primary.main
          }
          margin={{ xs: '0px', md: '0rem 4rem' }}
        >
          <IconButton
            size="large"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Box>
      </Grid>
      <Grid item md={8} sx={{ display: { xs: 'none', md: 'none', lg: 'flex' } }}>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly"
          padding="0 1rem"
          width="100%"
        >
          <Button
            variant="contained"
            fullWidth={true}
            className={!isWindowTopReached ? styles.secondaryButton : styles.primaryButton}
          >
            About Us
          </Button>
          <Button
            variant="contained"
            fullWidth={true}
            className={!isWindowTopReached ? styles.secondaryButton : styles.primaryButton}
          >
            Services
          </Button>
          <Button
            variant="contained"
            fullWidth={true}
            className={!isWindowTopReached ? styles.secondaryButton : styles.primaryButton}
          >
            Testimonials
          </Button>
          <Button
            variant="contained"
            fullWidth={true}
            className={!isWindowTopReached ? styles.secondaryButton : styles.primaryButton}
          >
            Scholarships
          </Button>
          <Button
            variant="contained"
            fullWidth={true}
            className={!isWindowTopReached ? styles.secondaryButton : styles.primaryButton}
          >
            Contact Us
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Header;
