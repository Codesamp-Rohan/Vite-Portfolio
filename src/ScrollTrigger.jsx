import { useIntersection } from "react-use";

const useScrollTrigger = (ref, callback) => {
    const intersection = useIntersection(ref, {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
    });

    useEffect(() => {
        if (intersection && intersection.intersectionRatio > 0.5) {
            callback();
        }
    }, [intersection]);
};

export default useScrollTrigger;
