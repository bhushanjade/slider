import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Popup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }
    componentDidMount(){
        this.toggle();
    }
    reset =() =>{
        this.props.resetCount();
        this.toggle();
    }
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));

        if(this.state.modal){
            this.props.hidePopup();
        }

    }

    render() {
        return (
            <div>
                {/*<Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>*/}
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Selected Numbers</ModalHeader>
                    <ModalBody>
                        {this.props.selectedNums.join(",")}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.reset}>Reset Count</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

