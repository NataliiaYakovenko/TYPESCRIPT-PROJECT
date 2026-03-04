type Purchase = {
  product: string;
  price: number;
  paymentMethod: "cash" | "card";
};

function calculateExpenses(purchases: Purchase[]): {
  total: number;
  cashTotal: number;
  cardTotal: number;
} {
  let total = 0;
  let cashTotal = 0;
  let cardTotal = 0;

  for (const purchase of purchases) {
    total += purchase.price;

    if (purchase.paymentMethod === "cash") {
      cashTotal += purchase.price;
    } else {
      cardTotal += purchase.price;
    }
  }

  return {
    total,
    cardTotal,
    cashTotal,
  };
}

const purchases: Purchase[] = [
  {
    product: "Laptop",
    price: 1000,
    paymentMethod: "card",
  },
  {
    product: "Phone",
    price: 100,
    paymentMethod: "cash",
  },
  {
    product: "mouse",
    price: 50,
    paymentMethod: "cash",
  },
];

console.log(calculateExpenses(purchases));
