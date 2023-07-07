import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Button, ProgressBar, InputGroup, Table } from "react-bootstrap";
import Image from "next/image";
import * as s from "../../src/styles/my-cv";
import Link from "next/link";
import userImg from "../../public/images/user.png";
import LocationIcon from "../../public/images/map-icon.svg";
import SpeedMeterIcon from "../../public/images/speed-meter-icon.svg";
import GraduateIcon from "../../public/images/graduate-icon.svg";
import MobileIcon from "../../public/images/mobile-icon.svg";
import EnvelopeIcon from "../../public/images/envelope-icon.svg";
import EyeIcon from "../../public/images/eyeIconDark.svg";
import SingleUserIcon from "../../public/images/single-user-icon.svg";
import PrinterIcon from "../../public/images/printer-icon.svg";
import StarOutlineIcon from "../../public/images/star-outline-icon.svg";
import LanguagesIcon from "../../public/images/languages-icon.svg";
import BulgariaFlagIcon from "../../public/images/bulgaria-flag.svg";
import InfoIcon from "../../public/images/info-icon.svg";
import ProjectsIcon from "../../public/images/projectsIcon.png";
import DrivingLicences from "../../public/images/drivingLicences.png";
import Modal from 'react-bootstrap/Modal';
import { DeleteForeverOutlined, EditNoteOutlined } from '@mui/icons-material';
function HowCompleteYourCV(props) {

    const [show, setShowData] = useState(false);
    const setShowDataPart = (e) => {
        setShowData(e);
    }
    return (
        <Modal
            {...props}
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            className="customModal"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="pb-5">
                <div className="modalTopHeading">
                    <div className="madalHeading">Get a 100% completed CV</div>
                    <p>Each completed section can bring you closer to your desired job</p>
                </div>
                <div className="dymamicPart">
                    <div className="grayDataRow">
                        <div className={show ? "inlineDataPart clickableDataRow show" : "inlineDataPart clickableDataRow"} onClick={() => setShowDataPart(!show)}>
                            <div className="iconPart">
                                <Image src={SingleUserIcon} alt="Signle User Icon" />
                            </div>
                            <div className="rechOutData">
                                <div>
                                    <span className="filledData">Personal Data - 16%</span>
                                    <span className="totalData">(total 24%)</span>
                                </div>
                            </div>
                        </div>
                        {show &&
                            <div className="clickableDataShow">
                                <div className="rechOutData">
                                    <div>
                                        <span className="filledData">CV picture: 0% </span>
                                        <span className="totalData">(total 3%)</span>
                                    </div>
                                    <Link className="redBtn" href="">Fill</Link>
                                </div>
                                <div className="rechOutData">
                                    <div>
                                        <span className="filledData">Name and surname: 6%</span>
                                        <span className="totalData">(total 6%)</span>
                                    </div>
                                </div>
                                <div className="rechOutData">
                                    <div>
                                        <span className="filledData">Email: 3%</span>
                                        <span className="totalData">(total 3%)</span>
                                    </div>
                                </div>
                                <div className="rechOutData">
                                    <div>
                                        <span className="filledData">Date of birth: 3%</span>
                                        <span className="totalData">(total 3%)</span>
                                    </div>
                                </div>
                                <div className="rechOutData">
                                    <div>
                                        <span className="filledData">City: 5%</span>
                                        <span className="totalData">(total 5%)</span>
                                    </div>
                                </div>
                            </div>
                        }
                        <div className="inlineDataPart">
                            <div className="iconPart">
                                <Image src={StarOutlineIcon} alt="Star Outline Icon" />
                            </div>
                            <div className="rechOutData">
                                <div>
                                    <span className="filledData">Work Experience - 28%</span>
                                    <span className="totalData">(total 28%)</span>
                                </div>
                            </div>
                        </div>
                        <div className="inlineDataPart">
                            <div className="iconPart">
                                <Image src={GraduateIcon} alt="Graduate Icon" />
                            </div>
                            <div className="rechOutData">
                                <div>
                                    <span className="filledData">Education - 0%</span>
                                    <span className="totalData">(total 9%)</span>
                                </div>
                                <Link className="redBtn" href="">Fill</Link>
                            </div>
                        </div>
                        <div className="inlineDataPart">
                            <div className="iconPart">
                                <Image src={LanguagesIcon} alt="Languages Icon" />
                            </div>
                            <div className="rechOutData">
                                <div>
                                    <span className="filledData">Foreign Languages - 0%</span>
                                    <span className="totalData">(total 10%)</span>
                                </div>
                                <Link className="redBtn" href="">Fill</Link>
                            </div>
                        </div>
                        <div className="inlineDataPart">
                            <div className="iconPart">
                                <Image src={InfoIcon} alt="Infomation Icon" />
                            </div>
                            <div className="rechOutData">
                                <div>
                                    <span className="filledData">Other information - 0%</span>
                                    <span className="totalData">(total 29%)</span>
                                </div>
                                <Link className="redBtn" href="">Fill</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}
function EditProfileModal(props) {
    return (
        <Modal
            {...props}
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            className="customModal"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="modalTopHeading">
                    <div className="madalHeading">Personal Information</div>
                    <p>Complete the data below to be
                        contacted by employers</p>
                </div>
                <div className="dymamicPart">
                    <Form>
                        <InputGroup className="mb-3 parentControl">
                            <InputGroup.Text id="formEmail"><Image src={EnvelopeIcon} alt="Envelope Icon" /></InputGroup.Text>
                            <Form.Control type="email" placeholder="Email" />
                        </InputGroup>
                        <InputGroup className="mb-3 parentControl">
                            <InputGroup.Text id="forPhoneNumber"><Image src={MobileIcon} alt="Phone Icon" /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Phone Number" />
                        </InputGroup>
                        <InputGroup className="mb-3 parentControl">
                            <InputGroup.Text id="forCity"><Image src={LocationIcon} alt="Location Icon" /></InputGroup.Text>
                            <Form.Control type="text" placeholder="City" />
                        </InputGroup>
                        <InputGroup className="mb-3 parentControl">
                            <InputGroup.Text id="forEducation"><Image src={GraduateIcon} alt="Graduate Icon" /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Education" />
                        </InputGroup>
                        <InputGroup className="mb-3 parentControl">
                            <InputGroup.Text id="forDrivingLicense"><Image src={SpeedMeterIcon} alt="SpeedMeter Icon" /></InputGroup.Text>
                            <Form.Control type="text" placeholder="Driving License" />
                        </InputGroup>
                        <center className="mt-5"><Button type="submit" className="redBtn">Save Info</Button></center>
                    </Form>
                </div>
                <center className="mt-3">
                    <Link className="simpleLink" href="" onClick={props.onHide}>Close</Link>
                </center>
            </Modal.Body>
        </Modal>
    );
}
function CVVisibilityModal(props) {

    return (
        <Modal
            {...props}
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            className="customModal"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="modalTopHeading">
                    <div className="madalHeading">CV Visibility</div>
                    <p>Choose whether you want your CV to appear
                        when searching the eJobs database</p>
                </div>
                <div className="dymamicPart">
                    <Form>
                        {['radio'].map((type) => (
                            <div key={`check-api-${type}`} className="mb-3 customRadioParent">
                                <Form.Check.Label>
                                    <Form.Check className="customRadio" type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} name="group1" />
                                        {<div className="eRadioCircle"></div>}
                                        {<p><strong>Show</strong>Employers will be able to find your CV in our database and invite you to interviews even without applying to one of their adverts.</p>}
                                    </Form.Check>
                                </Form.Check.Label>
                                <Form.Check.Label><Form.Check className="customRadio" type={type} id={`check-api-${type}`}>
                                    <Form.Check.Input type={type} name="group1" />
                                    {<div className="eRadioCircle"></div>}
                                    {<p><strong>Hide</strong>Employers will only be able to see your CV
                                        if you apply to at least one of their job adverts.</p>}
                                </Form.Check>
                                </Form.Check.Label>
                            </div>
                        ))}
                        {/* {['radio'].map((type) => (
                            <div key={`check-api-${type}`} className="mb-3 customRadioParent withImg">
                                <Form.Check.Label>
                                    <Form.Check className="customRadio align-items-center" type={type} id={`check-api-${type}`}>
                                        <Form.Check.Input type={type} name="group1" />
                                        <Image src={DrivingLicences} alt="Driving Licences Icon" />
                                        {<p>Driver's license</p>}
                                        {<div className="eRadioCircle"></div>}
                                    </Form.Check>
                                </Form.Check.Label>
                                <Form.Check.Label><Form.Check className="customRadio align-items-center" type={type} id={`check-api-${type}`}>
                                    <Form.Check.Input type={type} name="group1" />
                                    <Image src={ProjectsIcon} alt="Projects Icon" />
                                    {<p>Project</p>}
                                    {<div className="eRadioCircle"></div>}
                                </Form.Check>
                                </Form.Check.Label>
                            </div>
                        ))} */}
                        <center><Button type="submit" className="redBtn">Save Info</Button></center>
                    </Form>
                </div>
                <center className="mt-3">
                    <Link className="simpleLink" href="" onClick={props.onHide}>Close</Link>
                </center>
            </Modal.Body>
        </Modal>
    );
}
function ProfileActionSendEmail(props) {
    return (
        <Modal
            {...props}
            // aria-labelledby="contained-modal-title-vcenter"
            centered
            className="customModal"
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <div className="modalTopHeading">
                    <div className="madalHeading">Send by Email</div>
                    <p>Do you want to save your CV to have it
                        at hand or send it to acquaintances / recruiters?
                        Email it as a PDF, adding the desired address</p>
                </div>
                <div className="dymamicPart">
                    <Form>
                        <InputGroup className="mb-3 parentControl">
                            <InputGroup.Text id="formEmail"><Image src={EnvelopeIcon} alt="Envelope Icon" /></InputGroup.Text>
                            <Form.Control type="email" placeholder="Email" />
                        </InputGroup>
                        <center className="mt-5"><Button type="submit" className="redBtn">Send Email</Button></center>
                    </Form>
                </div>
                <center className="mt-3">
                    <Link className="simpleLink" href="" onClick={props.onHide}>Close</Link>
                </center>
            </Modal.Body>
        </Modal>
    );
}
const CVParent = () => {
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow1, setModalShow1] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const now = 60;
    return (
        <>
            <s.CVSection></s.CVSection>
            <s.CVDataSection>
                <Container>
                    <Row className="topUp">
                        <Col md={4} lg={3}>
                            <div className="dataWhiteBox">
                                <div className="userAccount">
                                    <div className="userImg">
                                        <Image src={userImg} alt="Logo" />
                                    </div>
                                    <div className="userDataInfo">
                                        <span className="userName">John Doe</span>
                                        <span className="userPosition">Designer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dataWhiteBox">
                                <h3 className="dwbHeading">Complete your CV</h3>
                                <div className="innerInfo">
                                    <p>A complete CV increases your
                                        chances of being called for
                                        an interview</p>
                                    <ProgressBar now={now} label={`${now}%`} className="mb-3" />
                                    <Link href="" onClick={() => setModalShow3(true)} className="redBtn">Find out how to
                                        complete your CV</Link>
                                </div>
                            </div>
                            <div className="dataWhiteBox">
                                <h3 className="dwbHeading">CV Visibility</h3>
                                <div className="innerInfo">
                                    <div className="visiblilityStatus">
                                        <span className="active">Visible</span>
                                    </div>
                                    <Link href="" onClick={() => setModalShow1(true)} className="redBtn">Edit Visibility</Link>
                                </div>
                            </div>
                            <div className="dataWhiteBox">
                                <h3 className="dwbHeading">Profile Actions</h3>
                                <div className="innerInfo">
                                    <ul>
                                        <li><Link href=""><Image src={EyeIcon} alt="Eye Icon" />How your CV looks</Link></li>
                                        <li><Link href="" onClick={() => setModalShow2(true)}><Image src={EnvelopeIcon} alt="Envelope Icon" />Send by email</Link></li>
                                        <li><Link href=""><Image src={PrinterIcon} alt="Printer Icon" />Print</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} lg={9}>
                            <div className="bigWhiteBox">
                                <h2 className="headingPart">Personal Details</h2>
                                <div className="dataInfo">
                                    <ul>
                                        <li><Image src={EnvelopeIcon} alt="Envelope Icon" /><span>Email</span>abc.123@gmail.com</li>
                                        <li><Image src={GraduateIcon} alt="Graduate Icon" /><span>Study Level</span>+123 456 7890</li>
                                        <li><Image src={LocationIcon} alt="Location Icon" /><span>City</span>Bucharest</li>
                                        <li><Image src={MobileIcon} alt="Mobile Icon" /><span>Phone No</span>Graduate</li>
                                        <li><Image src={SpeedMeterIcon} alt="Speed Meter Icon" /><span>Driving Permit</span>No</li>
                                    </ul>
                                    <center><Link href="" onClick={() => setModalShow(true)} className="redBtn">Edit Profile</Link></center>
                                </div>
                            </div>
                            <div className="bigWhiteBox">
                                <h2 className="headingPart">Experience</h2>
                                <div className="dataInfo">
                                    <div className="fillebleData">
                                        <p>You didn't add any experience yet</p>
                                    </div>
                                    <center>
                                        <Link href="" className="redBtn mx-2 mb-2">Add Experience</Link>
                                        <Link href="" className="redBtn mx-2">No Experience</Link>
                                    </center>
                                </div>
                            </div>
                            <div className="bigWhiteBox">
                                <h2 className="headingPart">Certifications and Certificates</h2>
                                <div className="dataInfo">
                                    <div className="fillebleData">
                                        <p>You didn't add any certificates yet</p>
                                    </div>
                                    <center><Link href="" className="redBtn">Add Certificates</Link></center>
                                </div>
                            </div>
                            <div className="bigWhiteBox">
                                <h2 className="headingPart">Known Languages</h2>
                                <div className="dataInfo">
                                    <div className="fillebleData">
                                        <p>You didn't add any spoken language yet</p>
                                        <Table responsive>
                                            <tbody>
                                                <tr>
                                                    <td><Image className="flagIcon" src={BulgariaFlagIcon} alt="Bulgaria FlagIcon" /></td>
                                                    <td>Bulgaria</td>
                                                    <td className="bigDataTd">Beginner</td>
                                                    <td><button className="redBtn square"><EditNoteOutlined /></button></td>
                                                    <td><button className="redBtn square"><DeleteForeverOutlined /></button></td>
                                                </tr>
                                                <tr>
                                                    <td><Image className="flagIcon" src={BulgariaFlagIcon} alt="Bulgaria FlagIcon" /></td>
                                                    <td>Bulgaria</td>
                                                    <td className="bigDataTd">Beginner</td>
                                                    <td><button className="redBtn square"><EditNoteOutlined /></button></td>
                                                    <td><button className="redBtn square"><DeleteForeverOutlined /></button></td>
                                                </tr>
                                                <tr>
                                                    <td><Image className="flagIcon" src={BulgariaFlagIcon} alt="Bulgaria FlagIcon" /></td>
                                                    <td>Bulgaria</td>
                                                    <td className="bigDataTd">Beginner</td>
                                                    <td><button className="redBtn square"><EditNoteOutlined /></button></td>
                                                    <td><button className="redBtn square"><DeleteForeverOutlined /></button></td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                    <center><Link href="" className="redBtn">Add Languages</Link></center>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </s.CVDataSection>

            {/* Edit Profile Modal */}
            <EditProfileModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            {/* CV Visibility Modal */}
            <CVVisibilityModal
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />
            {/* Profile Action Send Email Modal */}
            <ProfileActionSendEmail
                show={modalShow2}
                onHide={() => setModalShow2(false)}
            />
            {/* How to complete your cv Modal */}
            <HowCompleteYourCV
                show={modalShow3}
                onHide={() => setModalShow3(false)}
            />
        </>
    );
};

export default CVParent;
