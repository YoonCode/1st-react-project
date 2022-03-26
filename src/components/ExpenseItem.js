import './ExpenseItem.css';

function ExpenseItem(props) {
  const year = props.date.toLocaleString('ko-KR', {year: 'numeric'});
  const month = props.date.toLocaleString('ko-KR', {month: '2-digit'});
  const day = props.date.toLocaleString('ko-KR', {day: '2-digit'});

  return (
  <div className="expense-item">
    <div>{year}</div>
    <div>{month}</div>
    <div>{day}</div>
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <div className="expense-item__price">${props.amount}</div>
    </div>
  </div>
  );
}

export default ExpenseItem;