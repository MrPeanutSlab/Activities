import { Assets } from 'premid'

const presence = new Presence({
  clientId: '636622538356686871',
})
const browsingTimestamp = Math.floor(Date.now() / 1000)

presence.on('UpdateData', async () => {
  const presenceData: PresenceData = {
    largeImageKey: 'https://cdn.rcd.gg/PreMiD/websites/R/Rocket%20League%20Garage/assets/logo.png',
  }

  if (document.location.pathname === '/') {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Viewing the home page'
  }
  else if (document.location.pathname.includes('/latestnews')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Browsing through'
    presenceData.state = 'the latest news'
  }
  else if (document.location.pathname.includes('/news/')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Reading article:'
    const title = document.querySelector(
      'body > main > section > div > div > div > div.col-2-3 > h1',
    )
    presenceData.state = title?.textContent
    presenceData.smallImageKey = Assets.Reading
  }
  else if (document.location.pathname.includes('/livefeed')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Browsing through'
    presenceData.state = 'the live feed'
  }
  else if (document.location.pathname.includes('/training/')) {
    if (document.location.pathname.includes('/sequence/')) {
      presenceData.startTimestamp = browsingTimestamp
      presenceData.details = 'Viewing training sequence:'
      const title = document.querySelector(
        '#rlg-training-page > div.row > div.col-3-3 > h1',
      )
      presenceData.state = title?.textContent
    }
    else {
      presenceData.startTimestamp = browsingTimestamp
      presenceData.details = 'Browsing training maps'
    }
  }
  else if (document.location.pathname.includes('/items')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Browsing through'
    presenceData.state = 'the item database'
  }
  else if (document.location.pathname.includes('/achievements')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Browsing through'
    presenceData.state = 'the achievements'
  }
  else if (document.location.pathname.includes('/apply')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Browsing through'
    presenceData.state = 'the applications'
  }
  else if (document.location.pathname.includes('/faq')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Browsing through'
    presenceData.state = 'the FAQ'
  }
  else if (document.location.pathname.includes('/proleague')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Viewing the proleague'
  }
  else if (document.location.pathname.includes('/rocketroyale')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Viewing the rocketroyale'
  }
  else if (document.location.pathname.includes('/about')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Viewing about the site'
  }
  else if (document.location.pathname.includes('/contact')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Viewing contact details'
  }
  else if (document.location.pathname.includes('/trading')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Viewing trading offers'
  }
  else if (document.location.pathname.includes('/trade/')) {
    presenceData.startTimestamp = browsingTimestamp
    presenceData.details = 'Viewing trade of user:'
    const title = document.querySelector(
      'body > main > div > div > div > div.col-3-3.rlg-trade-page > div.rlg-trade-display-container.is--user > div.rlg-trade-display-header > a > div > div.rlg-trade-platform-name > span:nth-child(1)',
    )
    presenceData.state = title?.textContent
  }

  if (presenceData.details)
    presence.setActivity(presenceData)
  else presence.setActivity()
})
