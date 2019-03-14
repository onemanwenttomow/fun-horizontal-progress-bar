var progressBar = document.getElementById("progress-bar");
var bars = document.getElementById("bars");

function checkScrollPos(){
    var percentageScroll = window.pageYOffset / (document.body.clientHeight - window.innerHeight);
    progressBar.style.width = (percentageScroll * 100) +"%";
    requestAnimationFrame(checkScrollPos);
}

bars.addEventListener("click", function(e) {
    var widthPercentage = (e.pageX / document.body.clientWidth);
    var heightOfPage = (document.body.clientHeight - window.innerHeight);
    document.documentElement.scrollTop = widthPercentage * heightOfPage;
});

requestAnimationFrame(checkScrollPos);
