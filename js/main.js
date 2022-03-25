$(document).ready(function() {
    
    var ctx = $("#chart-line");
    
    var myChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ["CSS", "BOOTSTRAP", "PHP & MYSQL", "JAVASCRIPT" , "JQUERY" , "HTML"],
            datasets: [{
                data: [700, 600, 400, 400, 400, 4000],
                backgroundColor: ["#fff", "rgb(198 184 233 / 54%)",
                                    "#fff", "rgb(198 184 233 / 54%)" , "#fff" , "rgb(198 184 233 / 54%)"],
                
                datalabels: {
                    // anchor: 'end',
                    color: '#707070',
                    font: function(context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 25);
                         return {
                           size: size,
                          weight: "lighter",
                          family:"'Montserrat', 'sans-serif'"
                        };
                      },
                    rotation: [-20, -40 , -10 , 10 , 35, 0],
                    formatter: function(value, context) {
                        return context.chart.data.labels[context.dataIndex];
                      }
                  }
            }],
            
        },

      options: {
        plugins: {
            legend: {
                display: false,
               
            },
            tooltip: {
                enabled: false,
                
            }
        }
    },
    plugins: [ChartDataLabels],
    
        
    });


const allSections = document.querySelectorAll('.header ul li');


function scrollSomeWhere (element){
    element.forEach(element => {
        element.addEventListener("click" , (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior : 'smooth'
            });
        });
    });
}


scrollSomeWhere(allSections);

});