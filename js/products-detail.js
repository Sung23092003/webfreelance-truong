// === Dữ liệu sản phẩm ===
const featuredProducts = [
    {
        id: 1,
        name: "Rau Cải Xanh Sạch",
        image: "images/products/rau-cai-xanh.jpg",
        price: 18000,
        oldPrice: 22000,
        rating: 4.7,
        description: "Rau cải xanh được trồng theo tiêu chuẩn VietGAP, tươi ngon và an toàn cho sức khỏe.",
        stock: 50,
        category: "Rau Củ Sạch",
        usesAndHowTo: "Giàu vitamin C và K, chất xơ. Dùng để nấu canh, xào tỏi hoặc nhúng lẩu. Nên rửa sạch dưới vòi nước chảy trước khi chế biến."
    },
    {
        id: 2,
        name: "Cà Rốt Đà Lạt",
        image: "images/products/ca-rot-da-lat.jpg",
        price: 25000,
        rating: 4.5,
        description: "Cà rốt tươi ngọt, giàu vitamin A, thích hợp cho các món hầm, salad hoặc nước ép.",
        stock: 60,
        category: "Rau Củ Sạch",
        usesAndHowTo: "Nguồn beta-carotene dồi dào, tốt cho mắt. Dùng để ép nước uống, làm salad trộn hoặc nấu canh hầm xương. Gọt vỏ và rửa sạch trước khi dùng."
    },
    {
        id: 3,
        name: "Táo Mỹ Tươi",
        image: "images/products/tao-my.jpg",
        price: 65000,
        oldPrice: 75000,
        rating: 4.8,
        description: "Táo đỏ Mỹ giòn ngọt tự nhiên, được nhập khẩu và bảo quản lạnh đúng chuẩn.",
        stock: 40,
        category: "Trái Cây Tươi",
        usesAndHowTo: "Cung cấp chất xơ và chất chống oxy hóa. Ăn trực tiếp như món tráng miệng hoặc dùng làm nguyên liệu làm bánh, salad. Rửa kỹ vỏ trước khi ăn."
    },
    {
        id: 4,
        name: "Cam Sành Miền Tây",
        image: "images/products/cam-sanh.jpg",
        price: 45000,
        oldPrice: 55000,
        rating: 4.6,
        description: "Cam sành mọng nước, vị ngọt thanh, giàu vitamin C, giúp tăng sức đề kháng.",
        stock: 70,
        category: "Trái Cây Tươi",
        usesAndHowTo: "Nguồn vitamin C tuyệt vời, tăng cường miễn dịch. Vắt lấy nước uống trực tiếp hoặc bóc vỏ ăn múi. Bảo quản nơi thoáng mát, tránh ánh nắng trực tiếp."
    },
    {
        id: 5,
        name: "Thịt Heo Sạch",
        image: "images/products/thit-heo-sach.jpg",
        price: 120000,
        oldPrice: 135000,
        rating: 4.7,
        description: "Thịt heo được chăn nuôi hữu cơ, không chất tăng trọng, tươi ngon mỗi ngày.",
        stock: 35,
        category: "Thịt - Trứng",
        usesAndHowTo: "Cung cấp protein và chất sắt. Dùng để chế biến các món kho, xào, luộc, nướng. Nên rã đông tự nhiên trong ngăn mát tủ lạnh trước khi nấu."
    },
    {
        id: 6,
        name: "Trứng Gà Ta",
        image: "images/products/trung-ga-ta.jpg",
        price: 40000,
        oldPrice: 45000,
        rating: 4.9,
        description: "Trứng gà ta tự nhiên, lòng đỏ đậm, nhiều dinh dưỡng, rất tốt cho trẻ nhỏ.",
        stock: 80,
        category: "Thịt - Trứng",
        usesAndHowTo: "Giàu choline và protein chất lượng cao. Dùng để luộc, chiên, ốp la, làm bánh. Bảo quản trong ngăn mát tủ lạnh với đầu nhọn quay xuống."
    },
    {
        id: 7,
        name: "Gạo Lứt Hữu Cơ",
        image: "images/products/gao-lut-huu-co.jpg",
        price: 38000,
        rating: 4.6,
        description: "Gạo lứt hữu cơ nguyên cám, giàu chất xơ, phù hợp cho chế độ ăn lành mạnh.",
        stock: 90,
        category: "Gạo & Ngũ Cốc",
        usesAndHowTo: "Giúp kiểm soát đường huyết và hỗ trợ tiêu hóa. Vo gạo nhẹ nhàng, ngâm khoảng 30 phút (tùy thích), nấu với tỷ lệ nước 1:2 (tăng nước nếu muốn cơm mềm hơn)."
    },
    {
        id: 8,
        name: "Ngũ Cốc Dinh Dưỡng",
        image: "images/products/ngu-coc.jpg",
        price: 85000,
        oldPrice: 95000,
        rating: 4.5,
        description: "Hỗn hợp ngũ cốc tự nhiên giàu protein, giúp cung cấp năng lượng mỗi sáng.",
        stock: 55,
        category: "Gạo & Ngũ Cốc",
        usesAndHowTo: "Bữa sáng nhanh gọn, giàu năng lượng. Trộn 2-3 muỗng ngũ cốc với sữa tươi, sữa chua hoặc nước ấm. Có thể thêm trái cây tươi để tăng hương vị."
    },
    {
        id: 9,
        name: "Mật Ong Rừng Tự Nhiên",
        image: "images/products/mat-ong-rung.jpg",
        price: 150000,
        oldPrice: 170000,
        rating: 4.8,
        description: "Mật ong nguyên chất thu hoạch từ rừng, hương vị thơm ngon, bổ dưỡng.",
        stock: 25,
        category: "Nước Ép & Mật Ong",
        usesAndHowTo: "Kháng khuẩn, làm dịu cổ họng, tăng cường sức khỏe. Pha 1-2 thìa cà phê mật ong với nước ấm và chanh để uống vào buổi sáng. Dùng thay thế đường khi làm bánh, pha chế."
    },
    {
        id: 10,
        name: "Nước Ép Ổi Tự Nhiên",
        image: "images/products/nuoc-ep-oi.jpg",
        price: 25000,
        oldPrice: 30000,
        rating: 4.4,
        description: "Nước ép ổi 100% tự nhiên, không chất bảo quản, giúp thanh lọc cơ thể.",
        stock: 100,
        category: "Nước Ép & Mật Ong",
        usesAndHowTo: "Giàu vitamin C và chất chống oxy hóa. Uống trực tiếp, ngon hơn khi dùng lạnh. Lắc đều trước khi mở nắp."
    },
    {
        id: 11,
        name: "Đặc Sản Chè Lam Bắc Giang",
        image: "images/products/che-lam.jpg",
        price: 55000,
        rating: 4.3,
        description: "Chè lam truyền thống dẻo thơm, vị ngọt nhẹ từ mật mía và gừng già.",
        stock: 40,
        category: "Đặc Sản Quê",
        usesAndHowTo: "Món ăn vặt truyền thống. Ăn trực tiếp kèm với một ấm trà nóng sẽ rất hợp vị. Bảo quản nơi khô ráo, thoáng mát."
    },
    {
        id: 12,
        name: "Mè Đen Rang Nguyên Hạt",
        image: "images/products/me-den.jpg",
        price: 45000,
        oldPrice: 50000,
        rating: 4.5,
        description: "Mè đen rang thơm giòn, giàu chất chống oxy hóa, tốt cho tim mạch và da.",
        stock: 60,
        category: "Đặc Sản Quê",
        usesAndHowTo: "Cung cấp chất béo lành mạnh và khoáng chất. Rắc lên cơm, chè hoặc làm gia vị trộn salad. Có thể xay nhỏ để làm bột mè đen dinh dưỡng."
    },
];

// === Lấy ID sản phẩm từ localStorage hoặc URL ===
const params = new URLSearchParams(window.location.search);
const productId = parseInt(params.get("id")) || parseInt(localStorage.getItem("selectedProductId"));

// === Tìm sản phẩm tương ứng ===
const product = featuredProducts.find(p => p.id === productId);

// === Hiển thị thông tin chi tiết ===
if (product) {
    document.getElementById("breadcrumbName").textContent = product.name;

    // --- Render phần chi tiết sản phẩm chính ---
    document.getElementById("productDetail").innerHTML = `
        <div class="col-md-6 text-center">
            <img src="${product.image}" class="img-fluid rounded shadow-sm" alt="${product.name}">
        </div>
        <div class="col-md-6">
            <h2 class="fw-bold text-success">${product.name}</h2>
            <p class="text-muted">${product.category}</p>
            <div class="d-flex align-items-center mb-2">
                <div class="text-warning me-2">
                    ${'★'.repeat(Math.floor(product.rating))} (${product.rating})
                </div>
            </div>
            <h4 class="text-success fw-bold">${product.price.toLocaleString()}₫</h4>
            ${product.oldPrice ? `<p class="text-muted text-decoration-line-through">${product.oldPrice.toLocaleString()}₫</p>` : ""}
            <p class="mt-3">${product.description}</p>
            <p><strong>Còn hàng:</strong> ${product.stock}</p>
            <div class="d-grid gap-2 mt-4">
                <button class="btn btn-primary"><i class="bi bi-cart-plus me-2"></i>Thêm vào giỏ</button>
                <button class="btn btn-outline-success"><i class="bi bi-heart me-2"></i>Yêu thích</button>
            </div>
        </div>
    `;

    // --- Render phần "Mô tả" trong tab ---
    const descriptionTab = document.querySelector("#description");
    descriptionTab.innerHTML = `
        <h4>Đặc điểm nổi bật</h4>
        <p>${product.description}</p>
        
        ${product.usesAndHowTo ? `
        <h4 class="mt-4">Công dụng & Hướng dẫn sử dụng</h4>
        <p>${product.usesAndHowTo}</p>
        ` : ""}
    `;
} else {
    document.getElementById("productDetail").innerHTML = `
        <div class="text-center text-danger py-5">
            <h3>Không tìm thấy sản phẩm!</h3>
            <a href="products.html" class="btn btn-success mt-3">Quay lại trang sản phẩm</a>
        </div>
    `;
}

