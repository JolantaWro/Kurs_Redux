import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import TasksContainer from "../containers/TasksContainer";
import AddTask from "../containers/AddTask";
import Done from "../containers/Done";
import Do from "../containers/ToDo";
import SingleTask from "../containers/SingleTask";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<TasksContainer/>} />
                        <Route path="/:id" element={<SingleTask/>} />
                        <Route path="/addTask" element={<AddTask />} />
                        <Route path="/done" element={<Done />} />
                        <Route path="/do" element={<Do />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
};

export default Main;