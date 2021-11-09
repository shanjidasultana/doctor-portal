import React from 'react';
import AppoinmentHeader from '../../components/Home/AppoinmentHeader';
import Header from '../../components/Home/Header/Header';

const Appointment = () => {
    const [value, setValue] = React.useState(new Date());
    return (

        <>
            <Header></Header>
            <AppoinmentHeader value={value} setValue={setValue}></AppoinmentHeader>
                
        </>
    );
};

export default Appointment;