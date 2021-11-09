import * as React from 'react';
import Grid from '@mui/material/Grid'
import Calender from '../../components/SharedComponent/Calender';
import Appointments from './Appointments';
const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date())
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
                <Calender value={date}
                    setValue={setDate}></Calender>
            </Grid>
            <Grid item xs={12} md={8}>
                <Appointments date={date}></Appointments>
            </Grid>
        </Grid>
    );
};

export default DashboardHome;