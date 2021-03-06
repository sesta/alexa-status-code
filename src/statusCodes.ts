export const statusCodeMap = {
  100: 'その時点までのすべてに問題がなくクライアントはリクエストを継続してよい、またもしリクエストが完了している場合は無視してよいことを示します。',
  101: 'Upgradeリクエストヘッダーのレスポンスとして送信され、サーバーはプロトコルを切り替えていることを示します。',
  102: 'サーバーはリクエストを受け取って処理しているが、まだレスポンスを提供できないことを示します。',
  200: 'リクエストが成功したことを示します。',
  201: 'リクエストは成功し、その結果新たなリソースが作成されたことを示します。',
  202: 'リクエストは受理されましたが、まだ実行されていないことを示します。',
  203: '返されるメタ情報のセットが生成元のサーバーから得られるセットと同一ではなく、ローカルまたは第三者の持つ複製から収集したことを表します。',
  204: 'リクエストに対して送信するコンテンツはありませんが、ヘッダーは有用であることを示します。',
  205: 'リクエストの完了後に送信され、ユーザーエージェントに対し、リクエストを送信した文書の表示をリセットするよう伝達します。',
  206: 'クライアントがダウンロードを複数のストリームに分けるためにRangeヘッダーを送信したことを理由として使用します。',
  207: '複数の状態コードがあてはまる状況で、複数のリソースに関する情報を伝えます。',
  208: '同じコレクションに繰り返し複数のバインディングする内部メンバーを列挙することを避けるため使用します。',
  226: 'サーバーはリソースへのGETリクエストの処理を完了しており、レスポンスは現在のインスタンスに適用された1つ以上のinstance manipulationの結果を表します。',

  300: 'リクエストに対して複数のレスポンスがあることを示します。',
  301: 'リクエストされたリソースのURIが変更されたことを示します。',
  302: 'リクエストされたリソースのURIが一時的に変更されたことを示します。',
  303: 'サーバーはこのレスポンスを、リクエストされたリソースを別のURIでGETリクエストを使用して取得するようクライアントを誘導するために送信します。',
  304: 'これはキャッシュ用に使用します。このレスポンスコードはクライアントに対して、レスポンスは変更されていないことを示します。',
  305: 'これは旧バージョンのHTTP仕様書で、リクエストされたレスポンスはプロキシからアクセスしなければならないことを示していました。',
  306: 'このレスポンスコードは使用されす、現在は予約済みです。',
  307: 'サーバーはこのレスポンスを、リクエストされたリソースを別のURIで、元のリクエストと同じメソッドを使用して取得するようクライアントを誘導するために送信します',
  308: 'リソースがLocation: HTTPレスポンスヘッダーで指定した別のURIへ永続的に置かれていることを示します。',

  400: '構文が無効であるためサーバーがリクエストを理解できないことを示します。',
  401: 'クライアントはリクエストされたレスポンスを得るためには認証を受けなければなりません。',
  402: 'このレスポンスコードは、将来のために予約されています。',
  403: '認証されていないなどの理由でクライアントにコンテンツのアクセス権がなく、サーバーが適切なレスポンスの返信を拒否していることを示します。',
  404: 'サーバーがリクエストされたリソースを発見できないことを示します。',
  405: 'サーバーがリクエストメソッドを理解しているものの、無効にされており使用することができません。',
  406: 'ウェブサーバーが サーバー駆動型コンテンツネゴシエーション を行った結果、ユーザーエージェントから与えられた条件に合うコンテンツが見つからない場合に送信されます。',
  407: 'クライアントはリクエストされたレスポンスを得るためには認証を受けなければなりません。401とはプロキシサーバーが認証を要求している点が異なります。',
  408: 'クライアントが以前にリクエストを行っていない、アイドル状態のコネクションにおいて一部のサーバーが送信します。',
  409: 'リクエストがサーバーの現在の状態と矛盾する場合に送られるでしょう。',
  410: 'リクエストされたコンテンツがサーバーから永久に削除され、転送先アドレスがない場合に送られます。',
  411: 'サーバーがContent-Lengthヘッダー項目を要求しているが、リクエストで定義されていないために、サーバーがリクエストを拒否したことを示します。',
  412: 'サーバー側で適合しない前提条件が、クライアント側のヘッダーに含まれていることを示します。',
  413: 'リクエストの本体がサーバーで定めている上限を超えていることを示します。',
  414: 'クライアントがリクエストしたURIが、サーバーで扱える長さを超えていることを示します。',
  415: 'リクエストされたデータのメディア形式をサーバーが対応しておらず、サーバーはリクエストを拒否したことを示します。',
  416: 'リクエスト内のRangeヘッダー項目で指定された範囲を満たすことができないことを示します。指定した範囲が、目的のURIのデータサイズを超えている可能性があります。',
  417: 'Expectリクエストヘッダーで指定された内容がサーバー側と適合しないことを示します。',
  418: 'サーバーは、ティーポットでコーヒーを淹れようとする試みを拒否します。',
  421: 'リクエストは、レスポンスを生成できないサーバーに送られました。',
  422: 'リクエストは適正ですが、意味が誤っているために従うことができません。',
  423: 'アクセス中のリソースはロックされています。',
  424: '前のリクエストが失敗したため、このリクエストも失敗しました。',
  426: 'サーバーは現在のプロトコルを使用したリクエストの実行を拒否しましたが、クライアントが別のプロトコルにアップグレードした後は受け入れることができます。',
  428: 'オリジンサーバーはリクエストが条件付きになることを必要としています。',
  429: 'ユーザーは一定の時間内に大量のリクエストを送信しました。',
  431: 'ヘッダー項目が大きすぎるため、サーバーはリクエストの処理を望みません。ヘッダー項目のサイズを削減した後に、リクエストを再送信できます。',
  451: 'ユーザーが政府によって検閲されたウェブページなど、違法なリソースをリクエストしています。',

  500: 'サーバー側で処理方法がわからない事態が発生したことを示します。',
  501: 'リクエストメソッドをサーバーが対応しておらず、扱えないことを示します。',
  502: 'リクエストの処理に必要なレスポンスを受け取るゲートウェイとして動作するサーバーが無効なレスポンスを受け取ったことを示します。',
  503: 'サーバーはリクエストを処理する準備ができていないことを示します。',
  504: 'このエラーレスポンスは、ゲートウェイとして動作するサーバーが時間内にレスポンスを得られない場合に送られます。',
  505: 'リクエストで使用したHTTPのバージョンをサーバーが対応していないことを示します。',
  506: 'サーバー内部で設定エラーが発生しました。リクエストの透過的コンテンツネゴシエーションで循環参照が発生しました。',
  507: 'サーバー内部で設定エラーが発生しました。選択したバリアントリソースは透過的コンテンツネゴシエーション自体に携わるよう設定されており、ネゴシエーションプロセスが適切に終了しません。',
  508: 'サーバーは、リクエストの処理中に無限ループを検出しました。',
  510: 'サーバーがリクエストを処理するために、リクエストをさらに拡張することが必要です。',
  511: 'クライアントがネットワークでアクセスするために認証が必要であることを示します。',
}
