import React from 'react';
import Button from '@material-ui/core/Button';

export default function Documentation () {
    
    return (
        <div className="document-container">
            <div className="document-cover-flex">
                <div className="document-cover-item">
                    <div className="document-header-cover">
                        <div className="title-header-cover">
                            <h2 className="header-title">Creatella React Test Documentation</h2>
                        </div>
                        <div className="subtitle-subheader-cover">
                            <p className="subheader-subtitle">Hi! Welcome to Creatella React Challenge Docs. <br />This documentation serves as a guide to help the reviewer get familiar with the product features, implementation and the respective folder locations of the code.</p>
                        </div>
                    </div>
                    <div className="document-content-cover">
                        <div className="content-header-texts-cover">
                            <div className="content-title-header-cover">
                                <h2 className="header-title">Starting The Application.</h2>
                            </div>
                            <div className="content-subtitle-subheader-cover">
                                <p className="subheader-subtitle">For some reason the React application cant pick up the backend server on run time, so i had to use <b>concurrently</b> - an npm library to achieve this. Though I have a nugde this might not be necessary, am always open for better ideas or suggestions. In the meantime to start the application, you would have to run <b>npm run dev</b>.</p>
                            </div>
                        </div>
                        <div className="feature-header-texts-cover">
                            <div className="feature-title-header-cover">
                                <h2 className="header-title">Application Features.</h2>
                            </div>
                            <div className="feature-subtitle-subheader-cover">
                                <p className="subheader-subtitle">1) Pagination with lazy loading</p>
                                <div className="feature-subheader-texts-cover">
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">Description</h2>
                                        <p className="header-subtitle">Lazy loading aims at meeting one of the requirements of the challenge, which is to make the product grid load more items automatically as it scrolls down the page.</p>
                                    </div>
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">File locations</h2>
                                        <p className="header-subtitle">The files and their location related to this feature are:</p>
                                        <p className="header-subtitle">src/<b>Components/*</b></p>
                                        <p className="header-subtitle">src/<b>Home/*</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-subtitle-subheader-cover">
                                <p className="subheader-subtitle">2) Sorting Data</p>
                                <div className="feature-subheader-texts-cover">
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">Description.</h2>
                                        <p className="header-subtitle">Sorting gives the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen. Each product has: <br />
                                        - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying. <br />
                                        - a "price" field, in cents. This should be formatted as dollars like `$3.51`. <br />
                                        - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.</p>
                                    </div>
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">File locations</h2>
                                        <p className="header-subtitle">The files and their location related to this feature are:</p>
                                        <p className="header-subtitle">src/<b>Components/*</b></p>
                                        <p className="header-subtitle">src/<b>Home/*</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-subtitle-subheader-cover">
                                <p className="subheader-subtitle">3) Advert placements</p>
                                <div className="feature-subheader-texts-cover">
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">Description.</h2>
                                        <p className="header-subtitle">Sponsored Ads are meant to be inserted after every 20 products rendered. <br />
                                        Ads should also be randomly selected, but a user must never see the same ad twice in a row.</p>
                                    </div>
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">File locations</h2>
                                        <p className="header-subtitle">The files and their location related to this feature are:</p>
                                        <p className="header-subtitle">src/<b>Components/*</b></p>
                                        <p className="header-subtitle">src/<b>Home/*</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-subtitle-subheader-cover">
                                <p className="subheader-subtitle">4) Application state management</p>
                                <div className="feature-subheader-texts-cover">
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">Description.</h2>
                                        <p className="header-subtitle">In addition to the various React Hooks for functional state management as well its entire lifecycle made available to us, REDUX was also slightly introduced to support the objective of the features.</p>
                                    </div>
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">File locations</h2>
                                        <p className="header-subtitle">The files and their location related to this feature are:</p>
                                        <p className="header-subtitle">src/<b>Store/*</b></p>
                                    </div>
                                </div>
                            </div>
                            <div className="feature-subtitle-subheader-cover">
                                <p className="subheader-subtitle">5) Styling with SASS</p>
                                <div className="feature-subheader-texts-cover">
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">Description.</h2>
                                        <p className="header-subtitle">In order to keep things simple and elegant, the UI for this application was designed using SASS CSS pre-processor.</p>
                                    </div>
                                    <div className="subtitle-header-cover">
                                        <h2 className="header-title">File locations</h2>
                                        <p className="header-subtitle">The files and their location related to this feature are:</p>
                                        <p className="header-subtitle">src/<b>sass/*</b></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="content-footer-cover">
                        <div className="footer-header-cover">
                            <h2 className="footer-header-text">Conclusions</h2>
                            <p className="footer-subheader-text">Thanks for your time, I hope you found this documentation was helpful enough to carry out your review.</p>
                        </div>
                        <div className="footer-btn-cover-flex">
                            <div className="footer-btn-cover-item">
                                <Button className="footer-btn" color="primary" variant="contained">
                                    <a className="footer-btn-a" href="/">Get Started</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}