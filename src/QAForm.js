// QAForm.js - 質問投稿フォームコンポーネント
// このコンポーネントは、ユーザーが質問を入力し、Googleフォームに送信するためのUIを提供します

import React, { useState } from 'react'; // React本体とステート管理用のuseStateフックをインポート
import { MessageSquare } from 'lucide-react'; // メッセージアイコンをlucide-reactからインポート

const QAForm = () => {
    // ========== フォーム入力値のステート管理 ==========
    // useState()は[現在の値, 値を更新する関数]の配列を返す
    const [isPublic, setIsPublic] = useState(true);       // 公開許可のフラグ - デフォルトはtrue(公開OK)
    const [category, setCategory] = useState('自治会について'); // 質問カテゴリー - デフォルトは「自治会について」
    const [question, setQuestion] = useState('');         // 質問内容 - 初期値は空文字列
    const [slackResponse, setSlackResponse] = useState(false); // Slack回答希望フラグ - デフォルトはfalse(希望しない)
    const [studentId, setStudentId] = useState('');       // 学籍番号 - 初期値は空文字列

    // ========== フォーム送信状態のステート管理 ==========
    const [submitting, setSubmitting] = useState(false);    // 送信処理中かどうかを示すフラグ
    const [submitSuccess, setSubmitSuccess] = useState(false); // 送信成功したかどうかを示すフラグ
    const [submitError, setSubmitError] = useState(null);   // エラーメッセージを格納する変数

    // ========== 定数とユーティリティ ==========
    // カテゴリーの選択肢を配列で定義 - ドロップダウンメニューのオプションに使用
    const categories = ['自治会について', 'イベント', '学校生活', 'その他'];

    // Googleフォームの情報
    // FORM_IDはフォームの一意識別子 - GoogleフォームのURLから取得できる
    // 注：本番環境では環境変数として管理するべき情報
    const FORM_ID = '1FAIpQLSfbeK71d56M66oHMxmwLIK60s7AWr-NjYU-bGqxtUJwFKGwcg';

    // Googleフォームの応答を受け取るエンドポイントURL
    const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

    // Googleフォームの各フィールドに対応する識別子（entry.XXXXX）をマッピング
    // これらの識別子はGoogleフォームのHTMLソースを調査して取得する必要がある
    const FORM_FIELDS = {
        isPublic: 'entry.1062689994',      // 公開許可フィールド
        category: 'entry.525336379',       // カテゴリーフィールド
        question: 'entry.1439835033',      // 質問内容フィールド
        slackResponse: 'entry.1183177482', // Slack回答希望フィールド
        studentId: 'entry.1457824662'      // 学籍番号フィールド
    };

    // ========== フォーム操作関連の関数 ==========
    // フォームの入力値をリセットする関数 - 送信成功後などに呼び出される
    const resetForm = () => {
        setQuestion('');         // 質問内容をクリア
        setIsPublic(true);       // 公開許可を初期値(true)に戻す
        setSlackResponse(false); // Slack回答希望を初期値(false)に戻す
        setStudentId('');        // 学籍番号をクリア
        // カテゴリーはリセットしない（ユーザーの次の質問も同じカテゴリーである可能性が高いため）
    };

    // フォーム送信処理 - フォーム送信イベント発生時に実行される非同期関数
    const handleSubmit = async (e) => {
        // フォームのデフォルト送信挙動（ページリロード）を防止
        e.preventDefault();

        // ========== 入力値のバリデーション（検証） ==========
        // 質問が空でないか確認（空白文字のみの場合も無効）
        if (!question.trim()) {
            setSubmitError('質問内容を入力してください。');
            return; // エラーがあれば処理を中断
        }

        // Slack回答希望が選択されている場合、学籍番号が入力されているか確認
        if (slackResponse && !studentId.trim()) {
            setSubmitError('Slack回答を希望する場合は学籍番号と名前を入力してください。');
            return; // エラーがあれば処理を中断
        }

        // ========== 送信処理の準備 ==========
        // 送信中状態をtrueに設定（送信ボタンの表示を「送信中...」に変更するため）
        setSubmitting(true);
        // 以前のエラーメッセージをクリア
        setSubmitError(null);

        try {
            // ========== フォームデータの構築 ==========
            // URLSearchParamsオブジェクトを使用してフォームデータをURLエンコードされた形式で構築
            // これはHTMLフォームがデータを送信する形式と同じ
            const urlParams = new URLSearchParams();

            // 各フォームフィールドにデータを追加
            // isPublicとslackResponseはブール値なので、「はい」「いいえ」に変換
            urlParams.append(FORM_FIELDS.isPublic, isPublic ? 'はい' : 'いいえ');
            urlParams.append(FORM_FIELDS.category, category);
            urlParams.append(FORM_FIELDS.question, question);
            urlParams.append(FORM_FIELDS.slackResponse, slackResponse ? 'はい' : 'いいえ');

            // Slack回答希望がtrueでかつ学籍番号が入力されている場合のみ、学籍番号を追加
            if (slackResponse && studentId) {
                urlParams.append(FORM_FIELDS.studentId, studentId);
            }

            // デバッグ用に送信データをコンソールに出力
            // Object.fromEntries()でURLSearchParamsオブジェクトを通常のオブジェクトに変換
            console.log('送信データ:', Object.fromEntries(urlParams.entries()));

            // ========== Googleフォームにデータを送信 ==========
            // fetchを使用してPOSTリクエストを送信
            // mode: 'no-cors'を指定 - CORSエラーを回避するために必要
            // （Googleフォームへのクロスドメインリクエストになるため）
            await fetch(FORM_URL, {
                method: 'POST',  // HTTP POSTメソッド
                mode: 'no-cors', // CORS制約を回避
                headers: {
                    // Content-Typeはフォームデータの形式を指定
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                // URLSearchParamsオブジェクトを文字列に変換してリクエストボディとして送信
                body: urlParams.toString()
            });

            // ========== 送信成功時の処理 ==========
            // no-corsモードではレスポンスの内容を読み取れないため、
            // エラーがなければ成功したとみなす
            console.log('フォーム送信完了');
            setSubmitSuccess(true);  // 成功フラグを立てる（成功メッセージを表示）
            resetForm();             // フォームをリセット

            // 5秒後に成功メッセージを非表示にする
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);

        } catch (error) {
            // ========== エラー発生時の処理 ==========
            // エラー詳細をコンソールに出力（デバッグ用）
            console.error('送信エラー:', error);
            // ユーザー向けのエラーメッセージを設定
            setSubmitError('送信中にエラーが発生しました。下部のリンクから直接Googleフォームで回答してください。');
        } finally {
            // ========== 送信処理完了時の共通処理 ==========
            // 成功・失敗に関わらず送信中状態を解除（送信ボタンを通常表示に戻す）
            setSubmitting(false);
        }
    };

    // ========== 代替手段の提供 ==========
    // Googleフォームを直接開く関数 - 送信エラー時などに使用する
    const openGoogleForm = () => {
        // フォームの表示用URLを構築（formResponseではなくviewform）
        const googleFormURL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;
        // 新しいタブでGoogleフォームを開く
        window.open(googleFormURL, '_blank');
    };

    // ========== UIのレンダリング ==========
    return (
        // フォーム全体のコンテナ - 周囲の余白やスタイルを設定
        // sticky top-24で上部からスクロールしても位置を固定
        <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            {/* フォームのタイトル */}
            <h2 className="text-xl font-bold mb-6">新しい質問を投稿</h2>

            {/* 送信成功時のメッセージ - submitSuccessがtrueの場合のみ表示 */}
            {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded">
                    <p>質問が送信されました。回答をお待ちください。</p>
                </div>
            )}

            {/* エラー発生時のメッセージ - submitErrorが存在する場合のみ表示 */}
            {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
                    <p>{submitError}</p>
                </div>
            )}

            {/* フォーム要素 - onSubmitでhandleSubmit関数を呼び出し */}
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* ===== 公開許可チェックボックス ===== */}
                <div className="space-y-2">
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="isPublic"  // ラベルとの関連付けに使用
                            className="mt-1 mr-2"
                            checked={isPublic}  // 現在の状態をバインド
                            onChange={(e) => setIsPublic(e.target.checked)}  // 変更時にステートを更新
                        />
                        <label htmlFor="isPublic" className="text-sm text-gray-700">
                            情報学部自治会の公式サイトに質問の内容と回答を公開してもいいですか？
                        </label>
                    </div>
                </div>

                {/* ===== カテゴリー選択ドロップダウン ===== */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        カテゴリーを選択してください
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={category}  // 現在選択されているカテゴリーをバインド
                        onChange={(e) => setCategory(e.target.value)}  // 選択変更時にステートを更新
                    >
                        {/* categories配列からオプションを動的に生成 */}
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* ===== 質問内容テキストエリア ===== */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        質問内容
                    </label>
                    <textarea
                        rows={5}  // テキストエリアの高さ（行数）
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="質問の詳細を入力"
                        value={question}  // 現在の質問内容をバインド
                        onChange={(e) => setQuestion(e.target.value)}  // 入力変更時にステートを更新
                        required  // HTML5のバリデーション - 必須入力
                    />
                </div>

                {/* ===== Slack回答希望チェックボックス ===== */}
                <div className="space-y-2">
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="slackResponse"  // ラベルとの関連付けに使用
                            className="mt-1 mr-2"
                            checked={slackResponse}  // 現在の状態をバインド
                            onChange={(e) => setSlackResponse(e.target.checked)}  // 変更時にステートを更新
                        />
                        <label htmlFor="slackResponse" className="text-sm text-gray-700">
                            Slackでの回答を希望しますか
                        </label>
                    </div>

                    {/* ===== 条件付き表示: Slack回答希望がtrueの場合のみ学籍番号フィールドを表示 ===== */}
                    {slackResponse && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Slackでの回答を希望する人は学籍番号と名前を教えてください
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="例: 25-999 近大"
                                value={studentId}  // 現在の学籍番号をバインド
                                onChange={(e) => setStudentId(e.target.value)}  // 入力変更時にステートを更新
                                required={slackResponse}  // 条件付き必須: slackResponseがtrueの場合のみ必須
                            />
                        </div>
                    )}
                </div>

                {/* ===== 送信ボタン ===== */}
                <button
                    type="submit"  // フォーム送信ボタンとして機能
                    className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                    disabled={submitting}  // 送信中は操作不可に設定
                >
                    {/* 送信中と通常時で表示内容を切り替え */}
                    {submitting ? (
                        <span>送信中...</span>
                    ) : (
                        // 通常時はアイコンとテキストを表示
                        <>
                            <MessageSquare size={18} className="mr-2" />  {/* メッセージアイコン */}
                            質問を送信
                        </>
                    )}
                </button>

                {/* ===== 代替手段: Googleフォームへの直接リンク ===== */}
                {/* 送信に問題がある場合のバックアッププラン */}
                <div className="text-center mt-4 text-sm text-gray-500">
                    <p>
                        送信に問題がある場合は
                        <button
                            type="button"  // ボタンタイプ - フォーム送信をトリガーしない
                            onClick={openGoogleForm}  // クリック時にGoogleフォームを開く
                            className="text-purple-600 underline hover:text-purple-800 ml-1"
                        >
                            こちら
                        </button>
                        から直接Googleフォームで回答できます。
                    </p>
                </div>
            </form>
        </div>
    );
};

// コンポーネントをエクスポート - 他のファイルからインポートできるようにする
export default QAForm;