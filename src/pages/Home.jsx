import React from "react";
import Homehero from "../components/Homehero";
import Allcategories from "../components/Allcategories";
import HomerecentList from "../components/HomerecentList";
import GetListed from "../components/GetListed";
import Homefreelancers from "../components/Homefreelancers";
import Homepartners from "../components/Homepartners";
import Homeevents from "../components/Homeevents";

const Home = () => {
  return (
    <React.Fragment>
      <Homehero />
      {/* <Allcategories /> */}
      <HomerecentList />
      <GetListed />
      <Homefreelancers />
      <Homepartners />
      <Homeevents />
    </React.Fragment>
  );
};

export default Home;
