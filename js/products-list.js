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


let currentCategory = "Tất cả";
let currentRating = "all";
let currentMaxPrice = 200000;
let currentPage = 1;
const perPage = 6;

// Lấy danh mục từ localStorage (nếu có)
const savedCategory = localStorage.getItem("selectedCategory");
if (savedCategory) {
    currentCategory = savedCategory;
    localStorage.removeItem("selectedCategory"); // Xóa sau khi dùng

    // Khi có danh mục lưu, tự động đánh dấu active trong giao diện
    document.addEventListener("DOMContentLoaded", () => {
        // Chờ DOM sẵn sàng để thao tác
        const links = document.querySelectorAll("#category-filter .filter-link");
        links.forEach((link) => {
            if (link.dataset.category === savedCategory) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });

        // Gọi lại render để hiển thị sản phẩm tương ứng
        renderProducts();
    });
}


// ======== HÀM HIỂN THỊ SAO ========
function renderStars(rating) {
    let full = Math.floor(rating);
    let half = rating % 1 !== 0;
    let html = "";
    for (let i = 0; i < full; i++) html += '<i class="bi bi-star-fill"></i>';
    if (half) html += '<i class="bi bi-star-half"></i>';
    while (html.split("bi-star").length - 1 < 5) html += '<i class="bi bi-star"></i>';
    return html;
}

// ======== HÀM LỌC SẢN PHẨM ========
function getFilteredProducts() {
    return featuredProducts.filter((p) => {
        const matchCategory = currentCategory === "Tất cả" || p.category === currentCategory;
        const matchPrice = p.price <= currentMaxPrice;
        const matchRating = currentRating === "all" || p.rating >= parseFloat(currentRating);
        return matchCategory && matchPrice && matchRating;
    });
}

// ======== HÀM HIỂN THỊ PHÂN TRANG ========
function renderPagination(totalProducts) {
    const pagination = document.getElementById("pagination");
    if (!pagination) return;

    const totalPages = Math.ceil(totalProducts / perPage);
    let html = "";

    for (let i = 1; i <= totalPages; i++) {
        html += `
      <li class="page-item ${i === currentPage ? "active" : ""}">
        <a href="#" class="page-link" data-page="${i}">${i}</a>
      </li>
    `;
    }

    pagination.innerHTML = html;

    // Sự kiện chuyển trang
    pagination.querySelectorAll(".page-link").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            currentPage = parseInt(btn.dataset.page);
            renderProducts();
        });
    });
}

// ======== HÀM RENDER SẢN PHẨM ========
function renderProducts() {
  const list = document.getElementById("product-list");
  if (!list) return;

  const filtered = getFilteredProducts();
  const total = filtered.length;
  const start = (currentPage - 1) * perPage;
  const paginated = filtered.slice(start, start + perPage);

  if (paginated.length === 0) {
    list.innerHTML = `<p class="text-center text-muted py-5">Không tìm thấy sản phẩm phù hợp.</p>`;
    document.getElementById("pagination").innerHTML = "";
    return;
  }

  list.innerHTML = paginated
    .map(
      (p) => `
      <div class="col-6 col-md-4 col-lg-4 mb-4">
        <div class="card h-100 border-0 shadow-sm product-card" data-id="${p.id}" style="cursor:pointer;">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <span class="text-danger fw-bold">${p.price.toLocaleString()}₫</span>
                ${p.oldPrice ? `<span class="text-muted text-decoration-line-through small ms-1">${p.oldPrice.toLocaleString()}₫</span>` : ""}
              </div>
              <div class="text-warning">${renderStars(p.rating)}</div>
            </div>
          </div>
        </div>
      </div>`
    )
    .join("");

  renderPagination(total);

  // GẮN SỰ KIỆN CLICK NGAY SAU KHI TẠO XONG CARD
  document.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => {
      const productId = card.dataset.id;
      localStorage.setItem("selectedProductId", productId);
      window.location.href = `product-detail.html?id=${productId}`;
    });
  });
}


// ======== SỰ KIỆN DANH MỤC ========
document.querySelectorAll("#category-filter .filter-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll("#category-filter .filter-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        currentCategory = link.dataset.category;
        currentPage = 1;
        renderProducts();
    });
});


// ======== SỰ KIỆN GIÁ ========
const priceRange = document.getElementById("priceRange");
const priceValue = document.getElementById("priceValue");
if (priceRange) {
    priceRange.addEventListener("input", () => {
        currentMaxPrice = parseInt(priceRange.value);
        if (priceValue) priceValue.textContent = currentMaxPrice.toLocaleString() + "₫";
        currentPage = 1;
        renderProducts();
    });
}

// ======== SỰ KIỆN SAO ========
document.querySelectorAll("#rating-filter input").forEach((radio) => {
    radio.addEventListener("change", (e) => {
        currentRating = e.target.value;
        currentPage = 1;
        renderProducts();
    });
});

// ======== SỰ KIỆN DANH MỤC MOBILE ========
document.querySelectorAll("#category-filter-mobile .filter-link").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelectorAll("#category-filter-mobile .filter-link").forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
        currentCategory = link.dataset.category;
        renderProducts();
    });
});

// ======== SỰ KIỆN GIÁ MOBILE ========
const priceRangeMobile = document.getElementById("priceRangeMobile");
const priceValueMobile = document.getElementById("priceValueMobile");
if (priceRangeMobile) {
    priceRangeMobile.addEventListener("input", () => {
        currentMaxPrice = parseInt(priceRangeMobile.value);
        priceValueMobile.textContent = currentMaxPrice.toLocaleString() + "₫";
        renderProducts();
    });
}

// ======== SỰ KIỆN SAO MOBILE ========
document.querySelectorAll("#rating-filter-mobile input").forEach((radio) => {
    radio.addEventListener("change", (e) => {
        currentRating = e.target.value;
        renderProducts();
    });
});


// ======== KHỞI TẠO ========
document.addEventListener("DOMContentLoaded", renderProducts);