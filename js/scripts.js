/**
 * Fashion Store - Tệp JavaScript Chính
 */

document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo Bootstrap tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });

    // Chức năng phân trang và sắp xếp sản phẩm
    const sortDropdown = document.getElementById('sort-products');
    const productContainer = document.getElementById('product-container');
    const pagination = document.getElementById('product-pagination');
    const productsPerPage = 8; // Số sản phẩm mặc định trên mỗi trang
    let currentPage = 1;
    let allProducts = [];
    
    if (productContainer) {
        // Lưu trữ tất cả sản phẩm
        allProducts = Array.from(productContainer.querySelectorAll('.col-6.col-md-4.col-lg-3'));
        
        // Thêm thuộc tính thứ tự ban đầu cho mỗi sản phẩm
        allProducts.forEach((product, index) => {
            product.setAttribute('data-original-order', index);
        });
        
        // Thiết lập phân trang ban đầu
        setupPagination(allProducts);
        showPage(currentPage, allProducts);
    }
    
    // Chức năng sắp xếp sản phẩm
    if (sortDropdown && productContainer) {
        sortDropdown.addEventListener('change', function() {
            const sortOption = this.value;
            let sortedProducts = [...allProducts]; // Tạo bản sao của tất cả sản phẩm
            
            if (sortOption === 'default') {
                // Khôi phục thứ tự ban đầu
                sortedProducts.sort((a, b) => {
                    return parseInt(a.getAttribute('data-original-order') || 0) - 
                           parseInt(b.getAttribute('data-original-order') || 0);
                });
            } else if (sortOption === 'price-asc') {
                // Sắp xếp theo giá từ thấp đến cao
                sortedProducts.sort((a, b) => {
                    const priceA = extractPrice(a.querySelector('.text-danger.fw-bold').textContent);
                    const priceB = extractPrice(b.querySelector('.text-danger.fw-bold').textContent);
                    return priceA - priceB;
                });
            } else if (sortOption === 'price-desc') {
                // Sắp xếp theo giá từ cao đến thấp
                sortedProducts.sort((a, b) => {
                    const priceA = extractPrice(a.querySelector('.text-danger.fw-bold').textContent);
                    const priceB = extractPrice(b.querySelector('.text-danger.fw-bold').textContent);
                    return priceB - priceA;
                });
            }
            
            // Đặt lại về trang đầu tiên và cập nhật với sản phẩm đã sắp xếp
            currentPage = 1;
            setupPagination(sortedProducts);
            showPage(currentPage, sortedProducts);
        });
    }
    
    // Sự kiện nhấp phân trang
    if (pagination) {
        pagination.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Xử lý khi nhấp vào số trang
            if (e.target.hasAttribute('data-page')) {
                currentPage = parseInt(e.target.getAttribute('data-page'));
                
                // Lấy sản phẩm đã sắp xếp hiện tại dựa trên dropdown
                let currentProducts = [...allProducts];
                if (sortDropdown) {
                    const sortOption = sortDropdown.value;
                    if (sortOption === 'price-asc') {
                        currentProducts.sort((a, b) => {
                            const priceA = extractPrice(a.querySelector('.text-danger.fw-bold').textContent);
                            const priceB = extractPrice(b.querySelector('.text-danger.fw-bold').textContent);
                            return priceA - priceB;
                        });
                    } else if (sortOption === 'price-desc') {
                        currentProducts.sort((a, b) => {
                            const priceA = extractPrice(a.querySelector('.text-danger.fw-bold').textContent);
                            const priceB = extractPrice(b.querySelector('.text-danger.fw-bold').textContent);
                            return priceB - priceA;
                        });
                    } else {
                        currentProducts.sort((a, b) => {
                            return parseInt(a.getAttribute('data-original-order') || 0) - 
                                   parseInt(b.getAttribute('data-original-order') || 0);
                        });
                    }
                }
                
                showPage(currentPage, currentProducts);
                updatePaginationActive();
            }
            
            // Xử lý nút quay lại
            if (e.target.closest('a[aria-label="Previous"]') || e.target.closest('a').getAttribute('aria-label') === 'Previous') {
                if (currentPage > 1) {
                    currentPage--;
                    showPage(currentPage, allProducts);
                    updatePaginationActive();
                }
            }
            
            // Xử lý nút tiếp theo
            if (e.target.closest('a[aria-label="Next"]') || e.target.closest('a').getAttribute('aria-label') === 'Next') {
                const pageCount = Math.ceil(allProducts.length / productsPerPage);
                if (currentPage < pageCount) {
                    currentPage++;
                    showPage(currentPage, allProducts);
                    updatePaginationActive();
                }
            }
        });
    }
    
    // Hàm trích xuất giá trị giá từ chuỗi
    function extractPrice(priceText) {
        return parseInt(priceText.replace(/\D/g, ''));
    }
    
    // Hàm hiển thị sản phẩm cho trang hiện tại
    function showPage(page, products) {
        // Xóa container
        productContainer.innerHTML = '';
        
        // Tính toán chỉ mục bắt đầu và kết thúc
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        
        // Thêm sản phẩm cho trang hiện tại
        for (let i = startIndex; i < endIndex && i < products.length; i++) {
            productContainer.appendChild(products[i].cloneNode(true));
        }
        
        // Cập nhật trạng thái phân trang
        updatePaginationState(products);
    }
    
    // Hàm thiết lập phân trang dựa trên số lượng sản phẩm
    function setupPagination(products) {
        const pageCount = Math.ceil(products.length / productsPerPage);
        
        // Tạo HTML phân trang
        let paginationHTML = `
            <li class="page-item ${currentPage === 1 ? 'disabled' : ''}">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>
        `;
        
        for (let i = 1; i <= pageCount; i++) {
            paginationHTML += `
                <li class="page-item ${i === currentPage ? 'active' : ''}">
                    <a class="page-link" href="#" data-page="${i}">${i}</a>
                </li>
            `;
        }
        
        paginationHTML += `
            <li class="page-item ${currentPage === pageCount ? 'disabled' : ''}">
                <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        `;
        
        // Cập nhật phần tử phân trang
        if (pagination) {
            pagination.innerHTML = paginationHTML;
        }
    }
    
    // Hàm cập nhật trạng thái active của phân trang
    function updatePaginationActive() {
        const pageLinks = pagination.querySelectorAll('.page-link[data-page]');
        pageLinks.forEach(link => {
            const page = parseInt(link.getAttribute('data-page'));
            if (page === currentPage) {
                link.parentElement.classList.add('active');
            } else {
                link.parentElement.classList.remove('active');
            }
        });
    }
    
    // Hàm cập nhật trạng thái các nút trước/sau
    function updatePaginationState(products) {
        const pageCount = Math.ceil(products.length / productsPerPage);
        const prevButton = pagination.querySelector('a[aria-label="Previous"]').parentElement;
        const nextButton = pagination.querySelector('a[aria-label="Next"]').parentElement;
        
        // Cập nhật trạng thái nút trước
        if (currentPage === 1) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }
        
        // Cập nhật trạng thái nút sau
        if (currentPage === pageCount) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    // Chuyển đổi menu trên thiết bị di động
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            document.querySelector('body').classList.toggle('menu-open');
        });
    }

    // Hiệu ứng hover cho sản phẩm trên thiết bị di động
    if (window.innerWidth < 768) {
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (e.target.closest('.product-overlay') === null && 
                    e.target.closest('a') === null && 
                    e.target.closest('button') === null) {
                    
                    const overlay = this.querySelector('.product-overlay');
                    if (overlay) {
                        overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
                    }
                }
            });
        });
    }

    // Hiệu ứng thêm vào giỏ hàng
    const addToCartButtons = document.querySelectorAll('[id^="addToCart"], .bi-cart-plus');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const cart = document.querySelector('.bi-cart');
            if (!cart) return;
            
            // Tạo phần tử bay
            const flyingElement = document.createElement('div');
            flyingElement.className = 'flying-element';
            flyingElement.innerHTML = '<i class="bi bi-bag-check-fill"></i>';
            document.body.appendChild(flyingElement);
            
            // Lấy vị trí nút
            const buttonRect = this.getBoundingClientRect();
            const cartRect = cart.getBoundingClientRect();
            
            // Đặt vị trí ban đầu
            flyingElement.style.position = 'fixed';
            flyingElement.style.left = buttonRect.left + 'px';
            flyingElement.style.top = buttonRect.top + 'px';
            flyingElement.style.fontSize = '20px';
            flyingElement.style.color = 'var(--bs-primary)';
            flyingElement.style.zIndex = '9999';
            flyingElement.style.transition = 'all 0.8s cubic-bezier(0.18, 0.89, 0.32, 1.28)';
            
            // Kích hoạt hiệu ứng
            setTimeout(() => {
                flyingElement.style.left = cartRect.left + 'px';
                flyingElement.style.top = cartRect.top + 'px';
                flyingElement.style.fontSize = '0';
                flyingElement.style.opacity = '0';
            }, 10);
            
            // Xóa phần tử sau hiệu ứng
            setTimeout(() => {
                flyingElement.remove();
                
                // Cập nhật số lượng trong giỏ hàng
                const cartBadge = document.querySelector('.badge.bg-danger');
                if (cartBadge) {
                    let count = parseInt(cartBadge.textContent);
                    cartBadge.textContent = count + 1;
                    cartBadge.classList.remove('d-none');
                }
                
                // Hiện thông báo thành công nếu có
                const toastElement = document.getElementById('cartToast');
                if (toastElement) {
                    const toast = new bootstrap.Toast(toastElement);
                    toast.show();
                }
            }, 800);
        });
    });

    // Xác thực biểu mẫu bản tin
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value.trim() === '') {
                alert('Vui lòng nhập email của bạn.');
                return;
            }
            
            alert('Cảm ơn bạn đã đăng ký nhận bản tin!');
            emailInput.value = '';
        });
    }

    // Nút quay lại đầu trang
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Thư viện hình ảnh sản phẩm (cho trang chi tiết sản phẩm)
    const mainImage = document.getElementById('mainImage');
    const thumbnails = document.querySelectorAll('.product-thumbnails img');
    
    if (mainImage && thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Cập nhật hình ảnh chính
                mainImage.src = this.src;
                mainImage.alt = this.alt;
                
                // Cập nhật thumbnail active
                thumbnails.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // Chức năng tìm kiếm
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        const searchResults = document.querySelector('.search-results');
        
        searchInput.addEventListener('focus', function() {
            if (this.value.trim().length > 2 && searchResults) {
                searchResults.classList.add('show');
            }
        });
        
        searchInput.addEventListener('blur', function() {
            setTimeout(() => {
                if (searchResults) {
                    searchResults.classList.remove('show');
                }
            }, 200);
        });
        
        searchInput.addEventListener('input', function() {
            if (this.value.trim().length > 2 && searchResults) {
                searchResults.classList.add('show');
                // Ở đây bạn thường sẽ gọi AJAX để lấy kết quả tìm kiếm
                // Để demo, chúng ta chỉ hiển thị div kết quả
            } else if (searchResults) {
                searchResults.classList.remove('show');
            }
        });
    }

    // Bộ lọc sản phẩm (cho trang danh mục)
    const filterToggles = document.querySelectorAll('.filter-toggle');
    if (filterToggles.length > 0) {
        filterToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const target = document.querySelector(this.getAttribute('data-bs-target'));
                if (target) {
                    target.classList.toggle('show');
                    this.querySelector('i').classList.toggle('bi-chevron-down');
                    this.querySelector('i').classList.toggle('bi-chevron-up');
                }
            });
        });
    }

    // Thanh trượt khoảng giá (cho trang danh mục)
    const priceRange = document.getElementById('priceRange');
    const priceMin = document.getElementById('priceMin');
    const priceMax = document.getElementById('priceMax');
    
    if (priceRange && priceMin && priceMax) {
        priceRange.addEventListener('input', function() {
            const values = this.value.split(',');
            priceMin.textContent = parseInt(values[0]).toLocaleString('vi-VN') + '₫';
            priceMax.textContent = parseInt(values[1]).toLocaleString('vi-VN') + '₫';
        });
    }
}); 