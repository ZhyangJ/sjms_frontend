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
    },
    {
        path: "/HomePage",
        element: <HomePage />,
    },
    {
        path: "/Kidney-Cancer-Molecular-Model",
        element: <KidneyCancerMolecularModel />,
    },
    {
        path: "/DCCD-Features-Overview",
        element: <DCCDFeaturesOverview />,
    },
    {
        path: "/Clinical-Significance-Of-DCCD",
        element: <ClinicalSignificanceOfDCCD />,
    },
    {
        path: "/DCCD-Identification-Tool",
        element: <DCCDIdentificationTool />,
    },
    {
        path: "/Team-Introduction",
        element: <TeamIntroduction />,
    },
    {
        path: "*",
        element: <div>404 Not Found</div>,
    }
]);

export default router;
