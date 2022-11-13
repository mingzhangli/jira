import { useEffect, useState } from "react"

function isFalse(value: unknown) {
    return value === 0 ? false : !value
}
//判断属性值是否是0如果是0的话那就不删除
//函数传入一个对象，最好还是返回一个新的对象，因为如果使用传入的对象，很容易让对象的属性值收到污染
export const cleanObject = (obj: any) => {
    let result = { ...obj }
    Object.keys(result).forEach(key => {
        let value = result[key]
        if (isFalse(value)) {
            delete result[key]
        }
    })
    return result
}


export const useDebounce = <V>(value: V, delay?: number) => {
    const [result, setResult] = useState(value)

    useEffect(() => {
        let timer = setTimeout(() => {
            setResult(value)
        }, delay);
        return () => clearTimeout(timer)
    }, [value, delay])
    return result
}