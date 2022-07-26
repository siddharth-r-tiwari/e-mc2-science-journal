import {Footer} from 'flowbite-react';
import React, { Component } from 'react';

class SiteFooter extends Component{
    render(){
        return(
            <div>
                 <Footer container={true}>
                    <div className="w-full text-center">
                        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between text-white">
                        <Footer.Brand
                            href="/"
                            src="img/homepage/uchicago.svg"
                            alt="E = MC² Logo"
                            name="E = MC²"
                        />
                        <Footer.LinkGroup>
                            <Footer.Link href="#">
                            About
                            </Footer.Link>
                            <Footer.Link href="#">
                            Privacy Policy
                            </Footer.Link>
                            <Footer.Link href="#">
                            Licensing
                            </Footer.Link>
                            <Footer.Link href="#">
                            Contact
                            </Footer.Link>
                        </Footer.LinkGroup>
                        </div>
                        <Footer.Divider />
                        <Footer.Copyright
                            href="#"
                            by="    Mazziotti Lab and the Tiwari Brothers"
                            year={2022}
                        />
                    </div>
                </Footer>
            </div>
        );
    }
}

export default SiteFooter;