import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/* 

이렇게 localhost:3000에 접속할 때마다 최초로 실행될 코드가 index.js 파일에 있죠

이렇게 말해야겠어요 사실 이 코드가 실행되는 게 아니라 변환된 버전의 코드가 실행되는 겁니다

프로젝트 설정에 코드를 변환하고 최적화하는 스크립트가 포함되었다면 그 과정은 백그라운드에서 처리되죠

npm start 프로세스가 진행되면 코드를 확인하기 시작하죠

이 프로세스는 코드를 확인해서 브라우저로 코드를 가져가서 전달하기만 하는 게 아니라 전달하기 전에 코드를 변환할 거예요

브라우저 안에서 특정 작업이 추가로 처리되는 거죠

*/