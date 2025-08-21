import React from 'react'
import {

    Routes,
    Route,
    Link,
    Navigate,
    BrowserRouter,
} from "react-router-dom";

//new view

import Footer from './components/Footer/Page.jsx';
import Home from './screen/Home/Home.jsx';
import Support from './screen/Support/Support.jsx';
import Header from './components/Header/Header.jsx';

import AxialFans from './screen/Products/AxialFans/AxialFans.jsx';
import MobilityFans from './screen/Products/MobilityFans/Page.jsx';
import DoubleInletCentrifugalFans from './screen/Products/DoubleInletCentrifugalFans/DoubleInletCentrifugalFans.jsx';
import BackwardCurvedCentrifugalFan from './screen/Products/BackwardCurvedCentrifugalFan/BackwardCurvedCentrifugalFan.jsx';
import CompactFan from './screen/Products/CompactFan/CompactFan.jsx';
import BoxFan from './screen/Products/BoxFan/page.jsx';
function RouterList() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/support" element={<Support />} />
                    <Route path='/products/axial-fans' element={<AxialFans />} />
                    <Route path='/products/mobility-fans' element={<MobilityFans />} />
                    <Route path='/products/forward-curves-centrifugal-fan/double-inlet-centrifugal-fans' element={<DoubleInletCentrifugalFans />} />
                    <Route path='/products/backward-curved-centrifugal-fan' element={<BackwardCurvedCentrifugalFan />} />
                    <Route path='/products/compact-fan' element={<CompactFan />} />
                    <Route path='/products/box-fan' element={<BoxFan />} />



                </Routes>
                <Footer />
            </BrowserRouter>


        </>
    )
}

export default RouterList