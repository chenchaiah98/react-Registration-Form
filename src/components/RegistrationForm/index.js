// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmit: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderLastNameField = () => {
    const {lastname, showLastNameError} = this.state
    const className = showLastNameError ? `input-name border-red` : 'input-name'

    return (
      <div>
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name="lastName"
          className={className}
          placeholder="kumar"
          value={lastname}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderFirstNameField = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? `input-name border-red`
      : 'input-name'

    return (
      <div>
        <label htmlFor="firstName">FirstName</label>
        <input
          type="text"
          name="fistName"
          className={className}
          placeholder="ram"
          required
          onChange={this.onChangeFirstName}
          value={firstName}
        />
      </div>
    )
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  onsubmit = e => {
    e.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmit: true})
      console.log('success')
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmit: false,
      })
      console.log('error')
    }
  }

  renderRegistrationForm = () => {
    const {showLastNameError, showFirstNameError} = this.state
    return (
      <form className="form">
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="text-red">require</p>}
        <br />
        {this.renderLastNameField()}
        {showLastNameError && <p className="text-red">require</p>}
        <button className="button" type="button" onClick={this.onsubmit}>
          submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmit: !prevState.isFormSubmit,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccess = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p>Submited succesfully</p>
      <button
        type="button"
        onClick={this.onClickSubmitAnotherResponse}
        className="button"
      >
        submit another response
      </button>
    </>
  )

  render() {
    const {isFormSubmit} = this.state

    return (
      <div className="main-app-container">
        <h1 className="main-heading">Registration</h1>
        <div className="form-main-container">
          {isFormSubmit
            ? this.renderSubmissionSuccess()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationForm
