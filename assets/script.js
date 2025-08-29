document.addEventListener("DOMContentLoaded", () => {
    const services = [
        {
            name: "National Emergency Number",
            sub_name: "National Emergency",
            number: "999",
            category: "All",
            icon: "assets/emergency.png",
        },
        {
            name: "Police Helpline Number",
            sub_name: "Police",
            number: "999",
            category: "Police",
            icon: "assets/police.png",
        },
        {
            name: "Fire Service Number",
            sub_name: "Fire Service",
            number: "999",
            category: "Fire",
            icon: "assets/fire-service.png",
        },
        {
            name: "Ambulance Service",
            sub_name: "Ambulance",
            number: "194-999999",
            category: "Health",
            icon: "assets/ambulance.png",
        },
        {
            name: "Women & Child Helpline",
            sub_name: "Women & Child Helpline",
            number: "109",
            category: "Help",
            icon: "assets/emergency.png",
        },
        {
            name: "Anti-Corruption Helpline",
            sub_name: "Anti-Corruption",
            number: "106",
            category: "Govt.",
            icon: "assets/emergency.png",
        },
        {
            name: "Electricity Helpline",
            sub_name: "Electricity Outage",
            number: "16216",
            category: "Electricity",
            icon: "assets/emergency.png",
        },
        {
            name: "Brac Helpline",
            sub_name: "Brac",
            number: "16445",
            category: "NGO",
            icon: "assets/brac.png",
        },
        {
            name: "Bangladesh Railway Helpline",
            sub_name: "Bangladesh Railway",
            number: "163",
            category: "Travel",
            icon: "assets/Bangladesh-Railway.png",
        },
    ];

    const cardSection = document.querySelector(".card-section");
    const heartCountSpan = document.getElementById("heart-count");
    const coinCountSpan = document.getElementById("coin-count");
    const copyCountSpan = document.getElementById("copy-count");
    const historyList = document.querySelector(".history-list");
    const clearHistoryBtn = document.querySelector(".clear-history-btn");

    let heartCount = 0;
    let coinCount = 100;
    let copyCount = 0;

    const updateCounts = () => {
        heartCountSpan.textContent = heartCount;
        coinCountSpan.textContent = coinCount;
        copyCountSpan.textContent = copyCount;
    };

    const addCallToHistory = (serviceName, serviceNumber) => {
        const now = new Date();
        const callTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')} ${now.getHours() >= 12 ? 'PM' : 'AM'}`;
        const historyItem = document.createElement("div");
        historyItem.classList.add("history-item");
        historyItem.innerHTML = `
            ${serviceName} <span class="service-number">${serviceNumber}</span>
            <span class="call-time">${callTime}</span>
        `;
        historyList.prepend(historyItem);
    };

    const createCard = (service) => {
        const card = document.createElement("div");
        card.classList.add("service-card");

        card.innerHTML = `
            <div class="card-header">
                <img src="${service.icon}" alt="${service.name} icon">
                <i class="fas fa-heart heart-icon"></i>
            </div>
            <h3 class="card-title">${service.name}</h3>
            <p class="card-sub-name">${service.sub_name}</p>
            <p class="card-number">${service.number}</p>
            <span class="category-badge">${service.category}</span>
            <div class="card-buttons">
                <button class="copy-btn">
                    <i class="fas fa-copy"></i> Copy
                </button>
                <button class="call-btn">
                    <i class="fas fa-phone-alt"></i> Call
                </button>
            </div>
        `;

        const heartIcon = card.querySelector(".heart-icon");
        heartIcon.addEventListener("click", () => {
            heartIcon.classList.toggle("liked");
            if (heartIcon.classList.contains("liked")) {
                heartCount++;
            } else {
                heartCount--;
            }
            updateCounts();
        });

        const copyBtn = card.querySelector(".copy-btn");
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(service.number);
            copyCount++;
            updateCounts();
            alert(`Copied ${service.number} to clipboard!`);
        });

        const callBtn = card.querySelector(".call-btn");
        callBtn.addEventListener("click", () => {
            if (coinCount >= 20) {
                coinCount -= 20;
                updateCounts();
                addCallToHistory(service.name, service.number);
                alert(`Calling ${service.name} at ${service.number}`);
            } else {
                alert("You don't have enough coins to make a call.");
            }
        });

        cardSection.appendChild(card);
    };

    services.forEach(createCard);
    updateCounts();

    clearHistoryBtn.addEventListener("click", () => {
        historyList.innerHTML = "";
    });
});