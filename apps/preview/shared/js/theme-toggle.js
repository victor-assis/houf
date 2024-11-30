const storageKey = 'theme-preference'

const getColorPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const theme = {
  value: getColorPreference()
}

const reflectPreference = () => {
  document.firstElementChild.setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value)
  reflectPreference()
}

const onClick = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'

  setPreference()
}

reflectPreference()

export function onLoadThemeToggle() {
  reflectPreference()
  document.querySelector('#theme-toggle')?.addEventListener('click', onClick)
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference()
  })
