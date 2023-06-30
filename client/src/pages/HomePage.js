import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";

import Layout from "./../components/Layout";
import DoctorList from "../components/DoctorList";

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);

  const getDoctorData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res?.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDoctorData();
  }, []);

  return (
    <Layout>
      <h1 className="text-center m-2 p-2">Welcome</h1>
      <h6 className="text-center px-5">Book appointments from the comfort of your home</h6>
      <Row>
        {doctors && doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
