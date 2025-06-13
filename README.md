# Apiren 勤怠管理アプリ

このプロジェクトは、React（MUI）と .NET Core（C#）を使ったシンプルな勤怠管理Webアプリです。

## 主な機能

- ユーザーの出勤・退勤の管理
- 出勤・退勤状態でユーザー一覧をタブ切り替え表示
- 現在時刻のリアルタイム表示
- フロントエンド（React）とバックエンド（.NET Core Web API）の連携

## 技術スタック

- フロントエンド: React, Material-UI
- バックエンド: .NET Core (C#), Entity Framework Core
- データベース: SQLite（または任意のRDBMS）

## 使い方

1. バックエンド（.NET Core）を起動
2. フロントエンド（React）を起動
3. ブラウザで `http://localhost:3000` にアクセス

## ディレクトリ構成

```
frontend/   # Reactアプリ
backend/    # .NET Core Web API
```

## 工夫した点

- 状態管理やAPI通信をReactのhooksでシンプルに実装
- Material-UIで見やすいUIを実現
- 出勤・退勤状態の切り替えや、ユーザーごとの状態管理

[画面]
・ログイン画面
https://github.com/s-matsumoto51/attendance-system/blob/main/frontend/src/assets/Login.png

・出勤ボタン画面
https://github.com/s-matsumoto51/attendance-system/blob/main/frontend/src/assets/attendance.png

・ユーザー一覧（出勤中）
https://github.com/s-matsumoto51/attendance-system/blob/main/frontend/src/assets/attendance1.png

・ユーザー一覧（退勤中）
https://github.com/s-matsumoto51/attendance-system/blob/main/frontend/src/assets/leaving.png

・アカウント登録
https://github.com/s-matsumoto51/attendance-system/blob/main/frontend/src/assets/userForm.png




