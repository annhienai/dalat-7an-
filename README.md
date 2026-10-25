# 🌲 AN NHIÊN – ĐÀ LẠT MỘNG MƠ

> **“Một Đà Lạt để ngắm – Một Đà Lạt để thương – Một Đà Lạt để nhớ.”**  
> **Tác giả & Sáng lập:** Trịnh Thị An (`An Nhiên AI` – `TTA`)

Không gian nghệ thuật số lưu giữ vẻ đẹp, ký ức, bốn mùa hoa, ẩm thực, quán cà phê, homestay, cẩm nang du lịch và âm nhạc Đà Lạt của thương hiệu cá nhân **An Nhiên – Đà Lạt Mộng Mơ**.

---

## 📁 Cấu trúc thư mục chuẩn GitHub Pages

```text
an-nhien-da-lat-mong-mo/
├── index.html                  # Trang chủ chính (GitHub Pages tự động nhận diện)
├── .nojekyll                   # Cấu hình để GitHub Pages phục vụ file tĩnh nhanh nhất
├── README.md                   # Tài liệu giới thiệu & hướng dẫn đưa lên GitHub
├── assets/
│   ├── css/
│   │   └── style.css           # Hệ thống giao diện Romantic Nature & Modern Editorial
│   ├── js/
│   │   └── app.js              # Toàn bộ dữ liệu, bộ lọc, lightbox, bản đồ & CMS cục bộ
│   └── images/                 # 10 tác phẩm ảnh chất lượng cao (.webp)
│       ├── ho-xuan-huong-suong-som.webp
│       ├── doi-thong-bien-may.webp
│       ├── doc-mai-anh-dao.webp
│       ├── biet-thu-co-vuon-hoa.webp
│       ├── chieu-mua-phuong-tim.webp
│       ├── doi-co-mua-thu.webp
│       ├── quan-ca-phe-rung-thong.webp
│       ├── doi-che-cau-dat.webp
│       ├── da-lat-nghe-thuat-ai.webp
│       └── chan-dung-trinh-thi-an.webp
└── standalone/
    └── an-nhien-da-lat-mong-mo-all-in-one.html  # Bản 1 file duy nhất (nhúng sẵn ảnh Base64 để mở offline)
```

---

## 🚀 Hướng dẫn đưa website lên GitHub & bật GitHub Pages (3 bước)

### Bước 1: Tạo Repository mới trên GitHub
1. Đăng nhập vào [GitHub.com](https://github.com/).
2. Nhấn nút **`+`** ở góc trên bên phải → chọn **New repository**.
3. Đặt tên Repository (ví dụ: `an-nhien-da-lat-mong-mo`).
4. Chọn chế độ **Public** → nhấn **Create repository**.

### Bước 2: Tải bộ file lên GitHub
1. Giải nén file **`an-nhien-da-lat-mong-mo-github.zip`** trên máy tính của chị.
2. Trong trang Repository vừa tạo trên GitHub, nhấn vào dòng chữ **uploading an existing file** (hoặc nút **Add file** → **Upload files**).
3. Kéo thả toàn bộ các mục bên trong thư mục giải nén (gồm `index.html`, `README.md`, `.nojekyll`, thư mục `assets/` và `standalone/`) vào khung tải lên.
   - *Lưu ý:* File `index.html` cần nằm ngay ở thư mục gốc của Repository.
4. Nhấn nút màu xanh **Commit changes** ở phía dưới và đợi vài giây để GitHub lưu file.

### Bước 3: Bật GitHub Pages để có đường link Website chính thức
1. Trên thanh menu của Repository, nhấn vào mục **Settings** (biểu tượng bánh răng).
2. Ở cột menu bên trái, chọn mục **Pages**.
3. Tại phần **Build and deployment** → mục **Branch**, đổi từ `None` sang **`main`** (hoặc `master`), giữ nguyên thư mục `/ (root)` rồi nhấn **Save**.
4. Đợi khoảng 1–2 phút và tải lại trang, GitHub sẽ hiển thị đường link website chính thức của chị:
   `https://<ten-tai-khoan-github>.github.io/an-nhien-da-lat-mong-mo/`

---

## ✨ Tính năng nổi bật trên Website
- **Hero Slideshow 5 cảnh sắc Đà Lạt** có điều khiển chuyển cảnh, tạm dừng và chế độ giảm chuyển động cho mắt.
- **Đà Lạt Qua Những Mùa Thương:** Bộ sưu tập Xuân – Hạ – Thu – Đông cùng đặc trưng thời tiết và mùa hoa kiểm chứng.
- **Những Địa Điểm Không Thể Quên & Bản Đồ Tương Tác (Leaflet):** Định vị tọa độ thực tế Hồ Xuân Hương, Hồ Tuyền Lâm, Đồi chè Cầu Đất, Ga Đà Lạt, Nhà thờ Con Gà, Vườn hoa Thành phố...
- **Quán Cà Phê & Homestay:** Bộ lọc đa chiều theo không gian và phong cách.
- **Thư Viện Ảnh Đà Lạt (10 Album):** Hỗ trợ tải ảnh mới lên trực tiếp, gắn nhãn *Ảnh chụp thực tế* / *Ảnh nghệ thuật AI*, phóng to toàn màn hình (Lightbox), khóa/mở quyền tải ảnh và giữ chữ ký `An Nhiên AI`.
- **Ký Ức Đà Lạt & Âm Nhạc An Nhiên AI Music:** Nhật ký tản văn, trình phát nhạc ambient và nhúng MV YouTube.
- **Quản Trị & Sao Lưu JSON:** Toàn bộ ảnh, bài viết hoặc ca khúc chị thêm mới đều có thể xuất ra file `.json` để lưu trữ lâu dài hoặc cập nhật thẳng vào mã nguồn.
