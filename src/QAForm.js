// QAForm.js
import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';

const QAForm = () => {
    // 各フォーム項目の状態を保持するstate
    const [isPublic, setIsPublic] = useState(true); // 公開許可
    const [category, setCategory] = useState('自治会について'); // カテゴリー
    const [question, setQuestion] = useState(''); // 質問内容
    const [slackResponse, setSlackResponse] = useState(false); // Slack回答希望
    const [studentId, setStudentId] = useState(''); // 学籍番号

    // フォーム送信の状態を管理するstate
    const [submitting, setSubmitting] = useState(false); // 送信中かどうか
    const [submitSuccess, setSubmitSuccess] = useState(false); // 送信成功したかどうか
    const [submitError, setSubmitError] = useState(null); // エラーメッセージ

    // カテゴリーの選択肢
    const categories = ['自治会について', 'イベント', '学校生活', 'その他'];

    // Googleフォームの情報[]
    //後で環境変数に入れる
    const FORM_ID = '1FAIpQLSfbeK71d56M66oHMxmwLIK60s7AWr-NjYU-bGqxtUJwFKGwcg';

    const FORM_URL = `https://docs.google.com/forms/d/e/${FORM_ID}/formResponse`;

    // Googleフォームのフィールド名（entry.XXXXXはGoogleフォームの各項目に対応する識別子）
    const FORM_FIELDS = {
        isPublic: 'entry.1062689994',      // 公開許可フィールド
        category: 'entry.525336379',       // カテゴリーフィールド
        question: 'entry.1439835033',      // 質問内容フィールド
        slackResponse: 'entry.1183177482', // Slack回答希望フィールド
        studentId: 'entry.1457824662'      // 学籍番号フィールド
    };

    // フォームの入力値をリセットする関数
    const resetForm = () => {
        setQuestion('');
        setIsPublic(true);
        setSlackResponse(false);
        setStudentId('');
    };

    // フォーム送信処理
    const handleSubmit = async (e) => {
        // フォームのデフォルト送信を防止
        e.preventDefault();

        // 入力値の検証
        if (!question.trim()) {
            setSubmitError('質問内容を入力してください。');
            return;
        }

        if (slackResponse && !studentId.trim()) {
            setSubmitError('Slack回答を希望する場合は学籍番号と名前を入力してください。');
            return;
        }

        // 送信中状態にする
        setSubmitting(true);
        setSubmitError(null);

        try {
            // URLSearchParamsオブジェクトを使用してフォームデータを構築
            const urlParams = new URLSearchParams();

            // 各フォームフィールドにデータを追加
            urlParams.append(FORM_FIELDS.isPublic, isPublic ? 'はい' : 'いいえ');
            urlParams.append(FORM_FIELDS.category, category);
            urlParams.append(FORM_FIELDS.question, question);
            urlParams.append(FORM_FIELDS.slackResponse, slackResponse ? 'はい' : 'いいえ');

            if (slackResponse && studentId) {
                urlParams.append(FORM_FIELDS.studentId, studentId);
            }

            // デバッグ用に送信データをコンソールに出力
            console.log('送信データ:', Object.fromEntries(urlParams.entries()));

            // GoogleフォームにPOSTリクエストを送信
            // no-corsモードを使用（CORSエラーを回避するため）
            await fetch(FORM_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: urlParams.toString()
            });

            // 送信に成功したとみなす（no-corsモードではレスポンスの内容を読み取れないため）
            console.log('フォーム送信完了');
            setSubmitSuccess(true);
            resetForm();

            // 5秒後に成功メッセージを消す
            setTimeout(() => {
                setSubmitSuccess(false);
            }, 5000);
        } catch (error) {
            // エラーが発生した場合の処理
            console.error('送信エラー:', error);
            setSubmitError('送信中にエラーが発生しました。下部のリンクから直接Googleフォームで回答してください。');
        } finally {
            // 送信中状態を解除
            setSubmitting(false);
        }
    };

    // Googleフォームを直接開く関数
    const openGoogleForm = () => {
        const googleFormURL = `https://docs.google.com/forms/d/e/${FORM_ID}/viewform`;
        window.open(googleFormURL, '_blank');
    };

    return (
        <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
            <h2 className="text-xl font-bold mb-6">新しい質問を投稿</h2>

            {/* 送信成功時のメッセージ */}
            {submitSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-4 rounded">
                    <p>質問が送信されました。回答をお待ちください。</p>
                </div>
            )}

            {/* エラー発生時のメッセージ */}
            {submitError && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-4 rounded">
                    <p>{submitError}</p>
                </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* 公開許可チェックボックス */}
                <div className="space-y-2">
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="isPublic"
                            className="mt-1 mr-2"
                            checked={isPublic}
                            onChange={(e) => setIsPublic(e.target.checked)}
                        />
                        <label htmlFor="isPublic" className="text-sm text-gray-700">
                            情報学部自治会の公式サイトに質問の内容と回答を公開してもいいですか？
                        </label>
                    </div>
                </div>

                {/* カテゴリー選択ドロップダウン */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        カテゴリーを選択してください
                    </label>
                    <select
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        {categories.map((cat) => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* 質問内容テキストエリア */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        質問内容
                    </label>
                    <textarea
                        rows={5}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        placeholder="質問の詳細を入力"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        required
                    />
                </div>

                {/* Slack回答希望チェックボックス */}
                <div className="space-y-2">
                    <div className="flex items-start">
                        <input
                            type="checkbox"
                            id="slackResponse"
                            className="mt-1 mr-2"
                            checked={slackResponse}
                            onChange={(e) => setSlackResponse(e.target.checked)}
                        />
                        <label htmlFor="slackResponse" className="text-sm text-gray-700">
                            Slackでの回答を希望しますか
                        </label>
                    </div>

                    {/* Slack回答希望が選択されている場合のみ表示 */}
                    {slackResponse && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Slackでの回答を希望する人は学籍番号と名前を教えてください
                            </label>
                            <input
                                type="text"
                                className="w-full p-2 border border-gray-300 rounded-lg"
                                placeholder="例: 25-999 近大"
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                required={slackResponse}
                            />
                        </div>
                    )}
                </div>

                {/* 送信ボタン */}
                <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center"
                    disabled={submitting}
                >
                    {submitting ? (
                        <span>送信中...</span>
                    ) : (
                        <>
                            <MessageSquare size={18} className="mr-2" />
                            質問を送信
                        </>
                    )}
                </button>

                {/* 代替手段としてGoogleフォームへの直接リンク */}
                <div className="text-center mt-4 text-sm text-gray-500">
                    <p>
                        送信に問題がある場合は
                        <button
                            type="button"
                            onClick={openGoogleForm}
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

export default QAForm;