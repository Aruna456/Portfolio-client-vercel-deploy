import axios from 'axios'


const API=import.meta.env.VITE_API||"http://localhost:5000"

const getProject =()=>axios.get(`${API}/Projects/all`)
const getProjectbyID=(id)=>axios.get(`${API}/Projects/all/${id}`)
const addProject=(projectdata)=>axios.post(`${API}/Projects/add`,projectdata)
const editProject=(id,projectdata)=>axios.put(`${API}/Projects/edit/${id}`,projectdata)
const deleteProject =(id)=>axios.delete(`${API}/Projects/delete/${id}`)

export {getProject,getProjectbyID,addProject,editProject,deleteProject}