export function cartFn(state, { type, payload, initialQty }) {
  console.log("payload", { payload, type });
  switch (type) {
    case "INITIAL":
      console.log(
        "initial payload",
        payload,
        "first element type",
        "reducer",
        [...payload].reduce(
          (sum, num) => ({
            ...sum,
            price: Number(sum.price) * sum.qty + Number(num.price) * num.qty,
          }),
          { price: 0, qty: 1 }
        )
      );
      return {
        ...state,
        subTotal:
          payload.length > 0
            ? [...payload].reduce(
                (sum, num) => ({
                  ...sum,
                  price:
                    Number(sum.price) * sum.qty + Number(num.price) * num.qty,
                }),
                { price: 0, qty: 1 }
              )
            : 0,
      };
    case "SUBTRACT":
      console.log(
        "subtract payload",
        payload,
        "length of payload",
        payload.length
      );
      return {
        ...state,
        subTotal:
          payload.length > 0
            ? [...payload].reduce(
                (sum, num) => ({
                  ...sum,
                  price:
                    Number(sum.price) * sum.qty + Number(num.price) * num.qty,
                }),
                { price: 0, qty: 1 }
              )
            : 0,
      };
    case "INCREASE":
      console.log("inccrease payload", payload, "initial qty", initialQty);
      return {
        ...state,
        subTotal:
          payload.length > 0
            ? [...payload].reduce(
                (sum, num) => ({
                  ...sum,
                  price:
                    Number(sum.price) * sum.qty + Number(num.price) * num.qty,
                }),
                { price: 0, qty: 1 }
              )
            : 0,
      };
  }
}
