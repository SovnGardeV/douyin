import defaultSettings from '@/settings'

const title = defaultSettings.title || '抖音'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
