var currentPortfolioPosition = 0;

var portfolioSlider = document.getElementById("portfolio");
portfolioSlider.style.backgroundImage = portfolio[0];

function portfolioPrevSlide() {

    if (currentPortfolioPosition > 0) {
        portfolioSlider.style.backgroundImage = portfolio[currentPortfolioPosition - 1];
        currentPortfolioPosition -= 1;
    }
}

function portfolioNextSlide() {

    if (currentPortfolioPosition < maxPortfolioPosition) {
        portfolioSlider.style.backgroundImage = portfolio[currentPortfolioPosition + 1];
        currentPortfolioPosition += 1;
    }
}