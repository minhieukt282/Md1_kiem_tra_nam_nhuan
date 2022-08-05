function kiemtranam() {
    let year = parseInt(document.getElementById("nam").value);
    let year_test = false;
    if (year % 4 == 0) {
        let year100 = year % 100;
        if (year100 == 0) {
            let year400 = year % 400;
            if (year400 == 0) {
                year_test = true;
            }
        } else
            year_test = true;
    }


    if (year_test)
        document.getElementById("kiemtra").innerHTML = "Năm nhuận"

    else
        document.getElementById("kiemtra").innerHTML = "Không nhuận"

}
