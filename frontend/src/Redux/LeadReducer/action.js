import axios from "axios"
import { DELETE_LEAD_SUCCESS, GET_LEAD_SUCCESS, LEAD_FAILURE, LEAD_REQUEST, PUT_LEAD_SUCCESS } from "./actionTypes";


export const getLeads =(obj)=> (dispatch) => {

dispatch({type:LEAD_REQUEST})
  axios.get(`http://localhost:8080/api/lead`,obj).then((res)=>{
    dispatch({type:GET_LEAD_SUCCESS,payload:res.data})
  }).catch((err)=>{
    dispatch({type:LEAD_FAILURE})
  })
};

// Create a new lead
export const createLead = (leadData) => (dispatch) => {
  dispatch({ type: LEAD_REQUEST });
  axios
    .post(`http://localhost:8080/api/lead`, leadData)
    .then(() => {
      dispatch(getLeads()); // Refresh leads after creation
    })
    .catch(() => {
      dispatch({ type: LEAD_FAILURE });
    });
};

// Edit an existing lead by ID
export const editLead = (id, updatedData) => (dispatch) => {
  dispatch({ type: LEAD_REQUEST });
  axios
    .put(`http://localhost:8080/api/lead/${id}`, updatedData)
    .then(() => {
      dispatch({ type: PUT_LEAD_SUCCESS });
      dispatch(getLeads()); // Refresh leads after update
    })
    .catch(() => {
      dispatch({ type: LEAD_FAILURE });
    });
};


// Delete lead by ID
export const deleteLead = (id) => (dispatch) => {
  dispatch({ type: LEAD_REQUEST });
  axios
    .delete(`http://localhost:8080/api/lead/${id}`)
    .then(() => {
      dispatch({ type: DELETE_LEAD_SUCCESS });
      dispatch(getLeads()); // Refresh leads after deletion
    })
    .catch(() => {
      dispatch({ type: LEAD_FAILURE });
    });
};



