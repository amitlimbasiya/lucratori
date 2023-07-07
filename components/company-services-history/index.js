import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion, Table } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Pagination from 'react-bootstrap/Pagination';

const InvoiceServicesHistoryData = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col xl={12} lg={12}>
                        <div className="invoiceServicesHistoryDataTbl">
                            <Table bordered striped responsive>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Services</th>
                                        <th>Quantity</th>
                                        <th>Date</th>
                                        <th>Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="servicesNo">01</td>
                                        <td className="servicesServicesName">CVdirect</td>
                                        <td className="servicesQuantity">50X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">02</td>
                                        <td className="servicesServicesName">Business announcement, weekly update (30 days)</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">03</td>
                                        <td className="servicesServicesName">Standard Announcement (30 days)</td>
                                        <td className="servicesQuantity">5X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">04</td>
                                        <td className="servicesServicesName">Ad Freemium (30 days)</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">05</td>
                                        <td className="servicesServicesName">Standard Announcement (30 days)</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">06</td>
                                        <td className="servicesServicesName">CVdirect</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">07</td>
                                        <td className="servicesServicesName">Business announcement, weekly update (30 days)</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">08</td>
                                        <td className="servicesServicesName">CVdirect</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">09</td>
                                        <td className="servicesServicesName">Business announcement, weekly update (30 days)</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">10</td>
                                        <td className="servicesServicesName">Business announcement, weekly update (30 days)</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="servicesNo">11</td>
                                        <td className="servicesServicesName">Business announcement, weekly update (30 days)</td>
                                        <td className="servicesQuantity">1X</td>
                                        <td className="servicesDate">19-06-2023</td>
                                        <td className="servicesOpts"><Link href="">Usage &gt;&gt;</Link></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-5">
                            <Pagination className="mb-0">
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Next className="nextAll" />
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default InvoiceServicesHistoryData;
