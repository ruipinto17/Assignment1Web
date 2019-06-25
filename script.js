const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () =>
    {
        //toggle nav
        nav.classList.toggle('nav-active');

        //animation for the links
        navLinks.forEach((link, index) =>
        {
            if (link.style.animation)
            {
                link.style.animation = '';
            }
            else 
            {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');

    });

}

navSlide();

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length)
    {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}

//demo
google.charts.load("visualization", "1", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(initChart);

$(window).on("throttledresize", function (event) {
    initChart();
  
});

function initChart() {
    var options = {
      pieHole: 0.4,
	    legend:{position: 'bottom'},
      width: '100%',
      height: '80%',
      pieSliceText: 'percentage',
      colors: ['#0598d8', '#f97263', '#773521'],
      chartArea: {
        left: "3%",
        top: "3%",
        height: "84%",
        width: "94%"
      }
    };

    var data = google.visualization.arrayToDataTable([
        ["Distribuição Nutricional", "em Percentagem"],
        ["Hidratos de Carbono", 11],
        ["Lípidos", 2],
        ["Proteína", 2]
    ]);
    drawChart(data, options)
}

function drawChart(data, options) {
    var chart = new google.visualization.PieChart(document.getElementById('ne-food-chart'));
    chart.draw(data, options);
}

