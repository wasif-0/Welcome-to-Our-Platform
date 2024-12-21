import React from 'react'

const Form = ({formId = "00000", stdName = "Your Name", stdDesig="Your Designation",stdId="our ID", stdAnswer=false }) => {
  return (
    <div className='form'>
        <h1>FORM # {formId}</h1>
        <h2>Name : {stdName} </h2>
        <h3>Designation : {stdDesig} </h3>
        <h3>ID : {stdId} </h3>
        <h3>Status: {stdAnswer ? "True": "False"} </h3>
    </div>
  )
}

export default Form