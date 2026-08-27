# Adora Zalo Mini App + Admin Portal Demo

## File chính
- `index.html` — trang mở đầu
- `miniapp.html` — giao diện Zalo Mini App dạng mobile
- `admin.html` — giao diện Admin Portal
- `assets/style.css`
- `assets/app.js`

## Chạy demo
Để `localStorage` được dùng chung ổn định giữa Admin và Mini App, nên mở bằng cùng một localhost:

```bash
python -m http.server 8080
```

Sau đó mở:
- http://localhost:8080/
- http://localhost:8080/admin.html
- http://localhost:8080/miniapp.html

Nếu chỉ double-click file HTML, localStorage với `file://` có thể hoạt động khác nhau tùy trình duyệt.

## Luồng demo gợi ý
1. Mở Admin và Mini App ở 2 tab.
2. Mini App → Đặt lịch → tạo một lịch mới.
3. Quay sang Admin → Lịch hẹn → bấm Xác nhận.
4. Quay về Mini App → Lịch hẹn → tra cứu bằng số điện thoại vừa nhập.
5. Admin → Dịch vụ / Bác sĩ / Bài viết → chỉnh nội dung, Mini App sẽ đọc dữ liệu mới.

## Nội dung Adora dùng trong demo
Thông tin thương hiệu lấy từ nguồn công khai trên web và được dùng chỉ để dựng prototype:
- Website: https://nhakhoaadora.com/
- Địa chỉ tham khảo: 236 Đồng Khởi, P. Tam Hiệp, Đồng Nai
- Hotline tham khảo: 0968 096 868 / 0251 88 75 666
- Hồ sơ công khai của Adora có các bác sĩ như Võ Hàm Thắng, Trần Thị Kim Liên, Nguyễn Thị Minh Hiền, Nguyễn Thị Tuyết Nhung, Nguyễn Phương Hanh, Lê Quang Tấn Đạt...
- Nhóm dịch vụ tham khảo: niềng răng, Implant, răng sứ, tẩy trắng, nha khoa trẻ em, nha khoa tổng quát.

Các mức giá trong prototype là **dữ liệu minh họa**, không phải báo giá chính thức.

## Ảnh
Mini App dùng URL ảnh công khai để minh họa không gian/thiết bị. Nếu triển khai thật, nên thay bằng ảnh do Adora cấp hoặc đã có quyền sử dụng.

## Dữ liệu
Toàn bộ dữ liệu nằm trong localStorage với key:
`adora_demo_v1`

Có thể reset từ Admin bằng nút “Reset dữ liệu demo”.
