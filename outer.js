/**
 * Created by huangjian on 17-11-22.
 */


function draw () {
    var updaterect = svg.selectAll('rect')
        .data(dataset);

    var enterrect =updaterect.enter();

    var exitrect = updaterect.exit();

    var updatetext = svg.selectAll('text')
        .data(dataset);

    var entertext = updatetext.enter();

    var exittext = updatetext.exit();

    updaterect
    .attr('fill','red')
    .attr('y',function (d,i) {
        return padding.top+i*rectstep;
    })
    .attr('x', function (d,i) {
        return padding.left+textwidth;
    })

    .attr('height',rectwidth)
    .attr('width',function (d) {
        return d;
    });

    enterrect.append('rect')
    .attr('fill','red')
    .attr('y',function (d,i) {
        return padding.top+i*rectstep;
    })
    .attr('x', function (d,i) {
        return padding.left+textwidth;
    })

    .attr('height',rectwidth)
    .attr('width',function (d) {
        return d;
    });

    exitrect.remove();

    updatetext
    .attr('fill','black')
    .attr('text-anchor','right')
    .attr('font-size','14px')
    .attr('y',function (d,i) {
        return padding.top+i*rectstep;
    })
    .attr('x', function (d,i) {
        return padding.left+textwidth;
    })
    .text(function (d,i) {
        return '第'+(i+1)+'个数'
    })
    .attr('dy','1.5em')
    .attr('dx',-textwidth);

    entertext
    .append('text')
    .attr('fill','black')
    .attr('text-anchor','right')
    .attr('font-size','14px')
    .attr('y',function (d,i) {
        return padding.top+i*rectstep;
    })
    .attr('x', function (d,i) {
        return padding.left+textwidth;
    })
    .text(function (d,i) {
        return '第'+(i+1)+'个数'
    })
    .attr('dy','1.5em')
    .attr('dx',-textwidth);

    exittext.remove();

}

function mysort() {
    dataset.sort(d3.ascending);
    draw();
}

function myadd() {
    dataset.push(Math.floor(Math.random()*200));
    draw();
}

function mycut() {
    dataset.pop();
    draw();
}