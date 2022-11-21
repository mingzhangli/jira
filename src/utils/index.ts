import { useEffect, useState, useRef } from "react"

export const isFalsy: (value: unknown) => boolean = (value) =>
    value === 0 ? false : !value;
//判断属性值是否是0如果是0的话那就不删除
//函数传入一个对象，最好还是返回一个新的对象，因为如果使用传入的对象，很容易让对象的属性值收到污染
export const cleanObject = (object: { [key: string]: unknown }) => {
    //因为我们想要的是一个键值对的 对象，但是new Array、 正则都是属于对象，所以我们得这样写
    const result = { ...object };
    Object.keys(result).forEach((key) => {

        const value = result[key];
        if (isFalsy(value)) {
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

export const useDocumentTitle = (title: string, keepOnMount: boolean = true) => {
    //页面加载是 旧title
    //页面加载后  新title
    const oldTitle = useRef(document.title).current
    useEffect(() => {
        document.title = title
    }, [title])

    useEffect(() => {
        return () => {
            document.title = oldTitle
        }
    }, [oldTitle, keepOnMount])
}