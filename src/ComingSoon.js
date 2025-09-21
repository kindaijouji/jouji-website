import React, { useState } from 'react';
import { Umbrella, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';
import UmbrellaLendingCalendar from './UmbrellaLendingCalendar';

function ComingSoon() {
    const [activeTab, setActiveTab] = useState(null);

    const toggleTab = (tab) => {
        setActiveTab(prev => (prev === tab ? null : tab));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4 pt-16">
            <div className="w-full px-4 md:px-8 py-8 text-center">
                {/* アイコンとタイトル */}
                <div className="mb-8">
                    <Umbrella size={64} className="mx-auto text-blue-600" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    傘の貸し出しサービス
                </h1>

                {/* カレンダー */}
                <div className="my-8">
                    <UmbrellaLendingCalendar />
                </div>

                {/* 注意事項 */}
                <div className="mt-8 text-left">
                    <div className="flex items-start bg-yellow-50 rounded-lg p-4">
                        <AlertCircle size={20} className="text-yellow-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-yellow-700">
                            <span className="font-semibold">注意事項：</span>
                            <ul className="mt-1 space-y-1">
                                <li>・ 学生証の提示が必要です</li>
                                <li>・ 返却期限を必ずお守りください</li>
                                <li>・ 破損・紛失時は情報学部自治会までお知らせください。</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 規約ボタン */}
                <div className="mt-10">
                    <div className="flex justify-center gap-6 mb-4">
                        <button
                            onClick={() => toggleTab("a")}
                            className={`flex items-center px-4 py-2 rounded-lg font-semibold transition ${
                                activeTab === "a"
                                    ? "bg-blue-600 text-white"
                                    : "bg-blue-100 hover:bg-blue-200 text-blue-700"
                            }`}
                        >
                            利用規約
                            {activeTab === "a" ? (
                                <ChevronUp size={18} className="ml-1" />
                            ) : (
                                <ChevronDown size={18} className="ml-1" />
                            )}
                        </button>
                    </div>

                    {/* ロビー用の利用規約 */}
                    {activeTab === "a" && (
                        <div className="mb-6 text-sm text-gray-700 bg-gray-50 p-4 rounded-xl text-left leading-relaxed space-y-2">
                            <p className="font-bold text-base">傘貸出サービス利用規約</p>
                            <p className="pl-4">
                                本利用規約（以下、「本規約」）は、近畿大学生を対象とした傘貸出サービス（以下、「本サービス」）の利用に関する条件を定めるものです。利用者は、本サービスを利用することで、本規約に同意したものとみなします。
                            </p>

                            <p className="font-bold mt-4">第1条（貸出対象者）</p>
                            <p className="pl-4">
                                本サービスは、近畿大学に在籍する学生（以下、「利用者」）のみが利用できます。
                            </p>

                            <p className="font-bold mt-4">第2条（貸出方法）</p>
                            <p className="pl-4">
                                1.利用者は、貸出場所のリーダー端末に学生証を読み取らせ、画面の指示に従って貸出手続きを行うものとします。<br />
                                2.貸出は一度に1本までとし、貸出記録はデータベース上で管理されます。
                            </p>

                            <p className="font-bold mt-4">第3条（返却方法）</p>
                            <p className="pl-4">
                                1.利用者は、貸出場所のリーダー端末に学生証を読み取らせ、画面の指示に従って返却手続きを行うものとします。<br />
                                2.延滞情報はデータベース上で管理されます。
                            </p>

                            <p className="font-bold mt-4">第4条（貸出期間および延滞時の対応）</p>
                            <p className="pl-4">
                                1.利用者は、土日を除く貸出後3日以内に返却するものとします。<br />
                                2.返却期限を過ぎて返却した場合、貸出日から1ヶ月以内であれば警告のみが行われます。<br />
                                3.貸出日から1ヶ月が経過しても傘の返却が行われない場合、担当者による直接の返却通告が行われます。<br />
                                4.延滞後であっても、返却手続きを完了すれば、再び傘を借りることができます。<br />
                                5.1ヶ月以上の延滞による通告を2回受けた場合、それ以降の傘の貸出を行いません。
                            </p>

                            <p className="font-bold mt-4">第5条（傘の破損および賠償）</p>
                            <p className="pl-4">
                                1.通常の使用による消耗、および強風による破損については、利用者に責任は生じません。<br />
                                2.前項の規定にかかわらず、破損を報告せずに通常の返却手続きを行い、後に破損が発覚した場合、状況に応じて後日対応をお願いすることがあります。<br />
                                3.貸出中に傘が盗難された場合、その旨を速やかに報告してください。明らかな過失が認められた場合のみ、本サービスの運営者が必要と判断する対応を行うものとします。<br />
                                4.故意または重大な過失により傘の破損が起きた場合、破損の報告を行えば罪を問うことはありません。
                            </p>

                            <p className="font-bold mt-4">第6条（無断持ち出しの禁止）</p>
                            <p className="pl-4">
                                1.貸出手続きを行わずに傘を持ち出したことが発覚した場合、Slackにより警告が行われます。<br />
                                2.同様の行為が繰り返し認められる場合、直接の注意を行うとともに、状況に応じて担当教員への連絡を行う場合があります。<br />
                                3.無断持ち出しの上、返却が行われなかった場合、状況に応じて本サービスの運営者が必要と判断する対応を行うものとします。
                            </p>

                            <p className="font-bold mt-4">第7条（無断放置傘の取り扱い）</p>
                            <p className="pl-4">
                                1.貸出・返却場所である傘立てに、本サービスの貸出用であることを示す目印が貼られていない傘が置かれていた場合、当該傘が借用されたものであるかどうかにかかわらず、本サービスの運営者は、当該傘を新たに貸出用の傘として回収することがあります。
                            </p>

                            <p className="font-bold mt-4">第8条（免責事項）</p>
                            <p className="pl-4">
                                1.本サービスの傘の使用により生じた事故や損害について、本サービス運営者は一切の責任を負いません。<br />
                                2.システム障害により貸出が不可能になった場合、または貸出台数が上限に達した場合、本サービス運営者はその補償を行いません。<br />
                                3.本サービス運営者は、事前の通知なしに本規約を変更できるものとします。
                            </p>

                            <p className="font-bold mt-4">第9条（問い合わせ）</p>
                            <p className="pl-4">
                                1.傘が破損した場合、返却前に情報学部自治会ホームページの質問箱、もしくは情報学部自治会のInstagramのDMを通じて報告を行ってください。<br />
                                2.問い合わせへの返信は、原則として3日以内に行います。
                            </p>

                            <p className="font-bold mt-4">第10条（個人情報の取扱い）</p>
                            <p className="pl-4">
                                1.本サービスでは、貸出管理のために学籍番号を収集します。<br />
                                2.収集した学籍番号は、傘貸出サービスの運営目的のみに使用し、それ以外の目的には利用しません。
                            </p>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}

export default ComingSoon;
