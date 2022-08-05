import axios from "axios";


const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

//Posts


function singUp(body) {
    return axios.post(`${URL}/auth/sign-up`, body)
}

function logIn(body) {
    return axios.post(`${URL}/auth/login`, body)
}

function createHabit(body) {
    return axios.post(`${URL}/habits`, body)
}

function checkHabit(body) {
    return axios.post(`${URL}/habits/ID_DO_HABITO/check`, body)
}

function unCheckHabit(body) {
    return axios.post(`${URL}/habits/ID_DO_HABITO/uncheck`, body)
}

//Gets

function habits(){
    return axios.get(`${URL}/habits`)
}

function getTodayHabits(){
    return axios.get(`${URL}/habits/today`)
}

function getHistoricHabits(){
    return axios.get(`${URL}/habits/history/daily`)
}

//Delete

function deleteHabit(){
    return axios.delete(`${URL}/habits/ID_DO_HABITO`)
}

export{
    singUp,
    logIn,
    createHabit,
    checkHabit,
    unCheckHabit,
    habits,
    getTodayHabits,
    getHistoricHabits,
    deleteHabit
}