import React from "react";
import {Button,Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
class ModalForm extends React.Component{
    constructor(props){
        super(props);
        this.state={show:false};
    }
    showhideModal=()=>{
        this.setState({show:!this.state.show});
    }
    render(){
        return(
            <>
            <button className="header-button header-learning" onClick={this.showhideModal}>Start Learning</button>
            <Modal show={this.state.show} onHide={this.showhideModal} keyboard={false} backdrop="static" centered>
                    <Modal.Header closeButton>
                    <h2>Start Learning from Today</h2>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="modal-form">
                            <input type="text" maxLength="20" placeholder="Enter your name"></input><br/>
                            <input type="tel" maxLength="10" max="9999999999" placeholder="Enter your phone number"></input><br/>
                            <input type="mail" placeholder="Enter your e-mail"></input><br/>
                            <select>
                                <option>Select Course</option>
                                <option>Full Stack Web Development</option>
                                <option>Java Web Development</option>
                                <option>Python Programming</option>
                                <option>Machine Learning</option>
                                <option>Microsoft Azure Training</option>
                             </select>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={this.showhideModal}>Close</Button>
                        <Button variant="success" onClick={this.showhideModal}>Submit</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ModalForm;