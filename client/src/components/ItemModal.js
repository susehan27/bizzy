import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import {connect} from "react-redux";
import {addItem} from "../actions/itemActions";


class ItemModal extends Component {
    
    constructor() {
        super();
        this.state = {
            modal: false,
            name: "",
            taskType: "",
            dueDate: "",
            taskDuration: 0
        };
        this.onChange = this.onChange.bind(this);
    }
    
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit = e => {
        e.preventDefault();
        
        const newItem = {
            name: this.state.name,
            taskType: this.state.taskType,
            dueDate: this.state.dueDate,
            taskDuration: this.state.taskDuration
        }

        //add item via addItem action
        this.props.addItem(newItem);

        //close modal
        this.toggle();
    }

    render() {
        return(
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: "2rem"}}
                    onClick={this.toggle}
                >Add Item</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                >
                    <ModalHeader toggle={this.toggle}>Add New Task</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="item">Task Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="item"
                                    placeholder="Add item"
                                    onChange={this.onChange}
                                />
                                <Label for="item">Task Type</Label>
                                <Label for="exampleSelect">Select</Label>
                                <Input 
                                    type="select" 
                                    name="taskType" 
                                    id="exampleSelect"
                                    onChange={this.onChange}
                                >
                                    <option>Select </option>
                                    <option>School</option>
                                    <option>Work</option>
                                    <option>Home</option>
                                    <option>Personal</option>
                                    <option>Other</option>
                                </Input>
                                <Label for="exampleDate">Due Date</Label>
                                <Input 
                                    type="date" 
                                    name="dueDate" 
                                    id="dueDate" 
                                    placeholder="date placeholder"
                                    onChange={this.onChange}
                                />
                                <Label for="exampleTime">Duration of Task</Label>
                                <Input 
                                    type="number" 
                                    name="taskDuration" 
                                    id="taskDuration" 
                                    placeholder="(in hours)"
                                    onChange={this.onChange} 
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: "2rem"}}
                                    block>
                                Add Item
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
};

const mapStateToProps = state => ({
    item: state.item
});

export default connect(mapStateToProps, {addItem})(ItemModal);