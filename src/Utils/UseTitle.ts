import {useEffect} from "react";

export function useTitle(title: string): void {
    useEffect(() => {
        document.title = "Shoe store | " + title
    }, [])
}


