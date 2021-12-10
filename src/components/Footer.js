import React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
    return (
        <div> 
       <footer style={{backgroundColor: "#212529", marginTop: "10px"}} className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-12 mt-md-0 mt-6">
                <h5 className="text-uppercase">Tomas Martin Hoffer - MOVEO PROJECT</h5>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2021 Copyright:
    </div>

</footer>
        </div>
     );
}
 
export default Footer;