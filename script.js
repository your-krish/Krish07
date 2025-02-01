document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-grid img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            const src = img.getAttribute("src");
            const modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <img src="${src}" alt="Expanded Image">
                    <a href="${src}" download class="download-btn">Download</a>
                </div>
            `;
            document.body.appendChild(modal);
            
            modal.querySelector(".close").addEventListener("click", () => {
                modal.remove();
            });
        });
    });

    // CSS for modal styling
    const style = document.createElement("style");
    style.innerHTML = `
        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            padding: 20px;
            box-sizing: border-box;
        }
        .modal-content {
            position: relative;
            max-width: 80vw;
            max-height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .modal-content img {
            width: auto;
            max-width: 80vw;
            max-height: 80vh;
            border-radius: 10px;
            object-fit: contain;
        }
        .close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 30px;
            color: white;
            cursor: pointer;
        }
        .download-btn {
            margin-top: 10px;
            padding: 10px 20px;
            background: #ff8a00;
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-weight: bold;
            border-radius: 5px;
            transition: background 0.3s;
        }
        .download-btn:hover {
            background: #ff6600;
        }
    `;
    document.head.appendChild(style);
});
