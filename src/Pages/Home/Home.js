import React from 'react';
import AppointmentBanner from '../../components/AppointmetBanner/AppointmentBanner';
import Blogs from '../../components/Blogs/Blogs';
import ClientSays from '../../components/ClientSays/ClientSays';
import Banner from '../../components/Home/Banner/Banner';
import Contact from '../../components/Home/Contact/Contact';
import Details from '../../components/Home/Details/Details';
import Doctors from '../../components/Home/Doctors/Doctors';
import Header from '../../components/Home/Header/Header';
import Services from '../../components/Home/Services/Services';
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Contact></Contact>
            <Services></Services>
            <Details></Details>
            <AppointmentBanner></AppointmentBanner>
            <ClientSays></ClientSays>
            <Blogs></Blogs>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;