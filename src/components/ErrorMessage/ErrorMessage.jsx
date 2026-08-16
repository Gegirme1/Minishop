import './ErrorMessage.css'

function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <p className="error-message__text">⚠️ {message}</p>
      <button className="btn btn-outline">Повторить</button>
    </div>
  )
}

export default ErrorMessage