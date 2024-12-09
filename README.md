# FoodMobileApp_ReactNatve_Dijango

## Giới thiệu
Dự án **FoodMobileApp_ReactNatve_Dijango** là một ứng dụng mobile bán thức ăn với hai phần chính:

- **Backend**: Được xây dựng bằng Django kết hợp với Django Rest Framework.
- **Frontend**: Được phát triển bằng React Native, hỗ trợ giao diện người dùng trên Android.

## Cấu trúc dự án

- **Folder `foodapp`**: Chứa mã nguồn của phần backend. Phần này cung cấp các API để giao tiếp với frontend, xử lý logic nghiệp vụ, và quản lý cơ sở dữ liệu.
- **Folder `foodmobileapp`**: Chứa mã nguồn của phần frontend. Phần này hiển thị giao diện người dùng và gọi các API từ backend để lấy dữ liệu.

## Hướng dẫn cài đặt và chạy

### Cài đặt backend
1. Di chuyển đến thư mục `foodapp`:
   ```bash
   cd foodapp
   ```
2. Cài đặt các gói phụ thuộc:
   ```bash
   pip install -r requirements.txt
   ```
3. Chạy các migrations để tạo cơ sở dữ liệu:
   ```bash
   python manage.py migrate
   ```
4. Khởi động server:
   ```bash
   python manage.py runserver
   ```

### Cài đặt frontend
1. Di chuyển đến thư mục `foodmobileapp`:
   ```bash
   cd foodmobileapp
   ```
2. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```
3. Khởi động ứng dụng:
   ```bash
   npm start
   ```

## Ghi chú
- Đảm bảo backend chạy trước khi sử dụng frontend để tránh lỗi khi gọi API.
- Kiểm tra kỹ phiên bản Python, Node.js để tránh lỗi không tương thích.

## Bản quyền

Dự án này được phát triển bởi  và .
Dự án này được phát triển bởi **Lê Quốc Trung** và **Nguyễn Tiến Đạt**.


Chúc bạn sử dụng dự án hiệu quả!
