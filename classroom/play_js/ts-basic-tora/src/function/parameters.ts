// オプションパラメータ
export const isUserSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'signIn') {
    console.log("Function parameters sample1 :", username)
    return true;
  } else {
    console.log("Function parameters sample2:", userId)
    return false;
  }
}

// デフォルトパラメータ
export const isUserSignedIn2 = (userId: string, username: string = "no name"): boolean => {
  if (userId === 'signIn') {
    console.log("Function parameters sample3 :", username)
    return true;
  } else {
    console.log("Function parameters sample4:", userId)
    return false;
  }
}

// レストパラメータ
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice;
  }, 0)
}
