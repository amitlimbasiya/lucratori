import React, { useEffect, useState } from "react";
import { Row, Col, Container, Form, Accordion, Table } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import PdfIcon from "../../public/images/pdf-icon.svg";
import Pagination from 'react-bootstrap/Pagination';

const InvoiceHistoryData = () => {

    return (
        <>
            <Container>
                <Row>
                    <Col xl={12} lg={12}>
                        <div className="invoiceHistoryDataTbl">
                            <Table bordered striped responsive>
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Invoice No.</th>
                                        <th>Order Date</th>
                                        <th>Status</th>
                                        <th>Download</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="invoiceNo">01</td>
                                        <td className="invoiceNumber">lucgog-5461</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">02</td>
                                        <td className="invoiceNumber">lucgog-5460</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">03</td>
                                        <td className="invoiceNumber">lucgog-5461</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">04</td>
                                        <td className="invoiceNumber">lucgog-5460</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Pending</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">05</td>
                                        <td className="invoiceNumber">lucgog-5461</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">06</td>
                                        <td className="invoiceNumber">lucgog-5460</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Pending</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">07</td>
                                        <td className="invoiceNumber">lucgog-5461</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">08</td>
                                        <td className="invoiceNumber">lucgog-5460</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">09</td>
                                        <td className="invoiceNumber">lucgog-5461</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
                                    </tr>
                                    <tr>
                                        <td className="invoiceNo">10</td>
                                        <td className="invoiceNumber">lucgog-5460</td>
                                        <td className="invoiceOrderDate">19-06-2023</td>
                                        <td className="invoiceStatus">Paid</td>
                                        <td className="invoiceDownload"><Link href=""><Image src={PdfIcon} alt="PDF Icon" /> Download</Link></td>
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

export default InvoiceHistoryData;
