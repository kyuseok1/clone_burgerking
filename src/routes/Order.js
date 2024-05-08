import Header from "./Header";

const Order = () => {
  const cart = [
    { id: 1, name: "기네스와퍼", src: "/images/기네스와퍼.png", count: 1 },
    { id: 2, name: "몬스터와퍼", src: "/images/몬스터와퍼.png", count: 1 },
  ];

  return (
    <>
      <Header />
      <div class="container1">
        <div class="inner">
          <span class=" menu"> Home > 주문내역</span>
        </div>
      </div>

      <div class="order-container">
        <div class="order-box">
          <h2>user 님의 장바구니</h2>

          <thead>
            <tr>
              <th></th>
              <th>상품명</th>
              <th>수량</th>
              <th>변경하기</th>
              <th></th>
            </tr>
          </thead>

          {cart.map((a, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{cart[i].name}</td>
              <td>{cart[i].count}</td>
              <td>
                {" "}
                <button>+</button>
              </td>
            </tr>
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
