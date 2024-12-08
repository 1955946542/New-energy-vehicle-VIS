// chart_of_waijiao.js

// Function to fetch data from the chart JSON file
async function getData() {
    const response = await fetch('assets/js/part02/chart_of_export.json');
    return response.json();
}

// Function to update the chart based on the selected year and chart type
function updateChart(year, chartType) {
    getData().then(data => {
        const series = [
            { name: '0-10万辆', id: '0-10', marker: { symbol: 'circle' } },
            { name: '10-20万辆', id: '10-20', marker: { symbol: 'circle' } },
            { name: '20-30万辆', id: '20-30', marker: { symbol: 'circle' } },
            { name: '30万辆及以上', id: '30+', marker: { symbol: 'circle' } }
        ];

        const getDataForYear = (sportName, year) => {
            const temp = [];
            data.forEach(elm => {
                if (elm.exports[year] && elm.exports[year][sportName]) {
                    temp.push({
                        x: elm.location,  // Longitude (or location)
                        y: elm.exports[year][sportName],  // Export volume
                        name: elm.name     // Country name
                    });
                }
            });
            return temp;
        };

        series.forEach(s => {
            s.data = getDataForYear(s.id, year);
        });

        // Render the chart based on chart type
        Highcharts.chart('part020102', {
            chart: {
                credits: { enabled: false },
                type: chartType,  // Dynamically set chart type (scatter or column)
                zooming: { type: 'xy' },
                backgroundColor: 'transparent',
            },
            title: {
                text: '中国汽车出口量统计图',
                align: 'left',
                style: { fontSize: '16px' }
            },
            subtitle: {
                text: '数据来源于腾讯网',
                align: 'left'
            },
            xAxis: {
                title: { text: '位置', style: { fontSize: '14px' } },
                labels: { format: '{value}', style: { fontSize: '12px' } },
            },
            yAxis: {
                title: { text: '出口量' },
                labels: { format: '{value}', style: { fontSize: '12px' } },
            },
            legend: {
                enabled: true,
                itemStyle: { fontSize: '13px' }
            },
            plotOptions: {
                scatter: {
                    marker: { radius: 5, symbol: 'circle' },
                    states: { hover: { enabled: true } }
                },
                column: {
                    pointPadding: 0.1,
                    borderWidth: 0
                }
            },
            tooltip: {
                pointFormat: '国家: {point.name} <br/> 经度: {point.x} <br/> 出口量: {point.y} 万辆',
                style: { fontSize: '13px' }
            },
            series
        });
    });
}
