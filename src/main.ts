import { Context, handler, Request, RequestBody } from 'alexa-sdk'

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
    // うまく取得できなかった場合はとりあえず謝る
    let message = 'すいません、わかりませんでした。もう一度お願いします。'
    try {
      // tslint:disable-next-line:no-invalid-this
      statusCode = this.event.request.intent.slots.statusCode.resolutions.resolutionsPerAuthority[0].values[0].value.name
    } catch (e) {
      console.log(e)
    }

    // ちゃんと辞書に登録されていたら意味を伝える
    if (statusCode !== undefined && statusCodeMap[statusCode] !== undefined) {
      message = `${statusCode}ですね。${statusCodeMap[statusCode]} 他にありますか？`
      // tslint:disable-next-line:no-invalid-this
      this.emit(':askWithCard', message, '他にありますか？', statusCode, statusCodeMap[statusCode])

      return
    }

    // tslint:disable-next-line:no-invalid-this
    this.emit(':ask', message)
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
