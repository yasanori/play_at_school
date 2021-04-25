// アロー関数
export const logMessage = (message: string): void => {
  console.log("Function basic sample 1 :", message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log("Function basic sample 2 :", message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log("Function basic sample 3 :", message)
}


export const alowaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ
type LogMessage = (message: string) => void
export const logMessage4: LogMessage = (message) => {
  console.log("Function basic sample 4 :", message)
}

type FullLogMessage = {
  (message: string): void
}

export const logMessage5: FullLogMessage = (message) => {
  console.log("Function basic sample 5 :", message)
}
