import React, {Component} from "react";
import {
    Container,
    Button, 
    Card, 
    CardHeader, 
    CardBody, 
    CardText, 
    CardTitle} 
from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {getItems, getItem, deleteItem} from "../../actions/itemActions";
import PropTypes from "prop-types";
import "./List.css";

class List extends Component {

    componentDidMount() {
        this.props.getItems();   
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id);
    }

    onClick = (id) => {
        this.props.getItem(id);
    }

    render() {
        const {items} = this.props.item;
        return(
            <Container>
                    <TransitionGroup className="list">
                        {items.map(({_id, name, taskType, taskDuration, dueDate}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <Card>
                                    <CardHeader>
                                        {taskType}
                                        <Button
                                            className="remove-btn"
                                            id="xButton"
                                            color="light"
                                            size="sm"
                                            onClick={this.onDeleteClick.bind(this, _id)}
                                        >&times;
                                        </Button>
                                    </CardHeader>
                                    <CardBody>
                                    <CardTitle>{name}</CardTitle>
                                    <CardText>Duration: {taskDuration} hour(s)</CardText>
                                    <CardText>Due: {dueDate}</CardText>
                                    <Button onClick={this.onClick.bind(this, _id)}>complete task</Button>
                                    </CardBody>
                                </Card>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
            </Container>
        );
    }
}

List.propTypes = {
    getItems: PropTypes.func.isRequired,
    item: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
});

export default connect(mapStateToProps, 
    {getItems, getItem, deleteItem}
    )(List);

