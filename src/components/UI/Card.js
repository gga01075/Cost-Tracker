import "./Card.css"

const Card = (props) =>  {
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
}


export default Card;

/* 
이 Card컴포넌트는 일종의 래퍼 역할을 한다.
이 Card컴포넌트 사이에 다른 컴포넌트가 들어가 있으면 그 자식 컴포넌트는 props를 받아들이지 못하는데
전달된 props의 children이라는 예약어를 사용하면 
Card에 prop을 따로 전달하지 않아도 자식에게 전달할 수 있다.
*/
