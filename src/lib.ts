
//-----------------------
export function getUserData (): {username: string, avatarUrl: string} {
  const user = localStorage.getItem('user')
  if (user == null) return null
  return JSON.parse(user)
}

export function getFavoritesAmount (): number {
  const favoritesAmount = localStorage.getItem('favoritesAmount')
  if (favoritesAmount == null) return 0
  return JSON.parse(favoritesAmount)
}

export function renderBlock (elementId: string, html: string) :void {
  const element = document.getElementById(elementId)
  element.innerHTML = html
}

export function renderToast (message, action) {
  let messageText = ''

  if (message != null) {
    messageText = `
      <div id="info-block" class="info-block ${message.type}">
        <p>${message.text}</p>
        <button id="toast-main-action">${action?.name || 'Закрыть'}</button>
      </div>
    `
  }

  renderBlock(
    'toast-block',
    messageText
  )

  const button = document.getElementById('toast-main-action')
  if (button != null) {
    button.onclick = function() {
      if (action != null && action.handler != null) {
        action.handler()
      }
      renderToast(null, undefined)
    }
  }
}
