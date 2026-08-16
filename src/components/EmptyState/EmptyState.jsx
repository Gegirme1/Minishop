import './EmptyState.css'

function EmptyState({ title, message }) {
  return (
    <div className="empty-state">
      <p className="empty-state__icon">🛒</p>
      <h2 className="empty-state__title">{title}</h2>
      <p className="empty-state__message">{message}</p>
    </div>
  )
}

export default EmptyState