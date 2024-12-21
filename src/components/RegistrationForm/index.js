// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    frstnameError: false,
    lastnameError: false,
    submitStatus: false,
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    const checkInputsEmpty = firstName !== '' && lastName !== ''
    const checkFrstInput = firstName === ''
    const checkLastInput = lastName === ''
    this.setState({
      frstnameError: checkFrstInput,
      lastnameError: checkLastInput,
    })
    if (checkInputsEmpty) {
      this.setState({
        submitStatus: true,
      })
    }
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  onClickSubmitAnotherResponse = () => {
    this.setState({submitStatus: false, firstName: '', lastName: ''})
  }

  onBlurFrstName = () => {
    const {firstName} = this.state
    const isValidateInput = firstName === ''
    this.setState({
      frstnameError: isValidateInput,
    })
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    const isValidateInput = lastName === ''
    this.setState({
      lastnameError: isValidateInput,
    })
  }

  render() {
    const {firstName, lastName, frstnameError, lastnameError, submitStatus} =
      this.state
    const activeInputClass = error => (error ? 'empty-input' : 'active-input')

    console.log(submitStatus)
    return (
      <div className="bg">
        <h1 className="heading">Registration</h1>
        {submitStatus ? (
          <div className="card">
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
                alt="success"
              />
            </div>
            <div>
              <p>Submitted Successfully</p>
            </div>
            <div>
              <button
                type="button"
                className="submitNew-btn"
                onClick={this.onClickSubmitAnotherResponse}
              >
                Submit Another Response
              </button>
            </div>
          </div>
        ) : (
          <form className="card" onSubmit={this.onSubmitForm}>
            <div className="input-container">
              <label className="label" htmlFor="input-1">
                FIRST NAME
              </label>
              <input
                type="text"
                id="input-1"
                placeholder="First name"
                className="active-input"
                onChange={this.onChangeFirstName}
                value={firstName}
                onBlur={this.onBlurFrstName}
              />
              {frstnameError && <p className="failed">Required</p>}
            </div>
            <div className="input-container">
              <label className="label" htmlFor="input-2">
                LAST NAME
              </label>
              <input
                type="text"
                id="input-2"
                placeholder="Last name"
                className="active-input"
                onChange={this.onChangeLastName}
                value={lastName}
                onBlur={this.onBlurLastName}
              />
              {lastnameError && <p className="failed">Required</p>}
            </div>
            <div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    )
  }
}

export default RegistrationForm
