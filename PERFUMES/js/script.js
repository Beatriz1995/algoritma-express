


document.addEventListener("DOMContentLoaded", () => {

    // =========================================================
    // PURA ESCENCIA
    // SISTEMA COMPLETO DE CATÁLOGO + CHECKOUT
    // =========================================================


    // =========================================================
    // 1. BASE DE DATOS DE PRODUCTOS
    // =========================================================

    const products = {

        lacoste_blanc: {
            id: "lacoste_blanc",
            name: "Lacoste Blanc L.12.12",
            price: 95,
            img: "img/LACOSTE.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: El diario, ir a la escuela/trabajo y días calurosos.",

            review:
                "A camisa blanca recién lavada. Es súper limpio, fresco y ligero.",

            topNotes:
                "Toronja, romero y cardamomo.",

            heartNotes:
                "Ylang-ylang y nardos (flores blancas).",

            baseNotes:
                "Gamuza, cuero, cedro y vetiver.",

            concentration:
                "Eau de Toilette",

            duration:
                "4 - 6 horas"
        },


        malibu_hawas: {
            id: "malibu_hawas",
            name: "Malibu Hawas",
            price: 90,
            img: "img/MALIBU.png",
            gender: "caballero",
            featured: true,

            description:
                "Una fragancia fresca, acuática y vibrante, perfecta para climas cálidos y ocasiones casuales.",

            review:
                "Destaca por su sensación refrescante y juvenil, siendo una opción muy versátil para el día.",

            topNotes:
                "Bergamota, manzana, limón y canela",

            heartNotes:
                "Notas acuáticas, lavanda y cardamomo",

            baseNotes:
                "Almizcle, ámbar, madera y musgo",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 8 horas"
        },


        khamrah: {
            id: "khamrah",
            name: "Khamrah",
            price: 85,
            img: "img/KAMRAH.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: Días fríos, citas o cuando quieres sentirte acogedor y llamativo.",

            review:
                "A un café caliente con canela, vainilla y postre dulce.",

            topNotes:
                "Jengibre, canela y cardamomo.",

            heartNotes:
                "Café, praliné (dulce) y frutas confitadas.",

            baseNotes:
                "Vainilla, haba tonka, benzuí, ámbar y almizcle.",

            concentration:
                "Eau de Parfum",

            duration:
                "8 - 12 horas"
        },


        turathi_blue: {
            id: "turathi_blue",
            name: "Turathi Blue",
            price: 75,
            img: "img/TURATI.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: Todo uso, especialmente verano y oficina. Dura bastante.",

            review:
                "Cítrico y elegante (mucha toronja fresca) con un fondo amaderado.",

            topNotes:
                "Toronja y bergamota (cítricos intensos).",

            heartNotes:
                "Notas amaderadas y especias suaves.",

            baseNotes:
                "Ámbar y almizcle.",

            concentration:
                "Eau de Parfum",

            duration:
                "5 - 7 Horas"
        },


        odyssey_mega: {
            id: "odyssey_mega",
            name: "Odyssey Mega",
            price: 65,
            img: "img/MEGA.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: Hacer ejercicio, días relajados y uso diario.",

            review:
                "¿A qué huele? Fresco, deportivo y juvenil. Da la sensación de estar recién salido de la regadera.",

            topNotes:
                "Naranja bergamota y jengibre.",

            heartNotes:
                "Enebro de la Virginia, salvia y geranio.",

            baseNotes:
                "Haba tonka, ámbar, cedro y vetiver.",

            concentration:
                "Eau de Parfum",

            duration:
                "4 - 6 horas"
        },


        odyssey_white: {
            id: "odyssey_white",
            name: "Odyssey White Homme Edition",
            price: 65,
            img: "img/WHITE.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: Salidas casuales; es un aroma fácil de gustar a cualquiera.",

            review:
                "¿A qué huele? Dulce suave, limpio y un poco especiado (con toques de manzana).",

            topNotes:
                "Manzana verde, pimienta rosa y cardamomo.",

            heartNotes:
                "Lavanda, flor de azahar y violeta.",

            baseNotes:
                "Vainilla, ámbar y maderas.",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 7 horas"
        },


        armani_code: {
            id: "armani_code",
            name: "Armani Code",
            price: 160,
            img: "img/ARMANI.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: Citas románticas, eventos formales y de noche.",

            review:
                "¿A qué huele? Elegante, nocturno y seductor. Huele a madera suave, vainilla y un toque de cuero.",

            topNotes:
                "Bergamota y hoja de bergamota (cítrico suave).",

            heartNotes:
                "Iris y salvia clarea.",

            baseNotes:
                "Haba tonka y madera de cedro.",

            concentration:
                "Eau de Toilette",

            duration:
                "6 - 8 horas"
        },


        invictus_victory: {
            id: "invictus_victory",
            name: "Invictus Victory Elixir",
            price: 175,
            img: "img/INVICTUS.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: Salir de fiesta y destacar. Dura una eternidad en la piel.",

            review:
                "¿A qué huele? Potente y dulce. Huele a una mezcla de coco, vainilla y maderas oscuras.",

            topNotes:
                "Cardamomo, pimienta negra y lavanda",

            heartNotes:
                "Incienso y pachulí",

            baseNotes:
                "Vainilla, haba tonka y ámbar",

            concentration:
                "Eau de Parfum",

            duration:
                "8 - 12 horas"
        },


        nitro_red: {
            id: "nitro_red",
            name: "Nitro Red",
            price: 70,
            img: "img/NITRO.png",
            gender: "caballero",
            featured: false,

            description:
                "Ideal para: Jóvenes que quieren un perfume muy fuerte y alegre.",

            review:
                "¿A qué huele? Una bomba de frutas dulces (recuerda a sandía y chicle fresco).",

            topNotes:
                "Sandía, manzana verde, lavanda y bergamota.",

            heartNotes:
                "Notas marinas, cedro y geranio.",

            baseNotes:
                "Ámbar, sándalo y pachulí.",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 8 horas"
        },


        art_of_universe: {
            id: "art_of_universe",
            name: "Art of Universe",
            price: 90,
            img: "img/ART.png",
            gender: "unisex",
            featured: false,

            description:
                "Ideal para: Ocasiones especiales donde quieras oler distinto a los demás.",

            review:
                "¿A qué huele? Misterioso y elegante, con notas amaderadas y un toque dulce ahumado.",

            topNotes:
                "Notas cítricas y frescas",

            heartNotes:
                "Notas florales y aromáticas",

            baseNotes:
                "Maderas, ámbar y almizcle",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 8 horas"
        },


        odyssey_bahamas: {
            id: "odyssey_bahamas",
            name: "Odyssey Bahamas",
            price: 75,
            img: "img/BAHAMAS.png",
            gender: "unisex",
            featured: false,

            description:
                "Ideal para: Calor extremo, albercadas y días de descanso.",

            review:
                "¿A qué huele? A vacaciones en la playa. Huele a frutas tropicales, cítricos y brisa del mar.",

            topNotes:
                "Mango, maracuyá (fruta de la pasión) y cítricos.",

            heartNotes:
                "Notas marinas, coco y hojas verdes.",

            baseNotes:
                "Almizcle blanco, ámbar y sándalo.",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 8 horas"
        },


        melancolia: {
            id: "melancolia",
            name: "Melancolia",
            price: 100,
            img: "img/MELANCOLIA.png",
            gender: "unisex",
            featured: false,

            description:
                "Ideal para: Personas que buscan un aroma serio, relajante y formal.",

            review:
                "¿A qué huele? Sobrio, fresco y maduro. Huele a hierbas frescas y maderas finas.",

            topNotes:
                "Cítricos, bergamota y lavanda.",

            heartNotes:
                "Hierbas aromáticas, romero y geranio.",

            baseNotes:
                "Vetiver, madera de cedro y musgo.",

            concentration:
                "Eau de Parfum",

            duration:
                "7 - 9 horas"
        },


        amber_oud: {
            id: "amber_oud",
            name: "Amber Oud Gold Edition",
            price: 160,
            img: "img/AMBER.png",
            gender: "unisex",
            featured: false,

            description:
                "Ideal para: Salir de noche o eventos donde quieras dejar huella por donde pases.",

            review:
                "¿A qué huele? A fruta madura (como melón dulce) envuelta en oro. Huele a lujo y es súper intenso.",

            topNotes:
                "Bergamota, notas verdes y frutas",

            heartNotes:
                "Melón, piña, jazmín y canela",

            baseNotes:
                "Vainilla, almizcle, ámbar y maderas",

            concentration:
                "Eau de Parfum",

            duration:
                "8 - 12 horas"
        },


        veneno_scarlet: {
            id: "veneno_scarlet",
            name: "Veneno Scarlet",
            price: 85,
            img: "img/VENENO.png",
            gender: "dama",
            featured: true,

            description:
                "Ideal para: Salidas nocturnas cuando quieres transmitir misterio y atracción.",

            review:
                "¿A qué huele? Intenso y sensual. Una mezcla de frutos rojos con especias y madera.",

            topNotes:
                "Frutos rojos, pimienta rosa y cítricos.",

            heartNotes:
                "Rosa, especias cálidas y azafrán.",

            baseNotes:
                "Ámbar, vainilla, madera de oud y cuero.",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 8 horas"
        },


        ameerat_al_arab: {
            id: "ameerat_al_arab",
            name: "Ameerat Al Arab",
            price: 45,
            img: "img/AMEERAT.png",
            gender: "dama",
            featured: false,

            description:
                "Ideal para: Quienes buscan oler sofisticados, limpios y con un toque exótico.",

            review:
                "¿A qué huele? Un aroma muy oriental, frutal y floral dulce pero delicado.",

            topNotes:
                "Uva, naranja y manzana.",

            heartNotes:
                "Rosa, jazmín, azucena e ylang-ylang.",

            baseNotes:
                "Almizcle, ámbar, sándalo y haba tonka.",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 8 horas"
        },


        odyssey_montagne: {
            id: "odyssey_montagne",
            name: "Odyssey Montagne",
            price: 45,
            img: "img/MONTAÑA.png",
            gender: "dama",
            featured: false,

            description:
                "Ideal para: Quienes odian los perfumes dulces y prefieren aromas verdes y limpios.",

            review:
                "¿A qué huele? A aire puro de montaña, pino y naturaleza fresca.",

            topNotes:
                "Bergamota, menta fresca y notas ozónicas (aire puro).",

            heartNotes:
                "Pino, lavanda y salvia.",

            baseNotes:
                "Madera de cedro, vetiver y musgo de roble.",

            concentration:
                "Eau de Parfum",

            duration:
                "6 - 8 horas"
        }

    };


    // =========================================================
    // 2. CATEGORÍAS POR GÉNERO
    // =========================================================

    const catalog = {

        caballero: [
            products.lacoste_blanc,
            products.malibu_hawas,
            products.khamrah,
            products.turathi_blue,
            products.odyssey_mega,
            products.odyssey_white,
            products.armani_code,
            products.invictus_victory,
            products.nitro_red,
            products.art_of_universe,
            products.odyssey_bahamas,
            products.melancolia,
            products.amber_oud
        ],

        dama: [
            products.veneno_scarlet,
            products.ameerat_al_arab,
            products.odyssey_montagne
        ],

        // =====================================================
        // CORREGIDO
        // Se eliminó products.khamrah_qahwa porque NO existe
        // en la base de datos.
        // =====================================================

        unisex: [
            products.amber_oud,
            products.art_of_universe,
            products.melancolia,
            products.ameerat_al_arab,
            products.nitro_red,
            products.odyssey_bahamas
        ]

    };


    // =========================================================
    // 3. PRODUCTOS POR OCASIÓN
    // =========================================================

    const occasionProductsData = {

        oficina: [
            products.lacoste_blanc,
            products.turathi_blue,
            products.odyssey_mega,
            products.odyssey_white,
            products.ameerat_al_arab
        ],

        fiesta: [
            products.khamrah,
            products.nitro_red,
            products.art_of_universe,
            products.invictus_victory,
            products.amber_oud,
            products.odyssey_bahamas
        ],

        citas: [
            products.armani_code,
            products.veneno_scarlet,
            products.malibu_hawas,
            products.melancolia
        ]

    };


    // =========================================================
    // 4. ELEMENTOS DEL DOM
    // =========================================================

    const productsGrid =
        document.getElementById("productsGrid");

    const genderTitle =
        document.getElementById("genderTitle");

    const selectedCategoryText =
        document.getElementById("selectedCategoryText");

    const genderButtons =
        document.querySelectorAll(".gender-btn");

    const categoryButtons =
        document.querySelectorAll(".cat-btn");


    // =========================================================
    // 5. TÍTULOS POR GÉNERO
    // =========================================================

    const titleTexts = {

        caballero:
            'El perfume ideal para “Él”',

        dama:
            'El perfume ideal para “Ella”',

        unisex:
            'El perfume ideal para “Todos”'

    };


    // =========================================================
    // 6. FORMATO DE PRECIO
    // =========================================================

    function formatPrice(price) {

        return new Intl.NumberFormat("es-MX", {

            style: "currency",

            currency: "MXN",

            minimumFractionDigits: 0,

            maximumFractionDigits: 0

        }).format(Number(price) || 0);

    }


    // =========================================================
    // 7. ESCAPAR HTML
    // =========================================================

    function escapeHTML(value) {

        if (value === undefined || value === null) {

            return "";

        }

        return String(value)

            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    }


    // =========================================================
    // 8. CREAR TARJETA DE PRODUCTO
    // =========================================================

    function createProductCard(product) {

        // Protección adicional:
        // evita que un producto inexistente rompa el catálogo.

        if (!product) {

            return "";

        }


        return `

            <div
                class="product-card ${product.featured ? "featured" : ""}"
                data-product-id="${escapeHTML(product.id)}"
            >

                <div class="product-image-box">

                    <img
                        src="${escapeHTML(product.img)}"
                        alt="${escapeHTML(product.name)}"
                        loading="lazy"
                    >

                </div>

                <h3 class="product-title">
                    ${escapeHTML(product.name)}
                </h3>

                <span class="product-price">
                    ${formatPrice(product.price)}
                </span>

                <a
                    href="#"
                    class="btn-buy"
                    data-product-id="${escapeHTML(product.id)}"
                >
                    Comprar ahora
                </a>

            </div>

        `;

    }


    // =========================================================
    // 9. RENDERIZAR CATÁLOGO
    // =========================================================

    function renderProducts(gender) {

        if (!productsGrid) return;


        const productsToShow =
            (catalog[gender] || [])
                .filter(product => product);


        if (genderTitle) {

            genderTitle.textContent =
                titleTexts[gender] ||
                "Nuestros perfumes";

        }


        productsGrid.innerHTML =
            productsToShow
                .map(product => createProductCard(product))
                .join("");


        // Al cambiar de género, el carrusel vuelve al inicio.

        productsGrid.scrollLeft = 0;

    }


    // =========================================================
    // 10. CAMBIAR GÉNERO
    // =========================================================

    genderButtons.forEach(button => {

        button.addEventListener("click", () => {

            genderButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const gender =
                button.getAttribute("data-gender");


            renderProducts(gender);

        });

    });


    // =========================================================
    // 11. CATEGORÍAS OLFATIVAS
    // =========================================================

    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            categoryButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            button.classList.add("active");


            if (selectedCategoryText) {

                selectedCategoryText.textContent =
                    `“${button.textContent.trim()}”`;

            }

        });

    });


    // =========================================================
    // 12. CARGA INICIAL
    // =========================================================

    renderProducts("caballero");


    // =========================================================
    // 13. CARRUSEL PRINCIPAL
    // =========================================================

    const prevBtn =
        document.getElementById("prevBtn");

    const nextBtn =
        document.getElementById("nextBtn");


    // Avanza exactamente una tarjeta; el scroll-snap del CSS
    // la deja alineada (centrada en móvil).

    function getProductStep() {

        const card =
            productsGrid.querySelector(".product-card");

        if (!card) return 0;

        const gap =
            parseFloat(getComputedStyle(productsGrid).columnGap) || 0;

        return card.offsetWidth + gap;

    }


    if (
        productsGrid &&
        prevBtn &&
        nextBtn
    ) {

        nextBtn.addEventListener("click", () => {

            productsGrid.scrollBy({

                left: getProductStep(),

                behavior: "smooth"

            });

        });


        prevBtn.addEventListener("click", () => {

            productsGrid.scrollBy({

                left: -getProductStep(),

                behavior: "smooth"

            });

        });

    }


    // =========================================================
    // 14. RENDERIZAR PRODUCTOS DE OCASIÓN
    // =========================================================

    const occasionProductsGrid =
        document.getElementById("occasionProductsGrid");


    function loadOccasionProducts(occasionKey) {

        if (!occasionProductsGrid) return;


        const productsToShow =
            (
                occasionProductsData[occasionKey] ||
                occasionProductsData.oficina
            )
            .filter(product => product);


        occasionProductsGrid.innerHTML =
            productsToShow
                .map(product => createProductCard(product))
                .join("");

    }


    loadOccasionProducts("oficina");


    // =========================================================
    // 15. SELECCIÓN DE OCASIÓN
    // =========================================================

    const occasionCards =
        Array.from(document.querySelectorAll(".occasion-card"));

    const occasionGrid =
        document.getElementById("occasionGrid");


    // Desplaza el carrusel para que la tarjeta quede centrada.

    function centerOccasionCard(card, behavior = "smooth") {

        if (!occasionGrid || !card) return;


        const gridRect =
            occasionGrid.getBoundingClientRect();

        const cardRect =
            card.getBoundingClientRect();


        const offset =
            (cardRect.left + cardRect.width / 2) -
            (gridRect.left + gridRect.width / 2);


        occasionGrid.scrollBy({

            left: offset,

            behavior: behavior

        });

    }


    function selectOccasion(card, behavior = "smooth") {

        if (!card) return;


        occasionCards.forEach(c => {

            c.classList.remove("active");

        });


        card.classList.add("active");


        loadOccasionProducts(
            card.getAttribute("data-occasion")
        );


        centerOccasionCard(card, behavior);

    }


    occasionCards.forEach(card => {

        card.addEventListener("click", () => {

            selectOccasion(card);

        });

    });


    // =========================================================
    // 16. CARRUSEL DE OCASIONES
    // =========================================================

    const occasionPrevBtn =
        document.getElementById("occasionPrevBtn");

    const occasionNextBtn =
        document.getElementById("occasionNextBtn");


    function moveOccasion(direction) {

        const currentIndex =
            occasionCards.findIndex(card =>
                card.classList.contains("active")
            );


        const nextIndex =
            Math.min(
                Math.max(currentIndex + direction, 0),
                occasionCards.length - 1
            );


        selectOccasion(occasionCards[nextIndex]);

    }


    if (
        occasionGrid &&
        occasionPrevBtn &&
        occasionNextBtn
    ) {

        occasionNextBtn.addEventListener("click", () => {

            moveOccasion(1);

        });


        occasionPrevBtn.addEventListener("click", () => {

            moveOccasion(-1);

        });

    }


    // Al deslizar con el dedo, la ocasión que queda centrada
    // se selecciona automáticamente.

    if (occasionGrid) {

        let occasionScrollTimer;


        occasionGrid.addEventListener("scroll", () => {

            clearTimeout(occasionScrollTimer);


            occasionScrollTimer = setTimeout(() => {

                const gridRect =
                    occasionGrid.getBoundingClientRect();

                const center =
                    gridRect.left + gridRect.width / 2;


                const closest =
                    occasionCards.reduce((best, card) => {

                        const rect =
                            card.getBoundingClientRect();

                        const distance =
                            Math.abs(rect.left + rect.width / 2 - center);


                        return (!best || distance < best.distance)
                            ? { card, distance }
                            : best;

                    }, null);


                if (
                    closest &&
                    !closest.card.classList.contains("active")
                ) {

                    occasionCards.forEach(c => {

                        c.classList.remove("active");

                    });


                    closest.card.classList.add("active");


                    loadOccasionProducts(
                        closest.card.getAttribute("data-occasion")
                    );

                }

            }, 150);

        });


        // Carga inicial: centra la ocasión activa (Oficina).

        centerOccasionCard(
            occasionGrid.querySelector(".occasion-card.active"),
            "instant"
        );

    }


    // =========================================================
    // 17. FAQ
    // =========================================================

    const faqItems =
        document.querySelectorAll(".faq-item");


    faqItems.forEach(item => {

        const question =
            item.querySelector(".faq-question");

        const icon =
            item.querySelector(".faq-icon");


        if (!question) return;


        question.addEventListener("click", () => {

            const wasActive =
                item.classList.contains("active");


            faqItems.forEach(otherItem => {

                otherItem.classList.remove("active");


                const otherIcon =
                    otherItem.querySelector(".faq-icon");


                if (otherIcon) {

                    otherIcon.textContent = "+";

                }

            });


            if (!wasActive) {

                item.classList.add("active");


                if (icon) {

                    icon.textContent = "−";

                }

            }

        });

    });


    // =========================================================
    // 18. CHECKOUT
    // =========================================================

    const checkoutModal =
        document.getElementById("checkoutModal");

    const closeCheckout =
        document.getElementById("closeCheckout");


    const checkoutImage =
        document.getElementById("checkoutImage");

    const checkoutName =
        document.getElementById("checkoutName");

    const checkoutPrice =
        document.getElementById("checkoutPrice");

    const checkoutDescription =
        document.getElementById("checkoutDescription");

    const checkoutReview =
        document.getElementById("checkoutReview");

    const checkoutTopNotes =
        document.getElementById("checkoutTopNotes");

    const checkoutHeartNotes =
        document.getElementById("checkoutHeartNotes");

    const checkoutBaseNotes =
        document.getElementById("checkoutBaseNotes");

    const checkoutConcentration =
        document.getElementById("checkoutConcentration");

    const checkoutDuration =
        document.getElementById("checkoutDuration");

    const checkoutTotal =
        document.getElementById("checkoutTotal");


    const quantityMinus =
        document.getElementById("quantityMinus");

    const quantityPlus =
        document.getElementById("quantityPlus");

    const quantityValue =
        document.getElementById("quantityValue");


    const purchaseForm =
        document.getElementById("purchaseForm");


    // En móviles, "Sobre esta fragancia" se abre y cierra
    // tocando su título (en pantallas grandes siempre está abierto).

    const perfumeDetails =
        document.querySelector(".perfume-details");

    const perfumeDetailHeader =
        document.querySelector(".perfume-detail-header");


    if (perfumeDetails && perfumeDetailHeader) {

        perfumeDetailHeader.addEventListener("click", () => {

            perfumeDetails.classList.toggle("open");

        });

    }


    // =========================================================
    // 19. ESTADO DEL CHECKOUT
    // =========================================================

    let selectedProduct = null;

    let quantity = 1;


    // =========================================================
    // 20. ACTUALIZAR TOTAL
    // =========================================================

    function updateCheckoutTotal() {

        if (!selectedProduct) return;


        const total =
            Number(selectedProduct.price) *
            quantity;


        if (checkoutTotal) {

            checkoutTotal.textContent =
                formatPrice(total);

        }

    }


    // =========================================================
    // 21. CARGAR DATOS DEL PRODUCTO
    // =========================================================

    function updateCheckoutProduct(product) {

        if (!product) return;


        if (checkoutImage) {

            checkoutImage.src =
                product.img || "";

            checkoutImage.alt =
                product.name || "Perfume";

        }


        if (checkoutName) {

            checkoutName.textContent =
                product.name || "Perfume";

        }


        if (checkoutPrice) {

            checkoutPrice.textContent =
                formatPrice(product.price);

        }


        if (checkoutDescription) {

            checkoutDescription.textContent =
                product.description ||
                "Información no disponible.";

        }


        if (checkoutReview) {

            checkoutReview.textContent =
                product.review ||
                "Información no disponible.";

        }


        if (checkoutTopNotes) {

            checkoutTopNotes.textContent =
                product.topNotes ||
                "Información no disponible.";

        }


        if (checkoutHeartNotes) {

            checkoutHeartNotes.textContent =
                product.heartNotes ||
                "Información no disponible.";

        }


        if (checkoutBaseNotes) {

            checkoutBaseNotes.textContent =
                product.baseNotes ||
                "Información no disponible.";

        }


        if (checkoutConcentration) {

            checkoutConcentration.textContent =
                product.concentration ||
                "Información no disponible.";

        }


        if (checkoutDuration) {

            checkoutDuration.textContent =
                product.duration ||
                "Información no disponible.";

        }

    }


    // =========================================================
    // 22. ABRIR CHECKOUT
    // =========================================================

    function openCheckout(product) {

        if (!checkoutModal) {

            console.error(
                "No se encontró #checkoutModal"
            );

            return;

        }


        selectedProduct = product;

        quantity = 1;


        updateCheckoutProduct(product);


        if (quantityValue) {

            quantityValue.textContent =
                quantity;

        }


        updateCheckoutTotal();


        if (perfumeDetails) {

            perfumeDetails.classList.remove("open");

        }


        const checkoutBox =
            checkoutModal.querySelector(".checkout-modal");

        if (checkoutBox) {

            checkoutBox.scrollTop = 0;

        }

        checkoutModal.classList.add("active");


        document.body.style.overflow =
            "hidden";

    }


    // =========================================================
    // 23. CERRAR CHECKOUT
    // =========================================================

    function closeCheckoutModal() {

        if (!checkoutModal) return;


        checkoutModal.classList.remove("active");


        document.body.style.overflow =
            "";


        selectedProduct = null;

    }


    // =========================================================
    // 24. BOTÓN CERRAR
    // =========================================================

    if (closeCheckout) {

        closeCheckout.addEventListener(
            "click",
            closeCheckoutModal
        );

    }


    // =========================================================
    // 25. CERRAR HACIENDO CLIC FUERA
    // =========================================================

    if (checkoutModal) {

        checkoutModal.addEventListener(
            "click",
            event => {

                if (
                    event.target === checkoutModal
                ) {

                    closeCheckoutModal();

                }

            }
        );

    }


    // =========================================================
    // 26. ESC PARA CERRAR
    // =========================================================

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                checkoutModal &&
                checkoutModal.classList.contains("active")
            ) {

                closeCheckoutModal();

            }

        }
    );


    // =========================================================
    // 27. AUMENTAR CANTIDAD
    // =========================================================

    if (quantityPlus) {

        quantityPlus.addEventListener(
            "click",
            () => {

                if (quantity >= 10) return;


                quantity++;


                if (quantityValue) {

                    quantityValue.textContent =
                        quantity;

                }


                updateCheckoutTotal();

            }
        );

    }


    // =========================================================
    // 28. DISMINUIR CANTIDAD
    // =========================================================

    if (quantityMinus) {

        quantityMinus.addEventListener(
            "click",
            () => {

                if (quantity <= 1) return;


                quantity--;


                if (quantityValue) {

                    quantityValue.textContent =
                        quantity;

                }


                updateCheckoutTotal();

            }
        );

    }


    // =========================================================
    // 29. BOTÓN "COMPRAR AHORA"
    // =========================================================

    document.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(".btn-buy");


            if (!button) return;


            event.preventDefault();


            const productId =
                button.getAttribute(
                    "data-product-id"
                );


            if (!productId) {

                console.error(
                    "El botón no tiene data-product-id."
                );

                return;

            }


            const product =
                products[productId];


            if (!product) {

                console.error(
                    "No se encontró el producto:",
                    productId
                );

                return;

            }


            console.log(
                "Producto seleccionado:",
                product
            );


            openCheckout(product);

        }
    );


    // =========================================================
    // 30. FORMULARIO DE COMPRA
    // =========================================================

    if (purchaseForm) {

        purchaseForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                // -------------------------------------------------
                // VERIFICAR PRODUCTO
                // -------------------------------------------------

                if (!selectedProduct) {

                    alert(
                        "No se ha seleccionado ningún perfume."
                    );

                    return;

                }


                // -------------------------------------------------
                // NOMBRE
                // -------------------------------------------------

                const nameInput =
                    document.getElementById(
                        "purchaseName"
                    );


                const name =
                    nameInput
                        ? nameInput.value.trim()
                        : "";


                if (!name) {

                    alert(
                        "Escribe tu nombre completo."
                    );

                    if (nameInput) {

                        nameInput.focus();

                    }

                    return;

                }


                // -------------------------------------------------
                // TELÉFONO
                // -------------------------------------------------

                const phoneInput =
                    document.getElementById(
                        "purchasePhone"
                    );


                const phone =
                    phoneInput
                        ? phoneInput.value.trim()
                        : "";


                if (!phone) {

                    alert(
                        "Escribe tu número de WhatsApp."
                    );

                    if (phoneInput) {

                        phoneInput.focus();

                    }

                    return;

                }


                // -------------------------------------------------
                // PUNTO DE RECOGIDA
                // -------------------------------------------------

                const pickup =
                    document.querySelector(
                        'input[name="pickup"]:checked'
                    );


                if (!pickup) {

                    alert(
                        "Selecciona un lugar de recogida."
                    );

                    return;

                }


                const pickupLocation =
                    pickup.value;


                // -------------------------------------------------
                // TOTAL
                // -------------------------------------------------

                const total =
                    Number(selectedProduct.price) *
                    quantity;


                // -------------------------------------------------
                // MENSAJE WHATSAPP
                // -------------------------------------------------

                const message =

`Hola, Pura Escencia. 👋

Quiero realizar el siguiente pedido:

Perfume: ${selectedProduct.name}

Cantidad: ${quantity}

Precio unitario: ${formatPrice(selectedProduct.price)}

Total: ${formatPrice(total)}

Nombre: ${name}

WhatsApp: ${phone}

Lugar de recogida: ${pickupLocation}

Quedo pendiente de la confirmación de mi pedido.`;


                // -------------------------------------------------
                // NÚMERO DE WHATSAPP
                // -------------------------------------------------

                const whatsappNumber =
                    "526673261707";


                // -------------------------------------------------
                // URL
                // -------------------------------------------------

                const whatsappURL =
                    "https://wa.me/" +
                    whatsappNumber +
                    "?text=" +
                    encodeURIComponent(message);


                // -------------------------------------------------
                // ABRIR WHATSAPP
                // -------------------------------------------------

                window.open(
                    whatsappURL,
                    "_blank"
                );


                // -------------------------------------------------
                // CERRAR CHECKOUT
                // -------------------------------------------------

                closeCheckoutModal();

            }
        );

    }


    // =========================================================
    // 31. OPCIÓN "OTRO" PARA PUNTO DE RECOGIDA
    // =========================================================

    const pickupRadios =
        document.querySelectorAll(
            'input[name="pickup"]'
        );


    const customContainer =
        document.getElementById(
            "custom-pickup-container"
        );


    const customInput =
        document.getElementById(
            "custom-pickup-input"
        );


    if (
        pickupRadios.length &&
        customContainer &&
        customInput
    ) {

        pickupRadios.forEach(radio => {

            radio.addEventListener(
                "change",
                event => {

                    if (
                        event.target.value === "Otro"
                    ) {

                        customContainer.style.display =
                            "block";


                        customInput.setAttribute(
                            "required",
                            "true"
                        );


                        customInput.focus();

                    } else {

                        customContainer.style.display =
                            "none";


                        customInput.removeAttribute(
                            "required"
                        );


                        customInput.value = "";

                    }

                }
            );

        });

    }


    // =========================================================
    // FIN DEL SISTEMA
    // =========================================================

    console.log(
        "Pura Escencia: sistema cargado correctamente."
    );



// =========================================================
    // 32. MENÚ HAMBURGUESA (MÓVIL)
    // =========================================================

    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const navLinks = document.querySelectorAll(".nav-link");

    if (menuToggle && navMenu) {

        // Alternar menú al hacer clic en el botón de las 3 rayitas
        menuToggle.addEventListener("click", () => {
            menuToggle.classList.toggle("active");
            navMenu.classList.toggle("active");
        });

        // Cerrar el menú automáticamente al hacer clic en cualquier enlace
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            });
        });

        // Cerrar el menú si se hace clic fuera de él
        document.addEventListener("click", (event) => {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                menuToggle.classList.remove("active");
                navMenu.classList.remove("active");
            }
        });
    }




});