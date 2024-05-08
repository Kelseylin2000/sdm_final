import Progress from "../components/Progress";
import { ThemeProvider } from '@mui/material/styles';
import { Typography} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Divider } from '@mui/material';
import { useTranslation } from 'react-i18next';
import theme from '../components/Theme'; 
import HeaderBar from '../components/HeaderBar';
import UserPageNav from '../components/UserPageNav'

import './Common.css';


function PlanManage() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();


  return (
    <ThemeProvider theme={theme}>
      <HeaderBar />
      <UserPageNav selectedTab={2}/> 
      <div className='Main'>
        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} style={{ marginBottom: '20px' }} >
            <Typography variant="h4"> {t('參與紀錄')} </Typography>

            <Button variant="contained" color="primary" onClick={() => navigate('/newactivity')}> {t('切換至已結束計畫')} </Button> 
        </Stack>
    
        <Grid container spacing={2}>
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />

        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
        <Button sx={{ my: 2 }}><Typography>{t('查看更多')}</Typography></Button> 
        </div>

        <Divider sx={{ mb: 4 }}/>

        <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2} style={{ marginBottom: '20px' }} >
            <Typography variant="h4"> {t('發起紀錄')} </Typography>

            <Button variant="contained" color="primary" onClick={() => navigate('/newactivity')}> {t('切換至已結束計畫')} </Button> 
        </Stack>
    
        <Grid container spacing={2}>
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />
            <Progress />

        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
        <Button sx={{ my: 2 }}><Typography>{t('查看更多')}</Typography></Button> 
        </div>



      </div>
    </ThemeProvider>
  );
}

export default PlanManage;