import { useCallback } from 'react';

export const useScrollObserver = (scrollParams) => {

    const { setPage } = scrollParams.updatePage;

    const scrollObserver = useCallback(node => {
        new IntersectionObserver(entries => {
            entries.forEach(en => {
                if(en.intersectionRatio > 0) {
                    setPage(prevPage => {
                        prevPage += 1;
                        return prevPage;
                    })
                }
            })
        }).observe(node);   
    }, [setPage])

    return scrollObserver;
}