// script.js

// 1. 模擬各分類的五個檔案資料
const categoryData = {
  rules: [
    { id: 'R-01', title: '員工手冊與行為準則', content: '【第一章 總則】\n本手冊旨在規範員工日常行為，建立良好企業文化。\n\n【第二章 服裝儀容】\n員工於上班時間應穿著整潔、得體之商務休閒服飾，避免過於暴露或隨便之裝扮。\n\n【第三章 保密條款】\n員工對於職務上所知悉之公司機密、客戶資料及技術文件，負有絕對保密之義務。離職後亦同。\n\n【第四章 職場倫理】\n嚴禁任何形式之職場霸凌、性騷擾及歧視行為。員工應秉持誠信原則執行業務，不得收受廠商不當利益。' },
    { id: 'R-02', title: '差勤與休假管理辦法', content: '【第一條 上下班時間】\n正常上班時間為 09:00 至 18:00，午休時間為 12:00 至 13:00。彈性上下班時間為前後 30 分鐘。\n\n【第二條 請假規定】\n1. 事假：需提前一日申請，全年扣薪事假以 14 日為限。\n2. 病假：全年未住院病假以 30 日為限，工資折半發給。連續請病假 2 日以上需附就醫證明。\n3. 特休：到職滿半年即享有 3 天特休，滿一年享有 7 天。請假需提前至系統申請並經主管核准。\n\n【第三條 加班規定】\n平日加班需事前填寫加班申請單，經主管核准後始得加班。加班可選擇請領加班費或換取補休。' },
    { id: 'R-05', title: '薪資與獎金發放辦法', content: '【第一條 薪資發放】\n本公司薪資結算期間為每月 1 日至月底，並於次月 5 日發放至員工指定之薪轉帳戶。遇假日則順延至次一工作日。\n\n【第二條 薪資結構】\n員工薪資包含：本薪、職務加給、伙食津貼及全勤獎金。\n\n【第三條 年終獎金】\n年終獎金依據公司當年度營運狀況及個人年度績效考核結果核發，通常於農曆春節前發放。到職未滿一年者，依比例計算。\n\n【第四條 績效獎金】\n業務部門及特定專案人員，另依相關績效考核辦法發放季獎金或專案獎金。' },
    { id: 'R-08', title: '員工教育訓練補助辦法', content: '【第一條 目的】\n為鼓勵員工持續學習、提升專業技能，特訂定本辦法。\n\n【第二條 補助對象】\n凡通過試用期之正式員工皆可提出申請。\n\n【第三條 補助範圍】\n與目前職務直接相關，或有助於公司未來發展之外部專業課程、研討會及證照考試。\n\n【第四條 補助標準】\n1. 專業課程：最高補助學費之 50%。\n2. 證照考試：考取指定專業證照者，全額補助報名費。\n3. 每人每年補助總額上限為新台幣一萬元整。\n\n【第五條 申請流程】\n課程開始前 14 日填寫《外訓申請書》，附上課程大綱與費用明細，經部門主管及 HR 核准後生效。' },
    { id: 'R-10', title: '離職與交接管理辦法', content: '【第一條 離職預告期】\n員工自請離職須依勞動基準法規定提前預告：\n1. 繼續工作三個月以上一年未滿者，於十日前預告之。\n2. 繼續工作一年以上三年未滿者，於二十日前預告之。\n3. 繼續工作三年以上者，於三十日前預告之。\n\n【第二條 交接程序】\n1. 離職預告核准後，應即刻展開業務交接。\n2. 填寫《離職交接清單》，詳列未完成事項、檔案存放位置及聯絡窗口。\n3. 歸還筆記型電腦、門禁卡、識別證等公司資產。\n\n【第三條 離職面談】\n離職當日需與 HR 進行 Exit Interview (離職面談)，並結清當月薪資與未休特休折現。' },
  ],
  processes: [
    { id: 'SOP-W05', title: '識別證補發標準作業流程', content: '【目的】規範員工識別證遺失或損毀時之補發申請作業。\n\n【作業流程】\n步驟一：發現遺失時，立即透過內部通訊軟體或電話通報 HR 部門進行卡片掛失，以防門禁遭盜用。\n步驟二：至知識庫「表單下載」區下載並填寫《識別證補發申請書》(F-12)。\n步驟三：若為遺失補發，請持申請書至財務部繳交工本費新台幣 200 元，並取得繳費收據。若為自然損毀換發則免收費。\n步驟四：將申請書及繳費收據（或損毀之舊證）交至 HR 部門辦理。\n步驟五：HR 於收件後 3 個工作天內完成新證製作，並通知員工領取。\n\n【注意事項】\n一年內遺失補發超過二次者，將列入年度考績評核參考。' },
    { id: 'SOP-H01', title: '請假與代理人設定流程', content: '【目的】確保員工請假期間業務運作順暢，並規範請假系統操作。\n\n【作業流程】\n步驟一：登入公司內部「差勤管理系統」。\n步驟二：點選「新增請假單」，選擇對應之假別（如：特休、事假、病假等）。\n步驟三：設定請假起始與結束之日期及時間。\n步驟四：於系統中指定「職務代理人」。\n步驟五：口頭或透過訊息與職務代理人確認交接事項，代理人需於系統中點選「同意代理」。\n步驟六：送出請假單，系統將自動發送簽核通知予直屬主管。\n步驟七：主管核准後，系統發送「請假成功」通知信。\n\n【注意事項】\n連續請假超過 3 日（含）以上，需向上簽核至部門最高主管。' },
    { id: 'SOP-F02', title: '國內外差旅費用核銷流程', content: '【目的】規範員工因公出差所產生之費用報銷程序。\n\n【作業流程】\n步驟一：出差結束後一週內，整理所有相關單據（高鐵票根、計程車收據、住宿發票等）。\n步驟二：下載並填寫《出差費用報銷單》(F-05)，依據交通、住宿、膳雜費等項目分類填寫。\n步驟三：將所有實體單據正本整齊黏貼於報銷單後方之憑證黏貼線內。\n步驟四：將紙本報銷單呈報直屬部門主管進行第一階段審核與簽名。\n步驟五：主管簽核後，送交財務部出納人員進行單據查核。\n步驟六：財務部確認無誤後，將於每月 15 日或 30 日（遇假日提前）將款項匯入員工薪轉帳戶。\n\n【注意事項】\n單據需打公司統一編號，若遺失單據需填寫「支出證明單」並敘明理由。' },
    { id: 'SOP-I01', title: '資訊設備異常線上報修流程', content: '【目的】提供員工快速且標準化的 IT 設備與系統報修管道。\n\n【作業流程】\n步驟一：當遇到電腦硬體故障、網路斷線或內部系統異常時，登入「IT 服務台 (HelpDesk) 系統」。\n步驟二：點選「建立新工單 (New Ticket)」。\n步驟三：選擇問題類別（如：硬體、軟體、網路、帳號權限），並於描述欄位詳細說明故障情形及發生時間。\n步驟四：盡可能附上錯誤訊息的畫面截圖，以利工程師判斷。\n步驟五：送出工單。IT 人員將於 4 小時內接單，並透過系統或電話與您聯繫。\n步驟六：問題排除後，IT 人員會將工單狀態改為「已解決」。\n步驟七：申請人確認問題已修復，並填寫滿意度問卷後結案。' },
    { id: 'SOP-H05', title: '員工離職與資產交接程序', content: '【目的】確保員工離職時，公司資產完整歸還及業務順利移轉。\n\n【作業流程】\n步驟一：員工依規定預告期提出離職申請，並經直屬主管及部門主管核准。\n步驟二：至知識庫下載《離職交接清單與切結書》(F-20)。\n步驟三：【業務交接】與主管指定之交接人逐項點交未完成專案、日常例行事務及相關電子檔案，雙方簽名確認。\n步驟四：【IT 設備歸還】將筆記型電腦、螢幕、測試手機等資訊設備歸還至 IT 部門，並由 IT 人員簽收。\n步驟五：【總務資產歸還】將門禁卡、辦公櫃鑰匙、公務車鑰匙等歸還至總務部，並由總務人員簽收。\n步驟六：離職最後工作日，攜帶完成簽核之交接清單至 HR 部門進行離職面談 (Exit Interview)。\n步驟七：HR 確認無誤後，辦理勞健保退保及薪資結算作業。' },
  ],
  forms: [
    { id: 'F-12', title: '識別證補發申請書.docx', content: '【表單名稱】識別證補發申請書\n【文件格式】Microsoft Word (.docx)\n【更新日期】2023-11-01\n\n【表單內容預覽】\n----------------------------------------\n申請人姓名：____________________\n員工編號：____________________\n所屬部門：____________________\n聯絡分機：____________________\n\n遺失/毀損日期：____年____月____日\n\n申請補發原因（請勾選）：\n□ 遺失（需至財務部繳交工本費 200 元）\n□ 晶片損毀/無法感應（免費換發，需繳回舊證）\n□ 外觀自然破損（免費換發，需繳回舊證）\n□ 其他：____________________\n\n財務部收款確認章：[          ] (非遺失者免填)\n\n申請人簽名：____________________  日期：____/____/____\n直屬主管簽核：____________________  日期：____/____/____\nHR 承辦人：____________________  日期：____/____/____\n----------------------------------------\n【填表說明】請列印出紙本，填妥並完成主管簽核後，送交 HR 部門辦理。' },
    { id: 'F-01', title: '員工請假單(紙本備用).pdf', content: '【表單名稱】員工請假單 (系統異常時備用)\n【文件格式】PDF (.pdf)\n【更新日期】2024-01-15\n\n【表單內容預覽】\n----------------------------------------\n員工姓名：____________________  員工編號：____________________\n所屬部門：____________________  職稱：____________________\n\n假別（請勾選）：\n□ 特休假  □ 事假  □ 普通傷病假  □ 生理假\n□ 婚假    □ 產假/陪產假  □ 喪假  □ 公假\n\n請假期間：\n自 ____年____月____日 ____時____分 起\n至 ____年____月____日 ____時____分 止\n共計：____天____小時\n\n請假事由說明：\n__________________________________________________\n\n職務代理人簽名：____________________ (表示同意代理)\n\n申請人簽名：____________________\n直屬主管簽核：____________________\n部門主管簽核：____________________ (請假3日以上需簽核)\nHR 登錄註記：____________________\n----------------------------------------\n【填表說明】本表單僅供差勤系統異常無法線上申請時使用。系統恢復後仍需補登。' },
    { id: 'F-05', title: '出差費用報銷單.xlsx', content: '【表單名稱】出差費用報銷單\n【文件格式】Microsoft Excel (.xlsx)\n【更新日期】2024-02-20\n\n【表單內容預覽】\n----------------------------------------\n申請人：__________  部門：__________  申請日期：____/____/____\n出差地點：__________  出差期間：____/____/____ 至 ____/____/____\n出差事由：________________________________________\n\n【費用明細】\n1. 交通費：\n   - 高鐵/火車：__________ 元\n   - 計程車：__________ 元\n   - 其他(請說明)：__________ 元\n2. 住宿費：__________ 元 (請附打統編之發票)\n3. 膳雜費：__________ 元 (依公司日支標準計算)\n4. 其他公務支出：__________ 元 (請說明：__________)\n\n總計請款金額：新台幣 ____________________ 元整\n\n【憑證黏貼區】\n(請將發票、收據正本浮貼於此欄位後方，並確保統編正確)\n\n申請人簽名：__________\n直屬主管簽核：__________\n財務部審核：__________\n----------------------------------------\n【填表說明】請下載 Excel 檔，填寫黃色底色欄位，系統會自動加總金額。列印後連同單據送簽。' },
    { id: 'F-08', title: '員工名片印製申請單.pdf', content: '【表單名稱】員工名片印製申請單\n【文件格式】PDF (.pdf)\n【更新日期】2023-08-10\n\n【表單內容預覽】\n----------------------------------------\n申請日期：____年____月____日\n\n【名片印製資訊】(請以正楷清晰填寫，避免印製錯誤)\n中文姓名：____________________\n英文姓名：____________________ (例: Da-Ming Wang 或 David Wang)\n所屬部門：____________________\n中文職稱：____________________\n英文職稱：____________________\n公司分機：(02) 2345-6789 ext. ______\n公務手機：____________________ (選填)\n公務信箱：____________________ @company.com\n\n【申請數量】\n□ 2 盒 (200張) - 一般內勤員工適用\n□ 5 盒 (500張) - 業務/公關等需常態對外人員適用\n\n申請人簽名：____________________\n直屬主管簽核：____________________\n總務部承辦人：____________________\n----------------------------------------\n【填表說明】新進員工由 HR 統一申請首批名片，後續用罄需補充者，請填寫本單送交總務部。' },
    { id: 'F-20', title: '離職交接清單與切結書.docx', content: '【表單名稱】離職交接清單與切結書\n【文件格式】Microsoft Word (.docx)\n【更新日期】2024-03-05\n\n【表單內容預覽】\n----------------------------------------\n離職人姓名：__________  員工編號：__________  部門：__________\n預定最後工作日：____年____月____日\n\n【第一部分：業務交接】(由直屬主管指定代理人)\n交接事項清單 (請另附詳細清單)：□ 已完成\n電子檔案存放路徑/權限移轉：□ 已完成\n職務代理人簽名：__________  直屬主管簽核：__________\n\n【第二部分：資訊資產歸還】(由 IT 部門點收)\n□ 筆記型電腦 (含變壓器)\n□ 測試用行動裝置\n□ 系統帳號權限停用設定\nIT 承辦人簽名：__________\n\n【第三部分：總務資產歸還】(由總務部點收)\n□ 員工識別證 & 門禁卡\n□ 辦公抽屜/置物櫃鑰匙\n□ 公務車鑰匙/停車證 (無則免)\n總務承辦人簽名：__________\n\n【第四部分：保密與競業禁止切結】\n本人聲明已將所有屬於公司之資產、文件、電子檔案全數歸還或移交，並無私自拷貝或夾帶。離職後仍將嚴格遵守公司保密協定，絕不洩漏公司機密資訊。\n\n離職人親筆簽名：____________________  日期：____/____/____\nHR 最終確認：____________________\n----------------------------------------' },
  ]
};

// 2. 擴充 11 種常見情境的 AI 語意搜尋邏輯
const intents = [
  {
    keywords: ['識別證', '弄丟', '遺失', '不見', '罰錢', '補發'],
    enKeywords: ['badge', 'lost', 'id', 'missing', 'replace', 'fee'],
    answer: '別擔心！根據【流程 SOP-W05】，您需要先向 HR 報備並填寫【表格 F-12】。另外提醒您，依據【規章 R-01】，補發需支付 200 元工本費，請留意遺失次數以免影響考核。',
    enAnswer: 'Don\'t worry! According to [SOP-W05], you need to report to HR first and fill out [Form F-12]. Please note that per [Rule R-01], a replacement fee of NT$200 applies. Be careful, as losing it multiple times may affect your performance review.',
    refs: [
      { type: 'process', id: 'SOP-W05', name: '識別證補發流程' },
      { type: 'form', id: 'F-12', name: '識別證補發申請書' },
      { type: 'rule', id: 'R-01', name: '員工手冊' }
    ]
  },
  {
    keywords: ['請假', '特休', '休假', '病假', '事假', '放假'],
    enKeywords: ['leave', 'pto', 'vacation', 'sick', 'time off', 'holiday', 'absence'],
    answer: '根據【規章 R-02】差勤管理辦法，到職滿半年即享有 3 天特休。請至差勤系統填寫線上表單，或使用備用【表格 F-01】員工請假單，並依【流程 SOP-H01】送交主管簽核。',
    enAnswer: 'According to [Rule R-02] Attendance Management, you get 3 days of PTO after 6 months of employment. Please fill out the online form in the attendance system, or use the backup [Form F-01] Leave Request Form, and submit it to your supervisor for approval per [SOP-H01].',
    refs: [
      { type: 'rule', id: 'R-02', name: '差勤管理辦法' },
      { type: 'form', id: 'F-01', name: '員工請假單' },
      { type: 'process', id: 'SOP-H01', name: '請假設定流程' }
    ]
  },
  {
    keywords: ['出差', '報銷', '車資', '高鐵', '計程車', '差旅費', '核銷'],
    enKeywords: ['travel', 'expense', 'reimbursement', 'taxi', 'train', 'hotel', 'claim', 'business trip'],
    answer: '依據【流程 SOP-F02】費用核銷流程，出差費用請填妥【表格 F-05】出差費用報銷單，附上發票或收據正本後，交由所屬部門主管簽核，再送交財務部辦理撥款。',
    enAnswer: 'Per [SOP-F02] Travel Expense Reimbursement, please fill out [Form F-05] Travel Expense Claim Form, attach the original receipts or invoices, get your department supervisor\'s approval, and submit it to the Finance Department for disbursement.',
    refs: [
      { type: 'process', id: 'SOP-F02', name: '差旅費用核銷流程' },
      { type: 'form', id: 'F-05', name: '出差費用報銷單' }
    ]
  },
  {
    keywords: ['薪水', '發薪', '薪資', '幾號', '入帳', '發錢'],
    enKeywords: ['salary', 'pay', 'payday', 'wage', 'money', 'bonus', 'paid'],
    answer: '根據【規章 R-05】薪資發放辦法，本公司固定於每月 5 日發放前月薪資。若遇例假日或國定假日，則順延至次一工作日發放。薪資單可於內部系統查詢。',
    enAnswer: 'According to [Rule R-05] Salary and Bonus Policy, salaries are paid on the 5th of each month. If the 5th falls on a weekend or holiday, it will be paid on the next working day. You can check your payslip on the internal system.',
    refs: [
      { type: 'rule', id: 'R-05', name: '薪資發放辦法' }
    ]
  },
  {
    keywords: ['電腦', '壞了', '維修', '報修', '網路', '連不上', 'IT', '資訊'],
    enKeywords: ['computer', 'broken', 'repair', 'network', 'internet', 'it', 'fix', 'issue', 'wifi'],
    answer: '若遇設備故障或網路異常，請依【流程 SOP-I01】資訊設備報修流程，至 IT 服務台填寫線上報修單。IT 工程師將於 4 小時內與您聯繫並協助處理。',
    enAnswer: 'For equipment failure or network issues, please follow [SOP-I01] IT Equipment Repair Process and submit a ticket on the IT HelpDesk system. An IT engineer will contact you within 4 hours to assist.',
    refs: [
      { type: 'process', id: 'SOP-I01', name: '資訊設備報修流程' }
    ]
  },
  {
    keywords: ['名片', '印名片', '申請名片', '用完'],
    enKeywords: ['business card', 'print', 'cards', 'run out', 'name card'],
    answer: '如需印製新名片，請填寫【表格 F-08】名片印製申請單，確認中英文職稱與聯絡資訊無誤後，交由部門主管簽核，送交總務部統一印製，作業時間約需 5-7 個工作天。',
    enAnswer: 'To print new business cards, please fill out [Form F-08] Business Card Request Form. Confirm your English/Chinese titles and contact info, get your supervisor\'s approval, and submit it to the General Affairs Department. It takes about 5-7 working days.',
    refs: [
      { type: 'form', id: 'F-08', name: '名片印製申請單' }
    ]
  },
  {
    keywords: ['加班', '加班費', '補休', '換休'],
    enKeywords: ['overtime', 'ot', 'comp time', 'extra hours'],
    answer: '辛苦了！依據【規章 R-02】差勤管理辦法，員工加班可自由選擇請領加班費或換取補休。請務必於加班發生後的一週內，至差勤系統提出申請，逾期視同放棄。',
    enAnswer: 'Thank you for your hard work! Per [Rule R-02] Attendance Management, you can choose overtime pay or comp time. Please submit your request in the attendance system within one week of the overtime, otherwise it will be forfeited.',
    refs: [
      { type: 'rule', id: 'R-02', name: '差勤管理辦法' }
    ]
  },
  {
    keywords: ['教育訓練', '上課', '進修', '補助', '課程'],
    enKeywords: ['training', 'course', 'study', 'subsidy', 'learn', 'education', 'class'],
    answer: '公司鼓勵員工持續進修！根據【規章 R-08】教育訓練補助辦法，符合職務相關條件之外部課程可申請全額或部分補助。請於報名前填寫外訓申請書送交 HR 審核。',
    enAnswer: 'We encourage continuous learning! According to [Rule R-08] Training Subsidy Policy, external courses related to your job can be fully or partially subsidized. Please submit the external training application to HR for approval before registering.',
    refs: [
      { type: 'rule', id: 'R-08', name: '教育訓練補助辦法' }
    ]
  },
  {
    keywords: ['離職', '辭職', '交接', '不做了', '離校'],
    enKeywords: ['resign', 'quit', 'leave company', 'handover', 'resignation', 'departure'],
    answer: '依據勞基法與【規章 R-10】離職管理辦法，年資滿一年需於 20 天前提出預告。請依【流程 SOP-H05】辦理各部門交接，並確實填寫【表格 F-20】離職交接清單與切結書。',
    enAnswer: 'Per labor laws and [Rule R-10] Resignation Policy, if you have worked here for over a year, a 20-day notice is required. Please follow [SOP-H05] for handover procedures and complete [Form F-20] Resignation Handover Checklist.',
    refs: [
      { type: 'rule', id: 'R-10', name: '離職管理辦法' },
      { type: 'process', id: 'SOP-H05', name: '離職交接程序' },
      { type: 'form', id: 'F-20', name: '離職交接清單' }
    ]
  },
  {
    keywords: ['停車', '車位', '停車場', '機車', '汽車'],
    enKeywords: ['parking', 'car', 'motorcycle', 'space', 'park', 'vehicle'],
    answer: '總部大樓地下室設有員工專屬停車場。如需申請，請填寫停車位申請書交至總務部。車位將依據員工年資及職級進行候補分配，每月酌收清潔費。',
    enAnswer: 'There is an exclusive employee parking lot in the basement of the headquarters. To apply, please submit a parking space application to the General Affairs Department. Spaces are allocated based on seniority and rank, with a monthly cleaning fee.',
    refs: []
  },
  {
    keywords: ['特約', '商店', '福利', '優惠', '餐廳'],
    enKeywords: ['discount', 'store', 'benefit', 'restaurant', 'perk', 'welfare'],
    answer: '福委會每年會積極洽談並更新特約商店名單。您可至內部入口網站的「福委會專區」下載最新版本的特約商店優惠列表，結帳時出示員工識別證即可享有折扣。',
    enAnswer: 'The Employee Welfare Committee actively updates the list of partner stores every year. You can download the latest discount list from the "Welfare Committee" section on the internal portal. Just show your employee ID badge at checkout to enjoy the discounts.',
    refs: []
  }
];

// --- DOM Elements ---
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchBtnText = document.getElementById('searchBtnText');
const searchBtnSpinner = document.getElementById('searchBtnSpinner');
const searchResultArea = document.getElementById('searchResultArea');

const categoryModal = document.getElementById('categoryModal');
const modalContainer = document.getElementById('modalContainer');
const modalTitleText = document.getElementById('modalTitleText');
const modalTitleIcon = document.getElementById('modalTitleIcon');
const modalBody = document.getElementById('modalBody');
const modalBackBtn = document.getElementById('modalBackBtn');

// State
let currentCategory = null;
let currentFile = null;

// Initialize Lucide icons
lucide.createIcons();

// --- Search Logic ---
searchInput.addEventListener('input', () => {
  searchBtn.disabled = searchInput.value.trim() === '';
});

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const query = searchInput.value.trim();
  if (!query) return;

  // Loading state
  searchBtn.disabled = true;
  searchBtn.classList.add('opacity-50', 'cursor-not-allowed');
  searchBtnText.textContent = '思考中... / Thinking...';
  searchBtnSpinner.classList.remove('hidden');
  searchResultArea.classList.remove('fade-in');
  
  setTimeout(() => {
    searchResultArea.classList.add('hidden');
  }, 300); // Wait for fade out

  setTimeout(() => {
    // Reset loading state
    searchBtn.disabled = false;
    searchBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    searchBtnText.textContent = 'AI 搜尋 / Search';
    searchBtnSpinner.classList.add('hidden');

    // Language Detection & Logic
    const isEnglish = /^[a-zA-Z0-9\s.,?!'"\-_]+$/.test(query);
    const queryLower = query.toLowerCase();
    let bestMatch = null;
    let maxScore = 0;

    intents.forEach(intent => {
      let score = 0;
      const keywordsToMatch = isEnglish ? (intent.enKeywords || []) : intent.keywords;
      
      keywordsToMatch.forEach(kw => {
        if (queryLower.includes(kw.toLowerCase())) score++;
      });

      // Fallback check for the other language
      if (score === 0) {
        const otherKeywords = isEnglish ? intent.keywords : (intent.enKeywords || []);
        otherKeywords.forEach(kw => {
          if (queryLower.includes(kw.toLowerCase())) score += 0.5;
        });
      }

      if (score > maxScore) {
        maxScore = score;
        bestMatch = intent;
      }
    });

    let answer = '';
    let refs = [];
    if (bestMatch && maxScore > 0) {
      answer = isEnglish ? bestMatch.enAnswer : bestMatch.answer;
      refs = bestMatch.refs || [];
    } else {
      answer = isEnglish 
        ? 'Sorry, I couldn\'t find an exact match in the knowledge base. Please try rephrasing your question or contact the relevant department.'
        : '抱歉，我目前無法在知識庫中找到與您問題完全相符的解答。建議您換個方式描述，或直接聯絡相關部門。';
    }

    renderSearchResult(answer, refs);
  }, 1500);
});

function renderSearchResult(answer, refs) {
  let refsHtml = '';
  if (refs && refs.length > 0) {
    const refsCards = refs.map((ref) => {
      let icon = '';
      if (ref.type === 'process') icon = '<i data-lucide="git-merge" class="w-4 h-4 text-purple-600"></i>';
      if (ref.type === 'form') icon = '<i data-lucide="file-text" class="w-4 h-4 text-green-600"></i>';
      if (ref.type === 'rule') icon = '<i data-lucide="book-open" class="w-4 h-4 text-blue-600"></i>';

      return `
        <div onclick="openRef('${ref.type}', '${ref.id}')" class="bg-gray-50 border border-gray-200 rounded-lg p-3 text-sm hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-pointer flex items-center justify-between group">
          <div class="flex items-center gap-2">
            ${icon}
            <span class="text-gray-700 font-medium">${ref.id}</span>
          </div>
          <i data-lucide="chevron-right" class="w-4 h-4 text-gray-400 group-hover:text-[#1A237E] transition-colors"></i>
        </div>
      `;
    }).join('');
    refsHtml = `<div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">${refsCards}</div>`;
  }

  searchResultArea.innerHTML = `
    <div class="bg-white border border-[#1A237E]/20 rounded-2xl p-6 shadow-lg relative overflow-hidden">
      <div class="absolute top-0 left-0 w-1 h-full bg-[#1A237E]"></div>
      <div class="flex items-start gap-4">
        <div class="mt-1 p-2 bg-blue-50 rounded-lg shrink-0">
          <i data-lucide="sparkles" class="w-5 h-5 text-[#1A237E]"></i>
        </div>
        <div class="flex-1">
          <h3 class="text-sm font-semibold text-[#1A237E] uppercase tracking-wider mb-2">AI 助理建議</h3>
          <p class="text-gray-800 leading-relaxed text-lg">${answer}</p>
          ${refsHtml}
        </div>
      </div>
    </div>
  `;
  
  searchResultArea.classList.remove('hidden');
  // Trigger reflow to restart animation
  void searchResultArea.offsetWidth;
  searchResultArea.classList.add('fade-in');
  lucide.createIcons();
}

// --- Modal & Category Logic ---
window.openCategory = function(category) {
  currentCategory = category;
  currentFile = null;
  
  let title = '';
  let icon = '';
  if (category === 'rules') {
    title = '規章制度列表';
    icon = '<i data-lucide="book-open" class="w-5 h-5 text-[#1A237E]"></i>';
  } else if (category === 'processes') {
    title = '作業流程列表';
    icon = '<i data-lucide="git-merge" class="w-5 h-5 text-purple-600"></i>';
  } else if (category === 'forms') {
    title = '表單下載列表';
    icon = '<i data-lucide="file-text" class="w-5 h-5 text-green-600"></i>';
  }

  modalTitleText.textContent = title;
  modalTitleIcon.innerHTML = icon;
  modalBackBtn.classList.add('hidden');

  renderCategoryList(category);
  categoryModal.classList.add('modal-open');
  lucide.createIcons();
};

function renderCategoryList(category) {
  const items = categoryData[category];
  let html = '';
  items.forEach(item => {
    let icon = '';
    if (category === 'rules') icon = '<i data-lucide="book-open" class="w-4 h-4"></i>';
    if (category === 'processes') icon = '<i data-lucide="git-merge" class="w-4 h-4"></i>';
    if (category === 'forms') icon = '<i data-lucide="file-text" class="w-4 h-4"></i>';

    html += `
      <div onclick="openFile('${item.id}')" class="flex items-center justify-between p-4 hover:bg-blue-50 rounded-xl cursor-pointer group transition-colors">
        <div class="flex items-center gap-4">
          <div class="p-2 bg-gray-100 text-gray-500 rounded-lg group-hover:bg-white group-hover:text-[#1A237E] group-hover:shadow-sm transition-all">
            ${icon}
          </div>
          <div>
            <div class="text-sm font-bold text-gray-900 group-hover:text-[#1A237E] transition-colors">${item.id}</div>
            <div class="text-sm text-gray-500 mt-0.5">${item.title}</div>
          </div>
        </div>
        <i data-lucide="chevron-right" class="w-4 h-4 text-gray-300 group-hover:text-[#1A237E] transition-colors"></i>
      </div>
    `;
  });
  modalBody.innerHTML = html;
  lucide.createIcons();
}

window.openFile = function(fileId) {
  // Find the file in the current category or across all if opened from search
  let file = null;
  if (currentCategory) {
    file = categoryData[currentCategory].find(f => f.id === fileId);
  } else {
    // Search all categories
    for (const cat in categoryData) {
      const found = categoryData[cat].find(f => f.id === fileId);
      if (found) {
        file = found;
        currentCategory = cat;
        break;
      }
    }
  }

  if (!file) return;
  currentFile = file;

  modalTitleText.textContent = file.title;
  modalTitleIcon.innerHTML = '';
  modalBackBtn.classList.remove('hidden');

  modalBody.innerHTML = `
    <div class="p-4">
      <div class="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-inner">
        <div class="flex items-center gap-2 mb-4 pb-4 border-b border-gray-200">
          <div class="px-2 py-1 bg-blue-100 text-[#1A237E] text-xs font-bold rounded">
            ${file.id}
          </div>
          <div class="text-sm text-gray-500">文件預覽</div>
        </div>
        <div class="text-gray-700 whitespace-pre-line leading-relaxed text-base">
          ${file.content}
        </div>
      </div>
    </div>
  `;
};

window.goBackToCategory = function() {
  if (currentCategory) {
    openCategory(currentCategory);
  } else {
    closeModal();
  }
};

window.closeModal = function() {
  categoryModal.classList.remove('modal-open');
  setTimeout(() => {
    currentCategory = null;
    currentFile = null;
  }, 300); // Wait for transition to finish
};

window.openRef = function(type, id) {
  const categoryMap = {
    rule: 'rules',
    process: 'processes',
    form: 'forms'
  };
  currentCategory = categoryMap[type];
  openFile(id);
  categoryModal.classList.add('modal-open');
};
