const synchrousFunc = () => {
  console.log("これは同期処理内のログ")
  return 'done!!'
}

const message = "同期処理";
const result = synchrousFunc()
console.log(message + result)
