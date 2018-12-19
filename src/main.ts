import { Context, handler, Request, RequestBody } from 'alexa-sdk'

import { messageMap } from './message'
import { statusCodeMap } from './statusCodes'

const APP_ID: string = undefined

export const handle = (event: RequestBody<Request>, context: Context): void => {
  const alexa = handler(event, context)
  alexa.appId = APP_ID
  alexa.registerHandlers(handlers)
  alexa.execute()
}

const handlers: {[key: string]: () => void} = {
  'LaunchRequest'(): void {
    const message = '意味を知りたいステータスコードを教えてください。'

    // tslint:disable-next-line:no-invalid-this
    this.emit(':ask', message)
  },
  'StatusIntent'(): void {
    let statusCode
    try {
      // tslint:disable-next-line:no-invalid-this
      console.log(`発話内容: ${this.event.request.intent.slots.statusCode.value}`)
      // tslint:disable-next-line:no-invalid-this
      statusCode = this.event.request.intent.slots.statusCode.resolutions.resolutionsPerAuthority[0].values[0].value.name
    } catch (e) {
      // tslint:disable-next-line:no-invalid-this
      this.emit(':ask', messageMap.onceAgein)
      console.log('エラーが発生しました')
      console.log(e)

      return
    }

    if (statusCode === undefined || statusCodeMap[statusCode] === undefined) {
      // tslint:disable-next-line:no-invalid-this
      this.emit(':ask', messageMap.onceAgein)
      console.log(`不明なステータスコードです: ${statusCode}}`)

      return
    }

    const message = `${statusCode}ですね。${statusCodeMap[statusCode]} ${messageMap.askMore}`
    // tslint:disable-next-line:no-invalid-this
    this.emit(':askWithCard', message, messageMap.askMore, statusCode, statusCodeMap[statusCode])
  },
  'AMAZON.HelpIntent'(): void {
    // tslint:disable-next-line:no-invalid-this
    this.emit(':ask', 'HTTPのステータスコードの意味をお伝えします。知りたいステータスコードをどうぞ。', 'どうしますか？')
  },
  'AMAZON.CancelIntent'(): void {
    // tslint:disable-next-line:no-invalid-this
    this.emit(':tell', 'ご利用いただきありがとうございました。')
  },
  'AMAZON.StopIntent'(): void {
    // tslint:disable-next-line:no-invalid-this
    this.emit(':tell', 'ご利用いただきありがとうございました。')
  },
  'SessionEndedRequest'(): void {
    // tslint:disable-next-line:no-invalid-this
    this.emit(':tell', 'ご利用いただきありがとうございました。')
  }
}
