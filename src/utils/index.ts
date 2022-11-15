import { useEffect, useState } from "react"

export const isFalsy: (value: unknown) => boolean = (value) =>
    value === 0 ? false : !value;
//判断属性值是否是0如果是0的话那就不删除
//函数传入一个对象，最好还是返回一个新的对象，因为如果使用传入的对象，很容易让对象的属性值收到污染
export const cleanObject = (object: object) => {
    const result = { ...object };
    Object.keys(result).forEach((key) => {
        // @ts-ignore
        const value = result[key];
        if (isFalsy(value)) {
            // @ts-ignore
            delete result[key];
        }
    });
    return result;
};


export const useMount = (callback: () => void) => {
    useEffect(() => {
        callback();
    }, []);
};

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