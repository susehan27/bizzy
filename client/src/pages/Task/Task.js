import React from "react";
import ItemModal from "../../components/ItemModal";
import List from "../../components/List";
import "./Task.css";

const Task = props => (
    <div className="container-fluid">
        <div id="tasks" class="container-fluid">
            <div className="row header">
                <div className="col">
                    <h1>Let's get started!</h1>
                    <ItemModal/>
                </div>
            </div>
            <div className="row taskList">
                <div className="col">
                    <List/>
                </div>
            </div>
        </div>
    </div>
);

export default Task;