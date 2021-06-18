let express = require('express');
let app = express();

//public 폴더 내에 있는 css와 js에 접근할 수 있도록 static 미들웨어 설정
app.use(express.static('public'));

//HTML 대신 ejs를 렌더링 엔진으로 설정해 ejs 파일을 접속자에게 전달
app.set('view engine', 'ejs');

//localhost:3000으로 접속하면 index.ejs를 전달
//localhost:3000/이름 의 이름부분이 req.params.name에 저장
app.get('/', (req, res) => {
  res.render('index');
});

//localhost에서 3000번 포트로 서버 오픈
app.listen(3000, () => {
  console.log('서버 열림!');
});