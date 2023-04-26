import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Done from "./Task/Done";
import Do from "./Task/Do";
import AllTasks from "./Task";
import Layout from "./Layout";
import TasksContainer from "../containers/TasksContainer";

const Main = () => {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route exact path="/" element={<AllTasks/>} />
                        {/*<Route path="/movie" element={<MovieContainer />} />*/}
                        {/*<Route path="/movie/:id" element={<SingleMovie/>} />*/}
                        <Route path="/addTask" element={<TasksContainer />} />
                        <Route path="/done" element={<Done />} />
                        <Route path="/do" element={<Do />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
};

export default Main;