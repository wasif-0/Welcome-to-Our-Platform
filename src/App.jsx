import React from 'react'
import "./app.css"
import Button from './Component/button/Button'
import Form from './Component/Form/Form'


const App = () => {
  return (
    <>
    
       <header className="main-header">
        <h1>Welcome to Our Platform</h1>
        <p>Your gateway to a seamless experience</p>
      </header>
      <div className='btnContainer'>
        <Button btnName="Login" /> <br /><br />
        <Button btnName="Signup" /> <br /><br />
        <Button btnName="Submit" /> <br /><br />
        <Button btnName="Complete" /> <br /><br />
        <Button btnName="Start" /> <br /><br />
        <Button btnName="Logout" /> <br /><br />
        <Button btnName="End" /> <br /><br />
      </div>
      <div className="formContainer">
        <Form formId="01" stdImg="User 1" stdName="Wasif" stdDesig="Web Developer" stdId={15466} stdAnswer={true} />
        <Form formId="02" stdName="Ali" stdDesig="Graphic Designer" stdId={14865} stdAnswer={false} />
        <Form formId="03" stdName="Yousuf" stdDesig="Social Media Marketer" stdId={14789} stdAnswer={true} />
        <Form formId="04" stdName="Irfan" stdDesig="Web Developer" stdId={54878} stdAnswer={true} />
        <Form />
      </div>
    </>
  )
}

export default App