# react
1
-- npm install -g @ionic/cli native-run cordova-res
2
-- npm install @capacitor/camera @capacitor/storage @capacitor/filesystem
3
-- npm install @ionic/pwa-elements
4
start roject
-- ionic serve
build project
-- ionic build

create android and ios

-- ionic cap add ios
-- ionic cap add android

Mỗi khi bạn thực hiện một bản dựng (ví dụ ionic build) cập nhật thư mục web của mình (mặc định build:), bạn sẽ cần sao chép những thay đổi đó vào các dự án gốc của mình:

-- ionic cap copy

Lưu ý: Sau khi cập nhật phần gốc của mã (chẳng hạn như thêm một plugin mới), hãy sử dụng synclệnh:

-- ionic cap sync