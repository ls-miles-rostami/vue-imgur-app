import api from '../../api/imgur';
import qs from 'qs';
import {router} from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_token')
}
const mutations = {
  setToken : (state, token) => {
    return state.token = token
  } 
}
const actions = {
  logout: ({commit}) => {
    commit('setToken', null)
    window.localStorage.removeItem('imgur_token')
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({commit}, hash) => {
    const {access_token} =  qs.parse(hash.replace('#', ''))
    commit('setToken', access_token)
    window.localStorage.setItem('imgur_token', access_token)
    router.push('/')
  }
}
const getters = {
  isLoggedIn: state => !!state.token
}

export default {
  state,
  getters,
  actions,
  mutations
}