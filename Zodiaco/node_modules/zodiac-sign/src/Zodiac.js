function getZodiac(strDateofbirth, callback) {

    var pattern = /([0-9]+)\/([0-9]+)\/([0-9]+)/g;
    var dateofbirth = pattern.exec(strDateofbirth);
    var day = parseInt(dateofbirth[1]);
    var month = parseInt(dateofbirth[2]);
    var result;

    if ((month == 1 && day <= 20) || (month == 12 && day >= 22)) {
        result = 'Ma Kết';
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
        result = 'Bảo Bình';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        result = 'Song Ngư';
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
        result = 'Bạch Dương';
    } else if ((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
        result = 'Kim Ngưu';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        result = 'Song Tử';
    } else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
        result = 'Cự Giải';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
        result = 'Sử Tử';
    } else if ((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
        result = 'Xử Nữ';
    } else if ((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
        result = 'Thiên Bình';
    } else if ((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
        result = 'Thần Nông';
    } else if ((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
        result = 'Nhân Mã';
    }

    return callback(null, result);
}

module.exports.getZodiac = getZodiac
