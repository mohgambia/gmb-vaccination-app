import React from "react";
// import { SysAdminContentWrapper } from '@client/views/SysAdmin/SysAdminContentWrapper'
// import { Header } from '@client/views/SysAdmin/Performance/utils'
import ImmunizationLayout from "../../components/immunization/Layout";
import ImmunizationList from "../../components/ImmunizationList";
import { useRouter } from "next/router";
// import { useParams } from "react-router";

const ImmunizationHome = () => {
  return (
    <ImmunizationLayout>
      <h1>The Gambia COVID-19 Vaccination Form</h1>
      <ImmunizationList></ImmunizationList>
    </ImmunizationLayout>
  );
};

export default ImmunizationHome;
