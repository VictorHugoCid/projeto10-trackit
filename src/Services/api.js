import axios from "axios";


const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

//Posts


function singUp(body) {
    return axios.post(`${URL}/auth/sign-up`, body)
}

function logIn(body) {
    return axios.post(`${URL}/auth/login`, body)
}

function createHabit(body, getConfig) {
    return axios.post(`${URL}/habits`, body, getConfig)
}

function checkHabit(body) {
    return axios.post(`${URL}/habits/ID_DO_HABITO/check`, body)
}

function unCheckHabit(body) {
    return axios.post(`${URL}/habits/ID_DO_HABITO/uncheck`, body)
}

//Gets

function getHabits(getConfig) {
    return axios.get(`${URL}/habits`, getConfig)
}

function getTodayHabits(getConfig) {
    return axios.get(`${URL}/habits/today`, getConfig)
}

function getHistoricHabits() {
    return axios.get(`${URL}/habits/history/daily`)
}

//Delete

function deleteHabit() {
    return axios.delete(`${URL}/habits/ID_DO_HABITO`)
}

export {
    singUp,
    logIn,
    createHabit,
    checkHabit,
    unCheckHabit,
    getHabits,
    getTodayHabits,
    getHistoricHabits,
    deleteHabit
}