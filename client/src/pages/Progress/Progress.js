import React from "react";
import Container from "../../components/Container";
import NavBar from "../../components/NavBar";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import Card from "../../components/Card";
import "./Progress.css";
import API from "../../utils/API"

const Progress = () => (
    <div className="container">
        <div className="row">
            <div className="col header">
                <h2>My Progress</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                <Card title="Task 1" button="View Progress">
                    <Progress></Progress>
                </Card>
                <Card title="Task 2" button="View Progress">
                    <Progress></Progress>
                </Card>
                <Card title="Task 3" button="View Progress">
                    <Progress></Progress>
                </Card>
            </div>
        </div>
    </div>
);

export default Progress;