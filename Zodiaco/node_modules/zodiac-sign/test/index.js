const zodiac = require('../src/Zodiac')
var expect = require('chai').expect;
describe('Zodiac Sign:', (done) => {
    describe('getZodiac:', (done) => {
        it('15/1/1990 - Ma Kết', (done) => {
            zodiac.getZodiac('15/1/1990', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Ma Kết');
                done();
            });
        });
        it('15/2/1990 - Bảo Bình', (done) => {
            zodiac.getZodiac('15/2/1990', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Bảo Bình');
                done();
            });
        });
        it('15/3/1991 - Song Ngư', (done) => {
            zodiac.getZodiac('15/3/1991', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Song Ngư');
                done();
            });
        });
        it('15/4/1991 - Bạch Dương', (done) => {
            zodiac.getZodiac('15/4/1991', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Bạch Dương');
                done();
            });
        });
        it('15/5/1992 - Kim Ngưu', (done) => {
            zodiac.getZodiac('15/5/1992', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Kim Ngưu');
                done();
            });
        });
        it('15/6/1992 - Song Tử', (done) => {
            zodiac.getZodiac('15/6/1992', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Song Tử');
                done();
            });
        });
        it('15/7/1993 - Cự Giải', (done) => {
            zodiac.getZodiac('15/7/1993', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Cự Giải');
                done();
            });
        });
        it('15/8/1993 - Sử Tử', (done) => {
            zodiac.getZodiac('15/8/1993', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Sử Tử');
                done();
            });
        });
        it('15/9/1994 - Xử Nữ', (done) => {
            zodiac.getZodiac('15/9/1994', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Xử Nữ');
                done();
            });
        });
        it('15/10/1994 - Thiên Bình', (done) => {
            zodiac.getZodiac('15/10/1994', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Thiên Bình');
                done();
            });
        });
        it('15/11/1995 - Thần Nông', (done) => {
            zodiac.getZodiac('15/11/1995', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Thần Nông');
                done();
            });
        });
        it('15/12/1996 - Nhân Mã', (done) => {
            zodiac.getZodiac('15/12/1996', (err, s) => {
                expect(err).to.equal(null);
                expect(s).to.equal('Nhân Mã');
                done();
            });
        });
    });
});
