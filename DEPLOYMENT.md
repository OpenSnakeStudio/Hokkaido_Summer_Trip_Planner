# 🚀 如何將專案佈署到 Zeabur

Zeabur 是一個支援自動化佈署的平台，對於 Vite + React 專案非常友善。請按照以下步驟操作：

## 1. 登入 Zeabur
前往 [Zeabur 官網](https://zeabur.com) 並使用 GitHub 帳號登入。

## 2. 建立新專案
1. 在 Dashboard 點擊 **"Create Project"**。
2. 選擇離你最近的區域（例如 `pre-dev` 或 `Asia East`）。

## 3. 部署原始碼
1. 點擊 **"Deploy Service"**。
2. 選擇 **"Deploy your source code"**。
3. 授權 GitHub 存取權（如果你尚未執行此操作）。
4. 選擇你的儲存庫：`lawrence555-dev/Hokkaido_Summer_Trip_Planner`。

## 4. 自動偵測與佈署
Zeabur 會自動檢查你的代碼並發現這是一個 Vite 專案：
- **編譯指令**：它會自動運行 `npm install` 與 `npm run build`。
- **輸出目錄**：我已經在專案中新增了 `zbpack.json` 指定輸出目錄為 `dist`。

## 5. 取得你的網址 (Domain)
佈署完成後，服務狀態會顯示「運作中」，但你還需要一個網址才能訪問：
1. 在 Zeabur Dashboard 點擊你的服務。
2. 進入 **"Networking" (網路)** 分頁。
3. 找到 **"Public Endpoints"**，點擊 **"Generate Domain"**。
4. 輸入你喜歡的名字，Zeabur 會給你一個 `*.zeabur.app` 的免費網址。
5. 點擊該網址即可看到你的北海道旅行手帖。

## 6. 自動部署 (CI/CD)
**是的，它是自動化的！**
- 只要你將新的代碼推送到 GitHub 的 `main` 分支（`git push origin main`）。
- Zeabur 會立刻偵測到變更。
- 接著它會自動抓取最新代碼、重新運行 `build`，並把新的內容發佈上線。
- 你不需要手動操作，幾分鐘後重新整理網頁就會看到更新。

---
祝你的 2026 北海道之旅規劃順利！✈️🌸
