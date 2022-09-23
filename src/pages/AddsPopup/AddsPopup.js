import "./index.scss";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const AddsPopup = (props) => {

    const dispatch = useDispatch();

    const [popupAds, setPopupAds] = useState([]);

    useEffect(() => {
        axios.get('/private_adds/private_add?image_type=popup_ads')
            .then((response) => {
                setPopupAds(response.data.results);
            });
    }, [])


    return (
        <div>
            <Modal show={props.popupShow} onHide={props.popupClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href={popupAds[0]?.url_adds} target='_blank'>
                        <img src={popupAds[0]?.image} alt='Image' className='pop_up_add modaladimage' />
                    </a>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={props.popupClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default AddsPopup;