const EDITOR_URL = 'https://test.skohub.io/editor/'
const SCHEMA_URL = 'https://raw.githubusercontent.com/literarymachine/oer-metadata-schemas/generic-OER/oer.json'

const url = new URL(EDITOR_URL)
url.searchParams.set('schema', SCHEMA_URL)

const pageGetData = () => {
  return {
    name: document.title,
    id: window.location.href,
    description: (document.querySelector('meta[name=description]') && document.querySelector('meta[name=description]').content) ||
    (document.querySelector('meta[property="og:description"]') && document.querySelector('meta[property="og:description"]').content) ||
    (document.querySelector('meta[property="twitter:description"]') && document.querySelector('meta[property="twitter:description"]').content) ||
     ''
  }
}

const data = pageGetData()
Object.entries(data).map(([key, value]) => {
  url.searchParams.set(key, encodeURIComponent(value))
})

window.open(url.href, '_blank')
