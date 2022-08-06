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

function checkHabit(id, getConfig) {
    return axios.post(`${URL}/habits/${id}/check`,{}, getConfig)
}

function unCheckHabit(id, getConfig) {
    return axios.post(`${URL}/habits/${id}/uncheck`,{}, getConfig)
}

//Gets

function getHabits(getConfig) {
    return axios.get(`${URL}/habits`, getConfig)
}

function getTodayHabits(getConfig) {
    return axios.get(`${URL}/habits/today`, getConfig)
}

function getHistoricHabits(getConfig) {
    return axios.get(`${URL}/habits/history/daily`, getConfig)
}

//Delete

function deleteHabit(id, getConfig) {
    return axios.delete(`${URL}/habits/${id}`,getConfig)
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