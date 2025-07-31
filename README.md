# 🚀 Demo Node.js REST API

Một RESTful API demo sử dụng Node.js, Express, JWT Authentication, MariaDB và Swagger để quản lý người dùng. Có bảo mật bằng Bearer Token và custom header `x-client-id`.

---

## 📦 Tech Stack

- **Node.js / Express** – backend framework chính
- **MariaDB** – cơ sở dữ liệu chạy trong container
- **JWT** – xác thực Bearer Token
- **Custom Header `x-client-id`** – bảo vệ API theo client
- **Swagger** – tài liệu API tự động
- **Docker / Docker Compose** – để chạy môi trường nhanh gọn

---

## 🛠️ Hướng dẫn chạy dự án

### 1. Clone dự án

```bash
git clone https://github.com/your-username/demo-nodejs-api.git
cd demo-nodejs-api

### 2. Cấu hình file `.env`

Tạo file `.env` với nội dung sau nếu bạn chạy local (không bắt buộc nếu dùng Docker Compose vì đã có sẵn biến môi trường):

```ini
# .env (ví dụ)

NODE_ENV=dev

# App
DEV_PORT=8011
DEV_APP_KEY=DEMO

# Database
DEV_MARIADB_HOST=demo_mariadb
DEV_MARIADB_USER=root
DEV_MARIADB_PASSWORD=123456
DEV_MARIADB_DATABASE=demoapp

# Token
TOKEN_TIMEOUT=30d
TOKEN_TIMEOUT_REDIS=2592000

### 3. Chạy bằng Docker
```bash
docker compose up --build


### 4.Truy cập App

🟢 API chạy tại: http://localhost:8011

📘 Swagger UI: http://localhost:8011/api-docs