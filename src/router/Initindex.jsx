import { createBrowserRouter } from "react-router-dom";
import TeamIntroduction from "../pages/TeamIntroduction/TeamIntroduction";
import HomePage from "../pages/HomePage/HomePage";
import KidneyCancerMolecularModel from "../pages/KidneyCancerMolecularModel/KidneyCancerMolecularModel";
import DCCDIdentificationTool from "../pages/DCCDIdentificationTool/DCCDIdentificationTool";
import DCCDFeaturesOverview from "../pages/DCCDFeaturesOverview/DCCDFeaturesOverview";
import ClinicalSignificanceOfDCCD from "../pages/ClinicalSignificanceOfDCCD/ClinicalSignificanceOfDCCD";
const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        label: '首页'
    },
    {
        path: "/Kidney-Cancer-Molecular-Model",
        element: <KidneyCancerMolecularModel />,
        label: '肾癌分子模型'
    },
    {
        path: "/DCCD-Features-Overview",
        element: <DCCDFeaturesOverview />,
        label: 'DCCD特征概述'
    },
    {
        path: "/Clinical-Significance-Of-DCCD",
        element: <ClinicalSignificanceOfDCCD />,
        label: 'DCCD临床意义'
    },
    {
        path: "/DCCD-Identification-Tool",
        element: <DCCDIdentificationTool />,
        label: 'DCCD鉴定工具'
    }
    ,
    {
        path: "/Team-Introduction",
        element: <TeamIntroduction />,
        label: '团队介绍'
    },
    {
        path: "*",
        element: <div>404 Not Found</div>,
    }

])
export default router;