
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import add from "../../assets/images/add.png";
const AddsPopup = (props) => {

    return (
        <div>
            <Modal show={props.popupShow} onHide={props.popupClose}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body><img src={add} alt='Image' className='google_add' /></Modal.Body>

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