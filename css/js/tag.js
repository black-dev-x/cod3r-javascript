const colors = {
  p: '#388e3c',
  div: '#1565c0',
  span: '#e53935',
  section: '#f67809',
  ul: '#5e35b1',
  ol: '#fbc02d',
  header: '#d81b60',
  nav: '#64dd17',
  main: '#00acc1',
  footer: '#304ffe',
  form: '#9f6581',
  body: '#25b6da',
  padrao: '#616161',
  get(tag) {
    return this[tag] ? this[tag] : tag.padrao
  }
}

document.querySelectorAll('.tag').forEach(tag => {
  const nomeDaTagHTML = tag.tagName.toLowerCase()
  tag.style.borderColor = colors.get(nomeDaTagHTML)
  if (!tag.classList.contains('nolabel')) {
    const label = document.createElement('label')
    label.textContent = nomeDaTagHTML
    const corDaLabel = colors.get(nomeDaTagHTML)
    label.style.backgroundColor = corDaLabel
    tag.insertBefore(label, tag.childNodes[0])
  }
})
