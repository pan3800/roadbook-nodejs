const morgan = require('morgan');
const axios = require('axios');
const express = require('express');
const app = express();

/** 포트 설정 */
app.set('port', process.env.PORT || 8080);

/** 공통 미들웨어 */
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** 라우팅 설정 */
app.get('/airkorea', async (req, res) => {
    const serviceKey = 'vVnhyEevagxiCZn5OaFHOZLXNj8Bd05RNoDq%2FjFrxfJ0DsBkK0m5joPUnwr2D0ES%2BVSfUZWBnPJu7eZ%2FlOf0uw%3D%3D';
    const airUrl = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty?";
    
    let params = encodeURI('serviceKey') + '=' + serviceKey;
    params += '&' + encodeURI('numOfRows') + '=' + encodeURI('1');
    params += '&' + encodeURI('pageNo') + '=' + encodeURI('1');
    params += '&' + encodeURI('dataTerm') + '=' + encodeURI('DAILY');
    params += '&' + encodeURI('ver') + '=' + encodeURI('1.3');
    params += '&' + encodeURI('stationName') + '=' + encodeURI('마포구');
    params += '&' + encodeURI('returnType') + '=' + encodeURI('json');

    const url = airUrl + params;

    try {
        const result = await axios.get(url);
        res.json(result.data);
    } catch (error) {
        console.log(error);
    }
});

/** 서버와 포트 연결 .. */
app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 서버 실행중 ..')
});