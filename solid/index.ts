// billet, credit, debit, pix

interface Card {
  number: string;
  name: string;
  expirationDate: string;
  cvv: string;
}

interface PaymentMethod {
  getDiscountAmount(amount: number): number;
}

class Billet implements PaymentMethod {
  public getDiscountAmount(amount: number): number {
    return amount * 0.05;
  }
}

class Credit implements PaymentMethod, Card {
  private installments: number;
  public number: string;
  public name: string;
  public expirationDate: string;
  public cvv: string;

  constructor(installments: number, cardInfo: Card) {
    this.installments = installments;
    this.number = cardInfo.number;
    this.name = cardInfo.name;
    this.expirationDate = cardInfo.expirationDate;
    this.cvv = cardInfo.cvv;
  }

  public getDiscountAmount(amount: number): number {
    if (this.installments > 1) {
      return amount * 0.05;
    }

    if (this.installments > 6) {
      return amount * 0.02;
    }

    return 0;
  }
}

class Debit implements PaymentMethod {
  public getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class Pix implements PaymentMethod {
  public getDiscountAmount(amount: number): number {
    return amount * 0.1;
  }
}

class CalculateOrderDiscount {
  public execute(amount: number, paymentMethod: PaymentMethod): number {
    return paymentMethod.getDiscountAmount(amount);
  }
}

const calculateOrderDiscount = new CalculateOrderDiscount();

calculateOrderDiscount.execute(100, new Billet());

const card = {
  number: "1234 5678 9012 3456",
  name: "John Doe",
  expirationDate: "12/23",
  cvv: "123",
};

calculateOrderDiscount.execute(100, new Credit(1, card));

calculateOrderDiscount.execute(100, new Credit(6, card));

calculateOrderDiscount.execute(100, new Debit());

calculateOrderDiscount.execute(100, new Pix());
