import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const SkeletonLoader: React.FC = () => {
    return (
        <Skeleton baseColor="var(--gray4)" highlightColor="var(--gray6)" borderRadius={6}/>
    )
}