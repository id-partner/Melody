$(document).ready(function () {
    var currentFloor = 2;
    var counterUp = $(".counter-up");/* кнока увелечения этажа */
    var counterDown = $(".counter-down"); /* кнока уменьшения этажа */
    var floorPath = $(".home-image path"); /* путь до элемента этаж */

    // при наведении меняется этаж в счетчике и подсвечивается
    floorPath.on("mouseover", function () {
        currentFloor = $(this).attr("data-floor");
        floorPath.removeClass("current-floor");
        $(".counter").text(currentFloor);
    });;

    counterUp.on("click", function () {
        if (currentFloor < 18 ) {
            currentFloor++;
            useCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(useCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${useCurrentFloor}]`).toggleClass("current-floor");
        }
    }
    )

    counterDown.on("click", function () {
        if (currentFloor > 2 ) {
            currentFloor--;
            useCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
            $(".counter").text(useCurrentFloor);
            floorPath.removeClass("current-floor");
            $(`[data-floor=${useCurrentFloor}]`).toggleClass("current-floor");
        }
    }
    )
});